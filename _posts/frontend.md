> 嗨 泽清 
>     好像来公司也有几个月了，最近项目是否还顺利呢，看你们数据标注最近也挺忙……
>     记得你刚来时候……
>     回忆，经历，结合互联网发展+自身职业经历+褒贬结合，更多体现出现在大学生的缺点不足，让其知道自己的欠缺，公司对于员工的要求是来源于社会对企业的要求，为什么会说大公司有大公司的规矩制度，引导出公司对于员工的要求，其实最近公司项目也是特别多，结合情况
>     分析她对公司的看法还有职业规划
>     如果说是对前端有兴趣

# 前端考核标准:

一、列举几个现在常见的样式方案：预处理

> ① CSS Modules  ②Sass/SCSS  ③less   ④Styled JSX   ⑤Styled Components  

1、解释：预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码

2、CSS 工程化是为了解决以下问题
宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
编码优化：怎样写出更好的 CSS？

3、构建：如何处理我的 CSS，才能让它的打包结果最优？
可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手

4、预处理器的优点

1. 变量、函数、混合、嵌套等功能，可以让我们更方便地管理代码，提高代码的复用率和可维护性
2. 自动补全、编译错误提示、压缩、浏览器兼容性检查等功能，可以让我们更快、更准确地完成编码工作
3. 预处理器可以让我们更方便地编写可维护性高、可扩展性好的代码，提高开发效率
   
   ```scss
   $base-color: #ff0000; 
   $lighter-color: lighten($base-color, 20%); 
   $darkened-color: darken($base-color, 20%); 
   .light { color: $lighter-color; } 
   .dark { color: $darkened-color; }
   ```

二、 浏览器原理
1、解释一下浏览器的渲染机制
浏览器的渲染机制是一个复杂且精细的过程，主要涉及到解析HTML、CSS，构建DOM树和CSSOM树，然后合并它们以构建渲染树，再进行布局和绘制，最终将页面内容展示给用户。

2、浏览器的渲染过程
解析HTML并构建DOM树：当浏览器接收到HTML文档后，它会解析HTML标签，将标签转换为DOM（文档对象模型）节点，并按照文档的结构将这些节点组织成一棵树形结构，即DOM树。DOM树是浏览器内部表示网页内容的一种方式，它包含了网页中所有的元素和属性。
解析CSS并构建CSSOM树：与此同时，浏览器也会解析CSS代码，将样式规则转换为CSSOM（CSS对象模型）节点，并构建成CSSOM树。CSSOM树描述了HTML文档中每个元素的样式信息。
构建渲染树：接下来，浏览器会将DOM树和CSSOM树合并成渲染树（Render Tree）。渲染树只包含需要显示的节点和样式信息，不包括隐藏的元素或不可见的样式。这一步是渲染过程中的关键步骤，因为它决定了哪些元素将被渲染以及如何渲染。
布局：在构建完渲染树后，浏览器会根据渲染树的信息计算每个节点的位置和大小，生成布局。这个过程也称为重排或回流，它涉及到对元素的位置和尺寸进行精确计算，以确保页面元素能够正确地显示在屏幕上。
绘制：布局完成后，浏览器会将每个节点的样式信息转换为像素，然后绘制到屏幕上。这个过程也称为重绘，它涉及到将元素的视觉表现绘制出来。 

3、什么是重绘和回流
重绘和回流是浏览器渲染页面时的两个重要概念。
重绘（Repaint）：当页面中元素样式的改变不影响布局时，浏览器将只会重新绘制受影响的元素，这个过程称为重绘。例如，改变一个元素的背景色或文字颜色，但不影响其位置和大小，就会触发重绘。
回流（Reflow 或 Relayout）：也称为重排，当页面布局或几何属性发生变化时，浏览器需要重新计算元素的几何属性，并重新构建渲染树，这个过程称为回流。例如，改变元素的宽度、高度、位置等属性，或者添加、删除DOM节点，都会触发回流。
① 减少重绘和回流的方法： 

> 避免频繁操作样式：尽量一次性修改多个样式属性，而不是逐一修改，以减少浏览器的重绘和回流次数。
> 利用CSS3动画：CSS3动画和过渡不会触发回流，因为它们是通过GPU进行渲染的，这可以大大提高性能。
> 避免使用table布局：table布局在发生变化时可能需要多次计算，这会增加回流次数。尽量使用flexbox或grid等现代布局技术。
> 批量修改DOM：如果需要添加、删除或修改多个DOM节点，可以考虑使用DocumentFragment或离线节点，这样可以在一次回流中完成所有操作。
> 使用绝对定位：绝对定位的元素不会触发其父元素及后续元素的回流，因为它们已经脱离了正常的文档流。
> 避免使用内联样式：内联样式会增加重绘和回流的可能性，因为它们会直接修改元素的样式。尽量使用外部CSS文件来管理样式。
> 优化图片加载：使用合适的图片格式和大小，避免使用大量的图片，以减少页面的渲染负担。
> 利用浏览器的缓存机制：对于不经常变动的资源，可以利用浏览器的缓存机制来减少请求次数，从而加快页面加载速度。

