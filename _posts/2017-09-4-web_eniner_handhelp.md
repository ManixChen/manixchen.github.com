---
layout: post
title: VUE3封装的一个功能
tags:  web vue3 pinia vue插件  web播放器
categories: vue3
---

话不多说直接上代码,自定义控件管理音乐播放，同样原理可以实现播放器状态，进度条都可以，写代码就是需要思路和反复的锤炼，不妨试试手

> 由于浏览器策略问题，自动播放现在基本上大部分浏览器不支持，在浏览器底层已经加了防爬虫机制，也是出于资源利用的意思，所有需要借用一些其他手段，列如Iframe，自行去百度即可

1、pinia  store 注册
```
import { ref,toRef } from 'vue'
import { defineStore } from 'pinia'
import { useScroll  } from "@vueuse/core";

export const useIndexStore = defineStore('index', () => {
  const isActive = ref(false)
//   音乐播放
  const isPlay = ref(false) 
  const {  x, y } = useScroll(window)
  // 音乐播放
  function playAudio(bgmusic) {
    bgmusic = toRef(bgmusic)
    // console.warn(bgmusic)
    if (isPlay.value) {
      bgmusic.value.pause()
      isPlay.value = false
    } else {
      bgmusic.value.play()
      isPlay.value = true
    }
  }   
  return { isActive,playAudio, x,y }
})

```

2.
```
<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import {
  User,
  House,
  Document,
  Reading,
  View,
  ChatDotSquare,
  Headset,Top
} from "@element-plus/icons-vue";
import { useIndexStore } from "@/stores/index";
import logo from"/public/logo.png"
import logoWhite from"/public/logo-white.png"
const indexstore = useIndexStore();
const { bgmusic,  y } = storeToRefs(indexstore);

</script>

 
```

3. 引用即可
 <span id="musicBg" @click="indexstore.playAudio(bgmusic)">
        <el-icon><Headset /></el-icon>
        <audio ref="bgmusic" v-show="false">
          <source src="../../assets/music/miss.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </span>