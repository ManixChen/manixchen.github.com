---
layout: post
title:  javascript webpack经常用的插件包
tags: javascript ES6
categories: ES6 vite
---

一、 **** webpack安装配置 ，纯手动，官网提供了脚本这里不做介绍****
1. npm install nodemon -g
nodemon可以替代node 来观察代码更改并自动 启动关闭程序
全局安装即可，
后续使用命令nodemon server.is  替代 npde server.js

2. npm init -y                   初始化npm包依赖生成package.json
   npm uni packagename           卸载包
   npm install/i packagename -g  全局安装软件包
   npm i packagename1 package2    多个空格即可

3.配置webpack依赖
 npm i webpack webpack-cli --save-dev
 ... package.json配置 scripts 脚本中 "build": "webpack"...
 ```
 {
  "name": "demo01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dayjs": "^1.11.10",
    "webpack": "^5.90.3",
    "webpack-cli": "^5.1.4"
  }
}

 ```
 >一定要在node_modules同级目录新建 src在里面维护代码
   npm run build 运行

4.webpack 的webpack.config.js,在项目根目录创建即可
```
const path = require('path');

module.exports = {
//   context: path.resolve(__dirname, 'demo1'),
  //模式开发或者生产
  mode: 'development',
  //入口
  entry: path.resolve(__dirname, 'src/index.js'),
  //出口
  output: {
    path: path.resolve(__dirname, 'dist'),//默认
    filename: 'index.js',//默认
    clean: true
  },

};
```
***  使用npm  run build 后还是需要自己手动引入到html，不方便维护，于是需要进行插件管理

5. npm install --save-dev html-webpack-plugin html插件 添加html支持，自动添加依赖
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
```
> 如果你有多个 webpack 入口，他们都会在已生成 HTML 文件中的 <script> 标签内引入。
   如果在 webpack 的输出中有任何 CSS 资源（例如，使用 MiniCssExtractPlugin 提取的 CSS），那么这些资源也会在 HTML 文件 <head> 元素中的 <link> 标签内引入
```
**** 可以配置多个HtmlWebpackPlugin***
> 下面的配置是实现在编译过程中将index.html打包到dist下并添加js依赖
module.exports = {
//   context: path.resolve(__dirname, 'demo1'),
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/src/index.js'),//默认
    filename: 'index.js',//默认
    clean: true
  },
  plugins: [
    // new HtmlWebpackPlugin(),// Generates default index.html
    new HtmlWebpackPlugin(// Also generate a about.html
    {

      title: 'manixchen webpack self site',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'dist/index.html')
    }
  )],//支出html文件自动导入变异后文件
};
```



6. 添加css支持 npm install --save-dev style-loader  css-loader
如果要使用 ![css-loader](https://www.webpackjs.com/loaders/css-loader/)，你需要安装 webpack@5
首先，你需要先安装 css-loader：
npm install --save-dev css-loader
首先，你需要安装 style-loader：

推荐将 style-loader 与 css-loader 一起使用
npm install --save-dev style-loader

然后把 loader 添加到你的 webpack 配置中。比如：
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```


7. 我习惯使用 ![scss 添加对营 loader](https://www.webpackjs.com/loaders/sass-loader/)
  npm install sass-loader sass webpack --save-dev
```
module: {
   rules: [
     {
       test: /\.css$/i,
       use: ["style-loader", "css-loader"],
     },
     {
       test: /\.s[ac]ss$/i,
       use: [
         "style-loader",
         "css-loader",
         {
           loader: "sass-loader",
           options: {
             sourceMap: true,
             sassOptions: {
               outputStyle: "compressed",
             },
           },
         },
       ],
     },
   ],
 },
```

8. 将CSS单独打包到大单独文件，降低请求消耗
```
本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

本插件基于 webpack v5 的新特性构建，并且需要 webpack 5 才能正常工作。

与 extract-text-webpack-plugin 相比：

异步加载
没有重复的编译（性能）
更容易使用
特别针对 CSS 开发
快速开始
首先，你需要安装 mini-css-extract-plugin：

npm install --save-dev mini-css-extract-plugin
建议 mini-css-extract-plugin 与 css-loader 一起使用。

之后将 loader 与 plugin 添加到你的 webpack 配置文件中。 例如：

默认情况下，mini-css-extract-plugin 会将 styles（<link> 元素）附加到当前 window 的 document.head 中。
plugins: [
    // new HtmlWebpackPlugin(),// Generates default index.html
    new HtmlWebpackPlugin({ // Also generate a about.html//支出html文件自动导入编译后文件
      title: "manixchen webpack self site",
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, "dist/index.html"),
    }),
    new MiniCssExtractPlugin({
        // insert: "#some-element",
    })
  ],
```

9. 这个插件使用 cssnano 优化和压缩 CSS
首先安装 css-minimizer-webpack-plugin：
$ npm install css-minimizer-webpack-plugin --save-dev
接着在 webpack 配置中加入该插件。示例：
```
entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist/"), //默认
    filename: "index.js", //默认
    clean: true,

    publicPath: "auto",
  },
  //   devServer: {
  //     static: './src',
  //    hot: true,
  //   },
  optimization: {
    // minimize: true,
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin({
        // parallel: true,//使用多进程并发执行，提升构建速度。 运行时默认的并发数：os.cpus().length - 1
        // include: /\/assets/,
      }),
    ],
  },
```



10.  开启编译服务器，实时查看web状态，节约编译时间
webpack-dev-server 提供了一个基本的 web server，并具有实时重新加载的功能。设置如下：

npm install --save-dev webpack-dev-server
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

const path = require("path");
module.exports = {
  mode: "development",
  //   context: path.resolve(__dirname, 'demo1'),
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist/"), //默认
    filename: "index.js", //默认
    clean: true,
  },
  devServer: {
    // static: {
    //     directory: path.resolve(__dirname, "dist"),
    // },
    // liveReload: false,
    host: "127.0.0.1",
    port: 8081,
  },
  optimization: {
    // runtimeChunk: 'single',
    // minimize: true,
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin({
        // parallel: true,//使用多进程并发执行，提升构建速度。 运行时默认的并发数：os.cpus().length - 1
        // include: /\/assets/,
      }),
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin(),// Generates default index.html
    new HtmlWebpackPlugin({
      title: "manixchen webpack self site",
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, "dist/index.html"),
    }),
    new MiniCssExtractPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader,, "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
};