综上所述，通过优化CSS样式、减少DOM操作、利用浏览器缓存等方式，可以有效地减少页面的重绘和回流次数，提高页面的渲染性能

4、浏览器的事件机制

* 解释一下浏览器的事件机制：浏览器的事件机制主要涉及到事件的触发、传播和处理。

* 事件的触发：
  
  > 当用户在浏览器中进行某些操作，如点击按钮、移动鼠标或输入文本时，会触发相应的事件。这些事件被封装为event对象，包含了事件的属性和方法，

* 事件的传播过程

* 事件的传播过程分为三个阶段：捕获阶段、目标阶段和冒泡阶段。
  在DOM2级事件模型中，事件首先在最外层HTML元素上开始捕获，然后向下传递到事件的目标元素，沿途触发所有设置了捕获事件处理器的元素。接着，事件处理器在事件的目标元素上执行，这是事件处理的核心阶段。最后，事件从目标元素向上回溯，触发所有设置了冒泡事件处理器的元素，完成冒泡阶段。这种机制允许开发者在事件传播的不同阶段拦截并处理事件。
  常见的事件类型包括鼠标事件（如click、mouseover、mousedown等）、键盘事件（如keydown、keyup、keypress等）以及表单事件（如submit、input、change等）。这些事件为开发者提供了丰富的交互能力，可以响应用户的各种操作并相应地更新页面内容。

* 在事件处理过程中，浏览器还维护一个事件队列。一旦事件队列中的事件得到处理，它就会被移除。此外，浏览器还支持宏任务和微任务的概念，用于管理异步执行的任务。例如，setTimeout、setInterval等是常见的宏任务，而Promise的回调则是微任务。这些任务的执行顺序和优先级也是事件机制的一部分

5、web安全攻击方式及防御方法

* SQL注入
* 跨站脚本攻击 (XSS)
* 跨站请求伪造 (CSRF)
* 未经授权的访问
* 重定向攻击
* 文件上传漏洞
* 目录遍历攻击
* 代码执行漏洞
* 点击劫持攻击
* cookie攻击
* DOS攻击

6、浏览器存储数据方式有哪些

* Cookie
* Web Storage
  
  > Local Storage：这种存储方式类似于电脑或手机上的下载功能，可以永久保存数据。除非用户主动删除，否则数据会一直存在。
  > Session Storage：  只在当前会话下有效。当页面关闭时，存储的数据就会被删除。这种方式常用于存储一些临时性的信息，如网页微博之类的密码保存。 
* IndexedDB  IndexedDB是一种浏览器本地数据库，可以在客户端浏览器中存储大量的结构化数据

7、如何实现浏览器内多个标签页之间的通信

* 使用localStorage
  
  ```
  // 在一个标签页中设置localStorage  
  localStorage.setItem('key', 'value');   
  // 在另一个标签页中监听storage事件  
  window.addEventListener('storage', function(event) {  
     if (event.key === 'key') {  
         console.log('Value changed to:', event.newValue);  
     }  
  }); 
  ```
* 使用BroadcastChannel API
  
  ```
  // 创建一个新的BroadcastChannel实例  
  const bc = new BroadcastChannel('my-channel');  
  ```

// 发送消息  
bc.postMessage('Hello, world!');  

// 接收消息  
bc.onmessage = event => {  
    console.log('Received', event.data);  
}; 

```
* 使用Service Workers
```

// 注册Service Worker  
navigator.serviceWorker.register('/service-worker.js').then(function(registration) {  
    console.log('Service Worker Registered');  
}).catch(function(err) {  
    console.log('Service Worker Registration Failed: ', err);  
});  

// 在Service Worker中发送消息  
self.clients.matchAll().then(function(clients) {  
    clients.forEach(function(client) {  
        client.postMessage('Hello from Service Worker!');  
    });  
});  

// 在页面中接收消息  
navigator.serviceWorker.onmessage = function(event) {  
    console.log('Received message from Service Worker:', event.data);  
}; 

