在 Spring Boot 中实现**离线英文数字和字母转语音**（无需网络），可以使用本地 TTS 库（如 FreeTTS 或 eSpeak）。以下是基于 **FreeTTS** 的完整实现步骤：

---

### 方法一：使用 FreeTTS（纯 Java 实现）

#### 1. 添加 FreeTTS 依赖
FreeTTS 需要手动安装到本地 Maven 仓库（因为中央仓库不可用）：
1. 下载 [FreeTTS-1.2.2.zip](https://sourceforge.net/projects/freetts/files/)。
2. 解压后找到 `freetts.jar` 和 `lib/jsapi.jar`。
3. 手动安装到本地仓库：
   ```bash
   mvn install:install-file -Dfile=freetts.jar -DgroupId=com.sun.speech -DartifactId=freetts -Dversion=1.2.2 -Dpackaging=jar
   mvn install:install-file -Dfile=jsapi.jar -DgroupId=javax.speech -DartifactId=jsapi -Dversion=1.0 -Dpackaging=jar
   ```
4. 在 `pom.xml` 中添加依赖：
   ```xml
   <dependency>
       <groupId>com.sun.speech</groupId>
       <artifactId>freetts</artifactId>
       <version>1.2.2</version>
   </dependency>
   <dependency>
       <groupId>javax.speech</groupId>
       <artifactId>jsapi</artifactId>
       <version>1.0</version>
   </dependency>
   ```

---

#### 2. 创建 TTS 服务类
处理字母和数字的朗读逻辑：
```java
import com.sun.speech.freetts.Voice;
import com.sun.speech.freetts.VoiceManager;
import com.sun.speech.freetts.audio.AudioPlayer;
import com.sun.speech.freetts.audio.SingleFileAudioPlayer;
import javax.sound.sampled.AudioFileFormat;
import java.io.File;
import java.io.IOException;

@Service
public class OfflineTTSService {

    private static final String VOICE_NAME = "kevin16"; // 使用英文语音

    public File textToSpeech(String text) throws IOException {
        // 初始化语音引擎
        System.setProperty("freetts.voices", "com.sun.speech.freetts.en.us.cmu_us_kal.KevinVoiceDirectory");
        VoiceManager voiceManager = VoiceManager.getInstance();
        Voice voice = voiceManager.getVoice(VOICE_NAME);

        if (voice == null) {
            throw new IllegalStateException("无法加载语音引擎: " + VOICE_NAME);
        }

        // 创建临时音频文件
        File audioFile = File.createTempFile("tts-", ".wav");
        AudioPlayer audioPlayer = new SingleFileAudioPlayer(
            audioFile.getAbsolutePath().replace(".wav", ""),
            AudioFileFormat.Type.WAVE
        );

        try {
            voice.allocate();
            voice.setAudioPlayer(audioPlayer);
            
            // 处理字母和数字的朗读（例如将 "A1" 转换为 "A one"）
            String processedText = preprocessText(text);
            voice.speak(processedText);
            
        } finally {
            voice.deallocate();
            audioPlayer.close(); // 确保文件保存
        }

        return audioFile;
    }

    // 预处理文本，确保字母和数字分开朗读（例如 "AB12" -> "A B 1 2"）
    private String preprocessText(String text) {
        // 在字母和数字之间插入空格
        return text.replaceAll("(?<=[A-Za-z])(?=\\d)|(?<=\\d)(?=[A-Za-z])", " ")
                   .replaceAll("(\\d)", " $1 ") // 确保数字单独朗读
                   .replaceAll("\\s+", " ");     // 合并多余空格
    }
}
```

---

#### 3. 创建 REST 控制器
```java
@RestController
public class TTSController {

    private final OfflineTTSService ttsService;

    public TTSController(OfflineTTSService ttsService) {
        this.ttsService = ttsService;
    }

    @PostMapping("/tts")
    public ResponseEntity<InputStreamResource> generateSpeech(
            @RequestParam String text) throws IOException {
        File audioFile = ttsService.textToSpeech(text);
        FileInputStream fis = new FileInputStream(audioFile);

        // 返回音频文件下载
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=speech.wav")
                .contentType(MediaType.parseMediaType("audio/wav"))
                .contentLength(audioFile.length())
                .body(new InputStreamResource(fis));
    }
}
```

---

#### 4. 测试接口
使用 `curl` 或 Postman 测试：
```bash
curl -X POST "http://localhost:8080/tts?text=ABC123"
```
生成的音频会朗读 "A B C 1 2 3"。

---

### 方法二：使用 eSpeak（轻量级跨平台 TTS）

#### 1. 安装 eSpeak
- **Linux**：`sudo apt-get install espeak`
- **Windows**：下载 [eSpeak](http://espeak.sourceforge.net/) 并配置环境变量。
- **Mac**：`brew install espeak`

#### 2. 通过 Java 调用命令行
```java
import java.io.File;
import java.io.IOException;

@Service
public class EspeakTTSService {

    public File textToSpeech(String text) throws IOException {
        File audioFile = File.createTempFile("tts-", ".wav");
        String cmd = String.format("espeak -v en -w %s \"%s\"", 
            audioFile.getAbsolutePath(), 
            text.replace("\"", "\\\"")); // 转义引号

        Process process = Runtime.getRuntime().exec(cmd);
        try {
            process.waitFor(); // 等待生成完成
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return audioFile;
    }
}
```

#### 3. 控制器（同方法一）
替换注入的 Service 为 `EspeakTTSService` 即可。

---

### 对比两种方案
| **特性**           | **FreeTTS**                          | **eSpeak**                     |
|--------------------|--------------------------------------|---------------------------------|
| 依赖               | 纯 Java，需手动安装 JAR              | 需安装本地程序（跨平台）        |
| 语音质量           | 一般                                 | 机械感较强                 