```
*** package.json 配置如下 ***
```
{
  "name": "demo01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack serve --open"  //webpack-dev-server  open代表自动打开
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dayjs": "^1.11.10"
  },
  "devDependencies": {
    "css-loader": "^6.10.0",
    "css-minimizer-webpack-plugin": "^6.0.0",
    "html-webpack-plugin": "^5.6.0",
    "mini-css-extract-plugin": "^2.8.0",
    "sass": "^1.71.1",
    "sass-loader": "^14.1.1",
    "style-loader": "^3.3.4",
    "webpack": "^5.90.3",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.2"
  }
}

```




13. npm i cross-env --save-dev

const devMode = process.env.NODE_ENV !== "production";

packae.json(node版本我使用的版本如下，我那时候应该是网络问题，开启VPN便好了，如果出现一直编译ross-env NODE_ENV=production webpack失败可以尝试这个方法)
*** node 的nvm npx涉及到，无非就是版本和包运行管理器****
    ```
    C:\Users\Administrator>node -v
    v20.10.0

    C:\Users\Administrator>nvm  install 20.10.0
    Downloading node.js version 20.10.0 (64-bit)...
    Extracting node and npm...
    Complete
    npm v10.2.3 installed successfully.


    Installation complete. If you want to use this version, type

    nvm use 20.10.0

    C:\Users\Administrator>nvm  install 21.1.0
    Downloading node.js version 21.1.0 (64-bit)...
    Extracting node and npm...
    Complete
    npm v10.2.0 installed successfully.


    Installation complete. If you want to use this version, type

    nvm use 21.1.0

    C:\Users\Administrator>node -v
    v20.10.0

    C:\Users\Administrator>nvm ls

        21.1.0
      * 20.10.0 (Currently using 64-bit executable)

    C:\Users\Administrator>nvm use 21.1.0
    Now using node v21.1.0 (64-bit)
    ```

       "build": "cross-env NODE_ENV=production webpack --mode=production",
     "dev": "cross-env NODE_ENV=development webpack serve --open --mode=development",

*** 我之前理解偏差了，多此一举跑到windows的环境变量配置过，实时发现确实多次一举，有个好的网就行了***
cross-env NODE_ENV=development

*** 完整实例，自动更新js，css同步到页面 ***
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

const path = require("path");
module.exports = {
  mode: "development",
  //   context: path.resolve(__dirname, 'demo1'),
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist/"), //默认
    filename: "index.js", //默认
    clean: true,
  },
  devServer: {
    // static: {
    //     directory: path.resolve(__dirname, "dist/src"),
    // },
    // liveReload: false,
    host: "127.0.0.1",
    port: 8081,
  },
  optimization: {
    // runtimeChunk: 'single',
    // minimize: true,
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin({
        // parallel: true,//使用多进程并发执行，提升构建速度。 运行时默认的并发数：os.cpus().length - 1
        // include: /\/assets/,
      }),
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin(),// Generates default index.html
    new HtmlWebpackPlugin({
      title: "manixchen webpack self site",
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, "dist/index.html"),
    }),
    new MiniCssExtractPlugin({
        filename: "./src/assets/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader,, "css-loader"],
        use: [process.env.NODE_ENV === "development"?"style-loader":MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            process.env.NODE_ENV === "development"?"style-loader":MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
};

```







14. 其实你只要会了webpack配置，所有的框架你几乎可以按需引入，并不需要全局引入，
    太过于浪费性能，虽然打包工具能够部分去除未引用的插件，但是可以从源头上面解决这个问题
  列如 elementplus中 按需导入# 您需要使用额外的插件来导入要使用的组件。无论是字体图标还是组件都可按需导入，在实际开发场景中其实几乎不可能全部用户这些组件库，根据个人需求就很有必要了
  自动导入 推荐#  首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