```
三、前端常识
1. 前端页面有哪三层构成
*  结构层：HTML 表现层：CSS  行为层：JavaScript
2. 常见的块级元素：p、div、form、ul、li、ol、table、h1、h2、h3、h4、h5、h6、dl、dt、dd

        常见的行级元素：span、a、img、button、input、select
3. H5有哪些新元素和新特性
>HTML5主要是关于图像、位置、存储、多任务等功能的增加：
* 语义化标签，如：article、footer、header、nav等
* 视频video、音频audio
* 画布canvas
* 表单控件，calemdar、date、time、email
* 地理
* 本地离线存储，localStorage长期存储数据，浏览器关闭后数据不丢失，sessionStorage的数据在浏览器关闭后自动删除
* 拖拽释放

* 
* 

四、iframe 
1、iframe的优点
* 可以在页面上独立显示一个页面或者内容,不会与页面其他元素产生冲突。
*  可以在多个页面中重用同一个页面或者内容,可以减少代码的冗余。
*  加载是异步的,页面可以在不等待 iframe 加载完成的情况下进行展示。
*  方便地实现跨域访问

2、 iframe的缺点
*  搜索引擎可能无法正确解析 iframe 中的内容
*  会阻塞主页面的 onload 事件
*  和主页面共享连接池,影响页面并行加载

五、  微前端框架   
> 为了解决庞大的一整块后端服务带来的变更与扩展方面的限制，出现了微服务架构。然而，越来越重的前端工程也面临同样的问题，自然地想到了将微服务思想应用（照搬）到前端，于是有了“微前端（micro-frontends）”的概念。即，一种由独立交付的多个前端应用组成整体的架构风格。具体的，将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品。
1、 qiankun是一个基于single-spa的微前端实现库，在此基础上实现开箱即用，使得子项目只需要很少的改动，就可以接入
* 基础single-spa封装，提供了更加开箱即用的API
* 技术栈无关，任何技术栈均可使用
* HTML Entry接入方式，使得接入微应用和iframe简单度相似
样式隔离，确保微应用之间样式互不干扰
* JS沙箱，确保微应用之间全局变量/事件 不冲突（JS沙箱代表：一块完全独立的区域，使用的都是自己独立的属性和方法）
资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度
2、 umi插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统 


六、JavaScript
1.  JavaScript共有八种数据类型
* 分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt
>Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。 

2. 请简述JavaScript中的this
> this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。

* 第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
* 第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
* 第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
* 第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。  

3.  箭头函数与普通函数有什么区别 
* 箭头函数比普通函数更加简洁
* 箭头函数没有自己的this
* 箭头函数继承来的this指向永远不会改变
* call()、apply()、bind()等方法不能改变箭头函数中this的指向
* 箭头函数不能作为构造函数使用
*  箭头函数没有自己的arguments
*  箭头函数没有prototype
*  箭头函数不能用作Generator函数，不能使用yeild关键字
*  


4.  let、const、var的区别
* var存在变量提升
* var声明的变量可以重复声明
* var声明的变量可以重新赋值
* 内层变量可能覆盖外层变量
*  用来计数的循环变量泄露为全局变量
*  

5. 数组的遍历方法有哪些？
```javascript
forEach()
filter()
for...of 
every() 
some()
find() 
findIndex()
reduce()对数组正序操作；
reduceRight()对数组逆序操作
```

6. 原型和原型链
* 对原型、原型链的理解
  在JavaScript中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 proto 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。
  当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就是新建的对象为什么能够使用 toString() 等方法的原因。
  特点： JavaScript 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。当修改原型时，与之相关的对象也会继承这一改变。 

* 原型链的终点是什么？
  由于Object是构造函数，原型链终点是Object.prototype.__proto__，而Object.prototype.__proto__=== null // true，所以，原型链的终点是null。原型链上的所有原型都是对象，所有的对象最终都是由Object构造的，而Object.prototype的下一级是Object.prototype.__proto__

* 如何获得对象非原型链上的属性
  
  ```
  for(var key in obj){
        if(obj.hasOwnProperty(key))
           res.push(key+': '+obj[key]);
   }
  ```
7. 实现call、apply 及 bind 函数

8. JavaScript中的异步机制可以分为以下几种：
- **回调函数** 的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

- **Promise** 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

- **generator** 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

- **async 函数** 的方式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。
9. setTimeout、Promise、Async/Await 的区别
* Promise本身是同步的立即执行函数， 当在executor中执行resolve或者reject的时候, 此时是异步操作， 会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行，打印p的时候，是打印的返回结果 

* async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体

* async/await其实是Generator 的语法糖，它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。从字面上来看，async是“异步”的简写，await则为等待，所以很好理解async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。当然语法上强制规定await只能出现在asnyc函数中
10. Promise.all和Promise.race的区别的使用场景
    * Promise.all Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值
    * Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决

11. 哪些情况会导致内存泄漏
- **意外的全局变量：** 由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- **被遗忘的计时器或回调函数：** 设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- **脱离 DOM 的引用：** 获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- **闭包：** 不合理的使用闭包，从而导致某些变量一直被留在内存当中。
12. js设计模式有哪些？
* 创建型模式，共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。
* 结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。
* 行为型模式，共十一种：策略模式、模板方法模式、观察者模式/发布订阅模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。
13. 数组去重的方法有哪些？      
* Set 去重：Set 是一个新的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复的值。因此，可以利用 Set 的去重功能，将数组中的重复元素去掉。      
* filter 去重：filter 方法可以创建一个新数组，其中包含所有给定数组中满足测试函数的元素。因此，可以利用 filter 方法，将数组中的重复元素去掉。                
* indexOf 去重：indexOf 方法可以查找数组中指定元素的第一个出现位置，如果没有找到，则返回 -1。因此，可以利用 indexOf 方法，将数组中的重复元素去掉。                
* reduce 去重：reduce 方法可以对数组中的元素进行累计操作，最终返回一个值。因此，可以利用 reduce 方法，将数组中的重复元素去掉。                
* 自定义去重：可以自定义一个函数，遍历数组，将重复元素存入一个新数组，然后返回这个新数组。                
* 其他：Object.keys() 方法可以获取一个对象的所有键名，然后利用 filter 方法过滤掉重复的键名，最后利用 map 方法将键名转换为键值，组成一个新的对象。
14. 深拷贝和浅拷贝的区别
* 深拷贝：拷贝一个对象时，拷贝对象及其所有属性，包括原型链上的属性。
* 浅拷贝：拷贝一个对象时，拷贝对象及其所有属性，但不包括原型链上的属性。
15. 事件循环机制

.  前端性能优化有哪些方法？

* 减少 HTTP 请求：减少 HTTP 请求可以有效地降低页面加载时间，提高用户体验。
* 压缩代码：压缩代码可以减少代码体积，提高加载速度。
* 缓存：缓存可以减少网络请求，提高页面加载速度。
* 图片懒加载：图片懒加载可以提高页面加载速度，减少用户等待时间。
* 减少 DOM 元素：减少 DOM 元素可以减少页面渲染时间，提高页面交互速度。
* 避免重绘和回流：避免重绘和回流可以提高页面渲染效率，减少页面闪烁。
* 优化 CSS 选择器：优化 CSS 选择器可以提高页面渲染效率，减少页面闪烁。
* 避免使用 inline-style：避免使用 inline-style 可以提高页面渲染效率，减少页面闪烁。
* 避免使用 eval 和 with：避免使用 eval 和 with 可以提高页面渲染效率，减少页面闪烁。
* 避免使用字符串拼接：避免使用字符串拼接可以提高页面渲染效率，减少页面闪烁。
* 避免使用全局变量：避免使用全局变量可以提高页面渲染效率，减少页面闪烁。
* 避免使用过多的事件绑定：避免使用过多的事件绑定可以提高页面渲染效率，减少页面闪烁。
* 避免使用过多的 setTimeout：避免使用过多的 setTimeout 可以提高页面渲染效率，减少页面闪烁。
* 避免使用过多的 setInterval：避免使用过多的 setInterval 可以提高页面渲染效率，减少页面闪烁。
* 优化图片格式：优化图片格式可以减少图片体积，提高加载速度。
* 优化 CSS 动画：优化 CSS 动画可以提高动画效果，减少页面闪烁。
* 优化 JavaScript 代码：优化 JavaScript 代码可以提高页面渲染效率，减少页面闪烁。
* 优化移动端体验：优化移动端体验可以提高页面响应速度，提高用户体验。
* 优化服务器响应：优化服务器响应可以减少服务器负载，提高服务器性能。
* 优化数据库查询：优化数据库查询可以减少数据库负载，提高数据库性能。
* 优化服务器硬件配置：优化服务器硬件配置可以提高服务器性能，减少服务器负载。
* 优化 CDN 配置：优化 CDN 配置可以提高用户访问速度，提高网站流量。
* 优化 DNS 解析：优化 DNS 解析可以减少 DNS 查询时间，提高网站响应速度。
* 优化 Webpack 配置：优化 Webpack 配置可以提高构建速度，减少构建时间。
* 优化服务器配置：优化服务器配置可以提高服务器性能，减少服务器负载。
* 优化服务器架构：优化服务器架构可以提高服务器性能，减少服务器负载。
* 优化服务器部署：优化服务器部署可以提高服务器性能，减少服务器负载。
* 优化服务器安全：优化服务器安全可以提高网站安全性，减少网站被攻击的风险。
* 优化服务器日志：优化服务器日志可以提高网站运行效率，减少服务器负载。
* 优化服务器部署：优化服务器部署可以提高网站运行效率，减少服务器负载。
* 优化服务器架构：优化服务器架构可以提高网站运行效率，减少服务器负载。
* 优化服务器硬件配置：优化服务器硬件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器软件配置：优化服务器软件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器网络配置：优化服务器网络配置可以提高网站运行效率，减少服务器负载。
* 优化服务器负载：优化服务器负载可以提高网站运行效率，减少服务器负载。
* 优化服务器硬件配置：优化服务器硬件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器软件配置：优化服务器软件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器网络配置：优化服务器网络配置可以提高网站运行效率，减少服务器负载。
* 优化服务器负载：优化服务器负载可以提高网站运行效率，减少服务器负载。
* 优化服务器硬件配置：优化服务器硬件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器软件配置：优化服务器软件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器网络配置：优化服务器网络配置可以提高网站运行效率，减少服务器负载。
* 优化服务器负载：优化服务器负载可以提高网站运行效率，减少服务器负载。
* 优化服务器硬件配置：优化服务器硬件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器软件配置：优化服务器软件配置可以提高网站运行效率，减少服务器负载。
* 优化服务器网络配置：优化服务器网络配置可以提高网站运行效率，减少服务器负载。
15. 前端安全有哪些方法？
* 输入验证：输入验证可以有效地防止攻击者通过输入恶意代码或数据，导致网站被攻击。
* 输出编码：输出编码可以防止攻击者通过代码注入攻击，导致网站被攻击。
* 内容安全策略：内容安全策略可以有效地防止攻击者通过恶意代码或数据，窃取用户信息，导致网站被攻击。
* 跨站请求伪造（CSRF）：跨站请求伪造（CSRF）是一种攻击方式，攻击者通过伪装成受信任用户的请求，盗取用户的敏感信息。
* 点击劫持：点击劫持是一种攻击方式，攻击者通过诱导用户点击链接，盗取用户的敏感信息。
* 跨站脚本（XSS）：跨站脚本（XSS）是一种攻击方式，攻击者通过恶意代码注入，盗取用户的敏感信息。
* 跨站点请求伪造（SSRF）：跨站点请求伪造（SSRF）是一种攻击方式，攻击者通过伪装成受信任服务器，发送恶意请求，盗取用户的敏感信息。
* 其他安全漏洞：其他安全漏洞，如 SQL 注入、命令执行、跨站脚本攻击等，都可能导致网站被攻击。
* 验证码：验证码可以有效地防止攻击者通过自动化攻击，导致网站被攻击。

七、 React生态有哪些

1. UI 库
* Ant Design 、 Chakra UI 、MUI 、 React Bootstrap、Headless UI 
2. 数据流管理库
* Redux 、 MobX 、 Recoil 
3. 路由库
* React Router  、React Router DOM  、React Router Native 
4. 状态管理库
* Redux  、MobX  、Recoil 
5. 服务器端渲染库
* Next.js  Gatsby 
6. 开发工具
* create-react-app  、Vue CLI  、Vite 
7. 单元测试库
* Jest  、Mocha  、Ava 
8. 集成测试库
* Cypress  、Puppeteer 
9. 代码风格检查工具
* ESLint  、Prettier 
10. 代码格式化工具
* Prettier  、StandardJS 
11. 代码分割工具
* Webpack  、Parcel 、Rollup 
12. 代码压缩工具
* UglifyJS  、Babili     

7.1  React 的生命周期

* 主要分为三个阶段：MOUNTING、RECEIVE_PROPS、UNMOUNTING
  新版的生命周期函数增加了 getDerivedStateFromProps，这个生命周期其实就是将传入的 props 映射到 state 中

7.2  React组件传值有哪些方式

* 父传子：props 子传父：通过在父组件引入的子组件中传递一个函数并传参数，子组件去触发这个函数更改参数完成数据更新 
* 跨多层组件传值：通过context api完成

7.3 JSX是什么，它和JS有什么区别？

* JSX 是一种类似于 XML 的语法扩展，它可以用来定义 UI 组件的结构。JSX 与 JavaScript 的语法有些类似，但 JSX 并不是 JavaScript，它需要被编译成 JavaScript 代码才能运行。JSX 主要用来描述 UI 组件的结构，并不是用来编写业务逻辑。JSX 与 JavaScript 的区别主要在于 JSX 不能直接执行，需要编译成 JavaScript 代码才能运行。       

7.4  React的事件处理有哪些？       

* 事件绑定：通过在 JSX 中绑定事件，可以为组件添加事件处理函数。                       
* 事件对象：React 的事件对象与浏览器的事件对象有所不同，React 的事件对象只有一个属性：target，它表示事件的目标元素。              

7.5  React的条件渲染有哪些？            

* if 语句：通过 if 语句可以实现条件渲染，只有当条件为 true 时才渲染 JSX 元素。                        
* 条件渲染函数：通过函数返回 JSX 元素，可以实现条件渲染。                           
* 三目运算符：通过三目运算符可以实现条件渲染。                           

7.6  React的列表渲染有哪些？                    

* map 方法：通过 map 方法可以渲染一个数组中的 JSX 元素。                                      
* 列表渲染函数：通过函数返回 JSX 元素数组，可以实现列表渲染。                               
* 展开运算符：通过展开运算符可以将 JSX 元素数组展开，并渲染成 JSX 元素。                           

7.7  React的表单处理有哪些？                    

* 受控组件：React 的表单元素都可以用受控组件来处理。                                      
* 非受控组件：React 的表单元素都可以用非受控组件来处理。                                      
* 事件处理函数：React 的表单元素的 onChange、onInput 等事件处理函数可以接收事件对象。                                   
* 表单验证：React 可以通过一些库来实现表单验证。                                   

7.8 为什么React自定义组件首字母要大写

> jsx通过babel转义时，调用了React.createElement函数，它接收三个参数，分别是type元素类型，props元素属性，children子元素。    

7.9 React中元素和组件的区别

* react组件有类组件、函数组件
* react元素是通过jsx创建的

八、vue生态有哪些   

1. UI 库   
* Element UI  ②iView  ③Bootstrap-Vue  ④Ant Design Vue  ⑤Vant 
2. 数据流管理库             
* Vuex  ③MobX  ④Pinia       
3. 路由库             
* Vue Router  ③Vue Router Next  ④Vue Router Legacy       
4. 状态管理库                  
* Vuex  ③Pinia  ④Vuex ORM       
5. 服务器端渲染库             
* Nuxt.js  ③Vue SSR  ④Vue Static       
6. 开发工具             
* Vue CLI  ③Vue Devtools  ④VuePress       
7. 单元测试库             
* Jest  ③Mocha  ④Ava       
8. 集成测试库             
* Cypress  ③Puppeteer       
9. 代码风格检查工具             
* ESLint  ③Prettier       
10. 代码格式化工具             
* Prettier  ③StandardJS       
11. 代码分割工具             
* Webpack  ③Parcel  ④Rollup       
12. 代码压缩工具             
* UglifyJS  ③Babili       

1.vue的生命周期有哪些及每个生命周期做了什么？
beforeCreate是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。
created在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。
beforeMount发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
mounted在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。
beforeUpdate发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
updated发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
beforeDestroy发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
destroyed发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁

2.vue的路由有哪些方式？

* hash模式：hash模式下，路由的变化不会刷新页面，而是通过改变url的hash部分实现的，因此不会触发onhashchange事件，因此无法进行页面跳转。
* history模式：history模式下，路由的变化会刷新页面，因此会触发onhashchange事件，可以进行页面跳转。
* 编程式路由：编程式路由是指在Vue.js中，通过代码的方式来实现路由跳转。                    

3.vue的组件通信有哪些方式？

* props：父组件向子组件传递数据，子组件通过props接收数据。
* $emit：子组件向父组件触发事件，父组件通过$on监听事件并执行相应的回调函数。       
* $parent/$children：父组件可以用$children访问子组件，子组件可以用$parent访问父组件。       
* $attrs/$listeners：父组件可以用$attrs访问子组件的不被插槽内容，子组件可以用$listeners监听父组件的事件。       
* provide/inject：provide和inject是2.2.0+版本新增的功能，用于跨组件通信。       
* vuex：vuex是一个专门用于管理状态的库，可以实现父子组件间的状态共享。       
* pinia：pinia是一个状态管理库，可以实现父子组件间的状态共享。                 

4.vue的插件有哪些？

* vue-cli：vue-cli是Vue.js官方的脚手架工具，可以快速搭建Vue.js项目的开发环境。       
* vue-devtools：vue-devtools是Vue.js官方的浏览器插件，可以调试Vue.js应用。          
* vue-router：vue-router是Vue.js官方的路由管理器，可以实现单页面应用的路由功能。               
* vuex：vuex是Vue.js官方的状态管理库，可以实现单页面应用的状态管理。                       
* pinia：pinia是Vue.js官方的状态管理库，可以实现单页面应用的状态管理。    

5.vue响应式原理是什么？vue3的响应式有何不同

> Vue在初始化数据时，会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。

> Vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

6.3.vue3和vue2的区别

>  源码组织方式变化：使用 TS 重写
> 支持 Composition API：基于函数的API，更加灵活组织组件逻辑（vue2用的是options api）
> 响应式系统提升：Vue3中响应式数据原理改成proxy，可监听动态新增删除属性，以及数组变化

>  编译优化：vue2通过标记静态根节点优化diff，Vue3 标记和提升所有静态根节点，diff的时候只需要对比动态节点内容

> 打包体积优化：移除了一些不常用的api（inline-template、filter）
> 生命周期的变化：使用setup代替了之前的beforeCreate和created
> Vue3 的 template 模板支持多个根标签

>  Vuex状态管理：创建实例的方式改变,Vue2为new Store , Vue3为createStore
> Route 获取页面实例与路由信息：vue2通过this获取router实例，vue3通过使用 getCurrentInstance/ userRoute和userRouter方法获取当前组件实例

> Props 的使用变化：vue2 通过 this 获取 props 里面的内容，vue3 直接通过 props
> 父子组件传值：vue3 在向父组件传回数据时，如使用的自定义名称，如 backData，则需要在 emits 中定义一下

6.4 谈一谈对 MVVM 的理解？

>  MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据 

* 6.5 说一下你知道的 vue 修饰符都有哪些？

* 事件修饰符

* 按键修饰符

* 表单修饰符 
  
  ```vue
  .stop：阻止冒泡。
  .prevent：阻止默认事件。
  .capture：使用事件捕获模式。
  .self：只在当前元素本身触发。
  .once：只触发一次。
  .passive：默认行为将会立即触发。
  ```

.left：左键
.right：右键
.middle：滚轮
.enter：回车
.tab：制表键
.delete：捕获 “删除” 和 “退格” 键
.esc：返回
.space：空格
.up：上
.down：下
.left：左
.right：右
.ctrl：ctrl 键
.alt：alt 键
.shift：shift 键
.meta：meta 键  

```
6.6  如何实现 vue 项目中的性能优化？
* 尽量减少 data 中的数据，data 中的数据都会增加 getter 和 setter，会收集对应的 watcher
* v-if 和 v-for 不能连用
* 如果需要使用 v-for 给每项元素绑定事件时使用事件代理
* SPA 页面采用 keep-alive 缓存组件
* 在更多的情况下，使用 v-if 替代 v-show
* key 保证唯一
* 使用路由懒加载、异步组件
* 防抖、节流
* 第三方模块按需导入
* 长列表滚动到可视区域动态加载
* 图片懒加载 

6.7 你的接口请求一般放在哪个生命周期中？为什么要这样做？
* 接口请求可以放在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
*  但是推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
>  能更快获取到服务端数据，减少页面 loading 时间
SSR 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于代码的一致性
created 是在模板渲染成 html 前调用，即通常初始化某些属性值，然后再渲染成视图。如果在 mounted 钩子函数中请求数据可能导致页面闪屏问题  


九、 CSS 布局方式 flex、grid、table 有什么区别？
*  flex：是Flexible Box布局，是CSS3的一种新的布局模式，提供了一种更加灵活的方式来对容器中的内容进行布局，可以自动调整元素的宽度、高度、顺序、间距等。
*  grid：是CSS3的一种二维布局，可以更加精细地控制元素的位置。
*  table：是HTML表格的布局方式，可以创建复杂的表格布局，但不利于内容的呈现。

1.  优点：
*  简单：flex布局相对于table布局，更加简单，使用起来更加方便。
*  灵活：flex布局可以更加灵活地控制元素的位置，可以设置元素的宽度、高度、顺序、间距等。
*  适应性：flex布局可以适应不同的屏幕大小，可以自动调整元素的大小。
*  性能：flex布局在性能方面要优于table布局。

2.  缺点：
*  兼容性：flex布局在兼容性方面要比table布局差。
*  语义化：table布局更加适合呈现表格数据，而flex布局更适合用于布局。