npm install -D unplugin-vue-components unplugin-auto-import
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
```
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'


// https://vitejs.dev/config/
export default defineConfig({
  // define: {'process.env': {}},
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
         // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver({importStyle: "sass",}),

      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  base: '/manix/',//远程部署哪个目录就配置啥，如果是根目录就为空，或者不配
  publicDir: "/manix/", //静态资源服务的文件夹
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  // 解决跨域需求
  server: {
    // host: "localhost",
    // https: false,//是否启用 http 2
    // cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    // open: true,//服务启动时自动在浏览器中打开应用
    // port: "9000",
    // strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    // force: true,//是否强制依赖预构建
    // hmr: false,//禁用或配置 HMR 连接
    proxy: {
      '^/api': {
        target: 'http://t.weather.sojson.com/', //目标源，目标服务器，真实请求地址()会替换当前环境中的本地服务器baeurl
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, "/api"), //重写真实路径,替换/api
      }
    }
  },
  //打包配置
 build: {
  // target: "modules", //浏览器兼容性  "esnext"|"modules"
  // outDir: "dist",//指定输出路径
  // assetsDir: "assets",//生成静态资源的存放路径
  assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
  // cssCodeSplit: true, //启用/禁用 CSS 代码拆分
  // sourcemap: false,//构建后是否生成 source map 文件
  // rollupOptions: {//自定义底层的 Rollup 打包配置
  // },
  // commonjsOptions: {//@rollup/plugin-commonjs 插件的选项
  // },
  // lib: { //构建的库
  // },
  // manifest: false,//当设置为 true，构建后将会生成 manifest.json 文件
  // // 设置为 false 可以禁用最小化混淆，
  // // 或是用来指定使用哪种混淆器
  // // boolean | 'terser' | 'esbuild'
  // minify: "terser", //terser 构建后文件体积更小
  //传递给 Terser 的更多 minify 选项。
  terserOptions: {
    compress:{
      drop_console: true,//移除所有console
      drop_debugger: true
    }
  },  
  // write: true,//设置为 false 来禁用将构建后的文件写入磁盘
  // //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
  // emptyOutDir: true,
  brotliSize: true, //启用/禁用 brotli 压缩大小报告
  chunkSizeWarningLimit: 1500 //chunk 大小警告的限制
 },
//  ssr: {
//   // 列出的是要为 SSR 强制外部化的依赖
//   external: [],
//   //列出的是防止被 SSR 外部化依赖项
//   noExternal: [
//   ]
//  }
});

```

*** 引用部分 ***
<script setup>
import { reactive, ref } from "vue";  
import {
  HomeFilled,
} from "@element-plus/icons-vue";
import 'element-plus/es/components/notification/style/css'
import { ElNotification } from 'element-plus'
</script>
















三、 方便后期使用，常用插件，提升工作效率
1. dayjs 日期格式化

2. lodash
> Lodash 能够大幅度提高前端 JavaScript 编程的效率和可读性，使得代码编写更加快捷、简洁、易懂。如果你还没有使用过 Lodash，建议尝试使用它来优化你的项目，提高开发效率。向大家介绍或简单的展示一下它的能力，或许能够吸引到你。Lodash 是一个流行的 JavaScript 实用工具库，提供了许多常用的函数和工具，能够方便地处理集合、字符串、数值、函数等多种数据类型，减少编写重复代码的时间和精力。Lodash 的 API 设计与 ES6 的新特性相似，同时兼容了更早的浏览器版本。Lodash 支持模块化加载，可以通过 npm 或在浏览器中直接引入来使用。
Lodash 有多达 300 多个函数，每个函数都有详细的文档和示例，能够快速地满足各种编程需求。同时，Lodash 的功能也非常完善，比如数组、对象等的操作，以及日期、数学计算、函数式编程等多方面支持。Lodash 还提供了链式调用的方式，简化操作的流程。
*** npm install lodash ****

![具体常用API见文档,功能相当的全](./2019-06-04-lodash-node)


3、then-fs  
import thenFs from 'then-fs';

async function getAllFile() {
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8');
  console.log(r1);
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8');
  console.log(r2);
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8');
  console.log(r3);
}

getAllFile();


4. npm install vue-animate-number
```

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

<template>
  <div>
    <animate-number
      from="1"
      to="10"
      duration="1000"
      easing="easeOutQuad"
      :formatter="formatter"
    ></animate-number>

    <!-- parseInt as default formatter -->
    <animate-number from="1" to="10"></animate-number>

    <!-- manually start animation by click -->
    <animate-number ref="myNum" from="0" to="10" mode="manual" :formatter="formatter"></animate-number><br>

    <button type="button" @click="startAnimate()"> animate! </button>
  </div>
</template>

<script>
  export default {
    methods: {
      formatter: function (num) {
        return num.toFixed(2)
      },

      startAnimate: function () {
        this.$refs.myNum.start()
      }
    }
  }
</script>
```