3.  适用场景：
*  弹性布局：适用于需要适应不同屏幕大小的场景，如移动端页面。
*  复杂的布局：适用于需要复杂的布局，如多列布局、网格布局。
*  自动化布局：适用于需要自动化布局的场景，如自动换行。
```css
grid-row-gap 属性
grid-column-gap 属性分别设置行间距和列间距。
grid-gap 属性是两者的简写形式。
grid-row-gap: 10px 表示行间距是 10px，
grid-column-gap: 20px 表示列间距是 20px。
grid-gap: 10px 20px 实现的效果是一样的
```

十、 响应式布局

1. 媒体查询属性：
* max-width和min-width：
  通过设置最大宽度和最小宽度，我们可以使用媒体查询来选择特定宽度范围内的设备
* orientation：该属性用于判断设备的方向，可以是纵向（portrait）或横向（landscape）。例如
  
  ```
  @media (orientation: portrait) {  
  /* 设备为纵向时的样式 */  
  }  
  ```

@media (orientation: landscape) {  
  /* 设备为横向时的样式 */  
}  

```
* device-type：该属性用于根据设备的类型应用不同的样式。
常见的设备类型包括screen（屏幕）、print（打印机）、speech（屏幕阅读器）等



### 前端打包工具有哪些
Webpack、Rollup、Parcel、Gulp、Grunt、 Browserify、Snowpack、Vite、Esbuild
一Webpack, Vite区别
在开发环境中，Webpack 是先打包再启动开发服务器，而 Vite 则是直接启动，然后再按需编译依赖文件
(1）开发模式的差异
在开发环境中，Webpack 是先打包再启动开发服务器，而 Vite 则是直接启动，然后再按需编译依赖文件。（大家可以启动项目后检查源码 Sources 那里看到）
这意味着，当使用 Webpack 时，所有的模块都需要在开发前进行打包，这会增加启动时间和构建时间。
而 Vite 则采用了不同的策略，它会在请求模块时再进行实时编译，这种按需动态编译的模式极大地缩短了编译时间，特别是在大型项目中，文件数量众多，Vite 的优势更为明显。
(2)底层语言的差异
Webpack 是基于 Node.js 构建的，而 Vite 则是基于 esbuild 进行预构建依赖。esbuild 是采用 Go 语言编写的，Go 语言是纳秒级别的，而 Node.js 是毫秒级别的。因此，Vite 在打包速度上相比Webpack 有 10-100 倍的提升。
什么是预构建依赖？
预构建依赖通常指的是在项目启动或构建之前，对项目中所需的依赖项进行预先的处理或构建。这样做的好处在于，当项目实际运行时，可以直接使用这些已经预构建好的依赖，而无需再进行实时的编译或构建，从而提高了应用程序的运行速度和效率。
(3)热更新的处理
在 Webpack 中，当一个模块或其依赖的模块内容改变时，需要重新编译这些模块。
而在 Vite中是先开启服务器随后异步编译其模块


### Pnpm、Yarn、Npm、Cnpm 的区别
1.  包管理器的概念
包管理器（Package Manager）是一种软件工具，用来管理和安装软件包。它可以自动化地处理依赖关系，并提供统一的管理接口。
2.  包管理器的分类           
npm、Yarn、Pnpm、Cnpm   
* npm：Node Package Manager，是 Node.js 官方的包管理工具，它是默认的包管理工具
* Yarn: Yarn 是一个快速、可靠、安全的依赖管理工具。它通过对依赖进行分层，并通过锁定版本来确保项目的稳定性。
* Pnpm: Pnpm 是一个快速、可靠、安全的依赖管理工具。它是 npm 的替代品，可以加速 Node.js 项目的安装速度。
> Pnpm 使用基于内容寻址的文件系统来存储磁盘上的所有文件，这意味着它不会在磁盘中重复存储相同的依赖包，即使这些依赖包被不同的项目所依赖。这种存储方式使得Pnpm在安装依赖时能够更高效地利用磁盘空间，同时也减少了下载和安装的时间。
* Cnpm: Cnpm 是淘宝团队开发的 npm 镜像，同步频率目前为 10 分钟 1 次。






### 其他知识点--细节
一、Webpack相关
1. Webpack的配置主要包括以下几个部分
entry：指定Webpack打包的入口文件，可以是单个或多个JavaScript文件：这个配置决定了Webpack从哪个模块开始生成依赖关系图
output：设置Webpack打包后输出的目录和文件名称，包括path、filename和publicPath等
module：配置了不同的loaders来处理不同的模块，例如，对于CSS文件，可以使用css-loader和style-loaer
resolve：设置Webpack如何解析模块依赖，包括别名、扩展名等
plugins：使用不同的插件可以增强Webpack的功能，例如，使用html-webpack-plugin可以将打包后的js文件自动引用到HTML文件中
devServer：提供了一个简单的web服务器和实时重载功能，可以通过devServer.contentBase、devServer.port、devServer.proxy等进行配置
optimization：可以使用optimization.splitChunks和optimization.runtimeChunk配置代码拆分和运行时代码提取等优化策略
externals：用于配置排除打包的模块，例如，可以将jQuery作为外置扩展，避免将其打包到应用程序中
devtool：配置source-map类型
context：webpack使用的根目录，string类型必须是绝对路径
target：指定Webpack编译的目标环境
performance：输出文件的性能检查配置
noParse：不用解析和处理的模块
stats：控制台输出日志控制

2. Webpack的配置主要包括以下几个部分
entry：指定Webpack打包的入口文件，可以是单个或多个JavaScript文件：这个配置决定了Webpack从哪个模块开始生成依赖关系图
output：设置Webpack打包后输出的目录和文件名称，包括path、filename和publicPath等
module：配置了不同的loaders来处理不同的模块，例如，对于CSS文件，可以使用css-loader和style-loaer
resolve：设置Webpack如何解析模块依赖，包括别名、扩展名等
plugins：使用不同的插件可以增强Webpack的功能，例如，使用html-webpack-plugin可以将打包后的js文件自动引用到HTML文件中
devServer：提供了一个简单的web服务器和实时重载功能，可以通过devServer.contentBase、devServer.port、devServer.proxy等进行配置
optimization：可以使用optimization.splitChunks和optimization.runtimeChunk配置代码拆分和运行时代码提取等优化策略
externals：用于配置排除打包的模块，例如，可以将jQuery作为外置扩展，避免将其打包到应用程序中
devtool：配置source-map类型
context：webpack使用的根目录，string类型必须是绝对路径
target：指定Webpack编译的目标环境
performance：输出文件的性能检查配置
noParse：不用解析和处理的模块
stats：控制台输出日志控制

3. 如何减少打包后的代码体积
代码分割（Code Splitting）：将应用程序的代码划分为多个代码块，按需加载
Tree Shaking：配置Webpack的Tree Shaking机制，去除未使用的代码
压缩代码：使用工具如UglifyJS或Terser来压缩JavaScript代码
使用生产模式：在Webpack中使用生产模式，通过设置mode: 'production'来启用优化
使用压缩工具：使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩
利用CDN加速：将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包


二、React相关
1、 核心 APIs
createContext：createContext 可以创建一个上下文，组件可以提供或读取该上下文。
createPortal：可让你将某些子组件渲染到 DOM 的不同部分。
forwardRef：forwardRef 可让你的组件通过 ref 向父组件暴露 DOM 节点。
Fragment：<Fragment> 通常通过<>...</>语法使用，可让你在不使用包装节点的情况下对元素进行分组。
lazy：lazy 可以让你延迟加载组件的代码，直到首次渲染时才加载。
memo：memo 可让你在组件的 props 不变时跳过重新渲染组件。
Profiler：<Profiler> 可让你以编程方式测量 React 树的渲染性能。
StrictMode：<StrictMode> 可让你在开发过程中尽早发现组件中的常见错误。
Suspense：可让你在其子模块加载完成前显示回退模块。
2、React Hooks
useState
useReducer
useEffect
useLayoutEffect
useCallback
useMemo
useContext
useRef
useImperativeHandle
useDebugValue
useDeferredValue
useId
useInsertionEffect
useSyncExternalStore
useOptimistic 
useTransition 
3、新 APIs
React Server Components：只在服务器上运行的组件。
Server Actions：React 内置的服务器突变解决方案。
React cache - 实验中：缓存可让你缓存数据获取或计算的结果。
缓存仅用于 React Server Components。请参见支持 React Server Components 的框架。
缓存仅在 React 的 Canary 和实验频道中可用。在生产中使用缓存之前，请确保您了解其限制。点击此处了解有关 React 发布渠道的更多信息。
```