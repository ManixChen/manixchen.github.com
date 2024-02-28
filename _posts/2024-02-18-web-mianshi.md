---
layout: post
title:  javascript vue3 props 验证属性
tags: javascript ES6 props
categories: ES6 props
---

HTML、CSS相关
HTML5
HTML5新特性
增强了表单，input新增了一些type：
color----定义调色板
tel-----定义包含电话号码的输入域
email—定义包含email地址的输入域
search–定义搜索域
number–定义包含数值的输入域
date----定义选取日、月、年的输入域
Video视频标签；
Audio音频标签；
语义化标签；datatime-local
定义文档类型的简写
地理定位；拖放api；Canvas图形绘制；富文本Web
Storage：localStorage：没有时间限制的数据存储;sessionStorage:在浏览器关闭的时候就会清除

语义化标签
首先是关于语义（Semantics）和默认样式的区别，默认样式是浏览器设定的一些常用tag的表现形式，语义化的主要目的就是让大家直观的认识标签(markup)和属性(attribute)的用途和作用，很明显看起来很像标题，因为拥有粗体和较大的字号。strong,em用来区别于其他文字，起到了强调的作用。

语义化
语义化标签 ： p、strong、em、footer
html5新出的语义化标签：

header(头部)  footer(底部)    nav(导航)     
section(主要用于对网站或应用程序中页面上的内容进行分块。)
article(一个页面的一部分，并且这部分专门用于独立的分类或复用)
aside(定义article以外的内容，aside的内容应该与article的内容相关。表示当前页面或文章的附属信息部分)

语义化的优点有:
(一)代码结构清晰，易于阅读，利于开发和维护
(二)方便设备解析根据语义渲染网页
(三)有利于(SEO)搜索引擎优化
(四)在浏览器css失效时，页面依然可读

如何语义化：
不用纯样式标签(b、i、u)、少用无语义标签(div、span)、使用语义化标签

盒模型
盒子模型是什么？
CSS盒子模型(Box Model)。在所有的HTML元素都可以看成一个盒子；在CSS中，Box Model这一术语被用来设计和布局中使用。

现在已知的有两种盒模型，W3C盒模型(标准盒子)和IE盒子模型(怪异盒子)。

W3C盒模型(标准盒子)和IE盒子模型(怪异盒子)分别是什么？
W3C盒模型，也就是标准盒子模型
宽度=内容的宽度(content)+ border + padding + margin

IE盒子模型，也就是怪异盒子模型
宽度=内容宽度(content+border+padding)+ margin

为什么叫IE盒子模型(怪异盒子)呢？
是因为在低版本的IE中盒子使用的都是border-box。后期IE5.5、IE6及其以后，盒模型都为content-box。注意：当浏览器未设置<!doctype>声明时，盒模型都为border-box。

IE 盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。IE盒模型 box-sizing: border-box。

通过 css3 的box-sizing属性，可以更改元素的盒子模型。标准 W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分。

box-sizing属性？
用来控制元素的盒子模型的解析模式，默认为content-box。互换模型格式。

content-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽

border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽

标签元素
行内元素、块级元素、空元素有哪些？区别？
1、行内元素：span、a、em、img、input

2、块级元素：div、ol、ul、form

3、空元素：br、hr、img、input

区别：

行内元素不换行、块级元素换行

正常情况下是块级元素包含行内元素，鲜少有行内元素包含块级元素

没有内容的标签称之为空元素，空元素是在开始标签中关闭的。

缓存
离线缓存与传统浏览器缓存的区别
离线缓存是整个应用，传统浏览器缓存是单个文件

离线缓存断网后依然可以打开页面，传统浏览器缓存不可以

离线缓断在有网络情况下优先使用缓存，传统浏览器缓存会通知网络更新缓存

本地存储
能不能说一说浏览器的本地存储？各自优劣如何？
浏览器的本地存储主要分为Cookie、WebStorage, 其中WebStorage又可以分为localStorage和sessionStorage。

cookie
cookie数据始终在同源的http请求中携带，即cookie在浏览器和服务器间来回传递。cookie数据不能超过4K。
cookie容易被XSS攻击
如果网站没有对用户输入进行过滤,就有可能造成xss攻击或者利用于CSRF攻击。

localStorage和sessionStorage
这两个api都是随着html5加入的新api。这两者的主要区别是时效性不同,大小都为5mb。主要是以key、value形式的字符串存储。

缺点:

localStorage的缺点是,只能存入字符串,无法直接存储对象,所以我们每次存入和取出都要重新json处理一下…

而JSON.stringify()我们知道,它对undefined funtion等一些类型无法正常处理,并且不能转换循环引用的对象,因此使用时需要注意.

共同点:
都会在浏览器端保存，有大小和同源限制

不同点：
cookie数据始终在同源的http请求中携带，即cookie在浏览器和服务器间来回传递。sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。

存储大小限制也不同：cookie数据不能超过4K，sessionStorage和localStorage可以达到5M或者更多

作用域不同：sessionStorage：仅在当前浏览器窗口关闭之前有效；localstorage：数据始终有效，窗口或浏览器关闭也一直保存，除非删除数据；cookie：在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭

CSS
CSS样式优先级
!important>style>id>class

BFC
BFC 即块格式化上下文。BFC内的元素不会影响外面的元素。

创建：

1．float不为none

2．position为absolute或fixed

3．overflow不为visible

4．display为inline-block、flex、inline-flex等

应用:

防止margin重叠

清除内部浮动

自适应多栏布局

三栏布局
绝对定位法：中间栏目使用margin/padding空出左右位置，左右使用绝对定位
浮动法：中间栏目使用margin/padding空出左右位置，左右使用浮动定位
Flex：flex：1
Grid：父元素：display:grid 子元素：grid-template-columns:100px auto 20px


CSS选择器
标签选择器、ID选择器、类选择器、组选择器、通配符选择器
后代选择器、子元素选择器、伪类选择器

Flex:1是什么
经常用于自适应布局。也就是flex-grow、flex-shrink、flex-basis的缩写

Display:flex的常用属性
flex-drection:设置主轴方向
Justify-content:设置主轴排列方式
Flex-wrap:设置是否换行
Align-content/align-item:侧轴排列(多行/单行)

预处理器less、sass
是css中一种抽象层。好处：
1．结构清晰、便于扩展
2．方便屏蔽浏览器的语法差异
3．多重继承

DOM、BOM对象
BOM是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。
一、BOM概述
1.什么是BOM
2.BOM构成
二、window对象的常见事件
1.窗口加载事件
2.调整窗口大小事件
三、定时器
1.setTimeout()
2.setInterval()
四、JS执行机制
1.同步和异步
2.同步和异步执行
五、location对象
1.什么是location对象
2.URL
3.location对象的属性
4.案例：获取URL参数数据
5.location对象的方法
六、navigator对象
七、history对象
1.介绍
2.history对象方法

DOM 是指文档对象模型，通过它，可以访问HTML文档的所有元素。 DOM 是 W3C的标准。

浏览器渲染机制
网页生成过程：

1．HTML被HTML解析器解析成DOM 树

2．css则被css解析器解析成CSSOM 树

3．结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)

4．生成布局(flow)，即将所有渲染树的所有节点进行平面合成

5．将布局绘制(paint)在屏幕上


重排(也称回流)
当DOM的变化影响了元素的几何信息(DOM对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。
 触发：添加或者删除可见的DOM元素、元素尺寸改变——边距、填充、边框、宽度和高度

重绘
当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。 触发：改变元素的color、background、box-shadow等属性

重排重绘优化建议
1．样式表越简单，重排和重绘就越快。尽量用class，少用style一条条改变样式
2．重排和重绘的DOM元素层级越高，成本就越高。如果可以灵活用display，absolute，flex等重排开销会比较小，或不会影响其他元素的重排。
3．使用虚拟DOM的脚本库。



JS相关
js数据类型、typeof、instanceof
string、number、boolean、null、undefined、object(function、array)、symbol

typeof 主要用来判断数据类型

instanceof 判断该对象是谁的实例。

ES6
新增symbol类型 表示独一无二的值，用来定义独一无二的对象属性名;

const/let 都是用来声明变量,不可重复声明，具有块级作用域。存在暂时性死区，也就是不存在变量提升。(const一般用于声明常量);

变量的解构赋值(包含数组、对象、字符串、数字及布尔值,函数参数),剩余运算符(…rest);

模板字符串(${data});

扩展运算符(数组、对象);;

箭头函数;

Set和Map数据结构;

Proxy/Reflect;

Promise
```
1.
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')
在 JavaScript EventLoop 中，还有优先级的概念。

具有较高优先级的任务称为微任务。包括：Promise、ObjectObserver、MutationObserver、process.nextTick、async/await。

优先级较低的任务称为宏任务。包括：setTimeout 、 setInterval 和 XHR 。


2.  一个有微任务和宏任务代码的

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);




3.
const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)

const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)

timer1
VM369:6 promise1
VM369:11 timer2



```

ES6里的symble
它的功能类似于一种标识唯一性的ID，每个Symbol实例都是唯一的。 Symbol类型的key是不能通过Object.keys()或者for…in来枚举的， 它未被包含在对象自身的属性名集合(property names)之中。 所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

ES6里的set和map
Map对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。构造函数Map可以接受一个数组作为参数。
Set对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。

vue的key
1．key的作用主要是为了高效的更新虚拟DOM,其原理是vue在patch过程中通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量,提高性能。

2．另外,若不设置key还可能在列表更新时引发一些隐蔽的bug

3． vue中在使用相同标签名元素的过渡切换时,也会使用到key属性,其目的也是为了让vue可以区分它们， 否则vue只会替换其内部属性而不会触发过渡效果。

普通函数和箭头函数的区别
1．箭头函数是匿名函数，不能作为构造函数，不能使用new

2．箭头函数不绑定arguments，取而代之用rest参数…解决

3．箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值

4．箭头函数通过 call() 或 apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响。

5．箭头函数不能当做Generator函数,不能使用yield关键字

闭包
闭包是指有权访问另一个函数作用域中的变量的函数 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行

闭包用途：
能够访问函数定义时所在的词法作用域(阻止其被回收)

私有化变量
模拟块级作用域

创建模块

闭包缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏
原型、原型链(高频)
原型: 对象中固有的__proto__属性，该属性指向对象的prototype原型属性。

原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是Object.prototype所以这就是我们新建的对象为什么能够使用toString()等方法的原因。

特点: JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

this指向
代表的是当前上下文环境对象。在面向对象语言中this表示当前对象的一个引用。但在JavaScript中this是不固定的，它会随着环境的改变而改变。

在方法中，this表示该方法所属的对象

在单独使用的情况下，this代表的是全局对象

在函数中，this表示的是全局对象

在函数中但是在严格模式下，this为未定义(undefined)

在事件中，this表示的是接收事件的元素

类似call、apply等方法可以改变this引用到的对象apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。apply接收参数的是数组，call接受参数列表，bind方法传入一个对象。

new关键字
1．首先创建了一个新的空对象

2．设置原型，将对象的原型设置为函数的prototype对象。

3．让函数的this指向这个对象，执行构造函数的代码(为这个新对象添加属性)

4．判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

作用域、作用域链
作用域负责收集和维护由所有声明的标识符(变量)组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。(全局作用域、函数作用域、块级作用域)。 作用域链就是从当前作用域开始一层一层向上寻找某个变量，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链。

继承(含es6)、多种继承方式
(1)第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

(2)第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

(3)第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

(4)第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

(5)第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

(6)第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

EventLoop
JS是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，Promise.then，MutationObserver，宏任务的话就是setImmediate setTimeout setInterval

原生ajax
ajax是一种异步通信的方法,从服务端获取数据,达到局部刷新页面的效果。 过程：

创建XMLHttpRequest对象;

调用open方法传入三个参数 请求方式(GET/POST)、url、同步异步(true/false);

监听onreadystatechange事件，当readystate等于4时返回responseText;

调用send方法传递参数。

事件冒泡、捕获(委托)
事件冒泡指在在一个对象上触发某类事件，如果此对象绑定了事件，就会触发事件，如果没有，就会向这个对象的父级对象传播，最终父级对象触发了事件。
事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。
event.stopPropagation() 或者 ie下的方法 event.cancelBubble = true; //阻止事件冒泡

Vue
简述MVVM
MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。

谈谈对vue生命周期的理解？
每个Vue实例在创建时都会经过一系列的初始化过程，vue的生命周期钩子，就是说在达到某一阶段或条件时去触发的函数，目的就是为了完成一些动作或者事件

create阶段：vue实例被创建 beforeCreate: 创建前，此时data和methods中的数据都还没有初始化 created： 创建完毕，data中有值，未挂载
mount阶段： vue实例被挂载到真实DOM节点 beforeMount：可以发起服务端请求，去数据 mounted: 此时可以操作Dom
update阶段：当vue实例里面的data数据变化时，触发组件的重新渲染 beforeUpdate updated
destroy阶段：vue实例被销毁 beforeDestroy：实例被销毁前，此时可以手动销毁一些方法 destroyed
data为什么是一个函数而不是对象
因为对象是一个引用数据类型，如果data是一个对象的情况下会造成所有组件共用一个data。而当data是一个函数的情况下，每次函数执行完毕后都会返回一个新的对象，这样的话每个组件都会维护一份独立的对象(data)

computed与watch
watch 属性监听 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的操作时使用

computed 计算属性 属性的结果会被缓存，当computed中的函数所依赖的属性没有发生改变的时候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要当做属性来使用computed中的函数必须用return返回最终的结果 computed更高效，优先使用

使用场景 computed：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 watch：当一条数据影响多条数据的时候使用，例：搜索数据

v-for中key的作用
key的作用主要是为了更高效的对比虚拟DOM中每个节点是否是相同节点;

Vue在patch过程中判断两个节点是否是相同节点,key是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，Vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能;

从源码中可以知道，Vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key,它的值就是undefined，则可能永 远认为这是两个相同的节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。

vue组件的通信方式
父子组件通信
父->子props，子->父 on、on、on、emit 获取父子组件实例 parent、parent、children Ref 获取实例的方式调用组件的属性或者方法 Provide、inject 官方不推荐使用，但是写组件库时很常用

兄弟组件通信
Event Bus 实现跨组件通信 Vue.prototype.$bus = new Vue() Vuex

跨级组件通信
attrs、attrs、attrs、listeners Provide、inject

路由传参
使用router-link进行路由导航，传递参数

直接调用$router.push 实现携带参数的跳转

通过路由属性中的name来确定匹配的路由，通过params来传递参数

使用path来匹配路由，然后通过query来传递参数，这种情况下 query传递的参数会显示在url

路由的两种模式 hash与history
对于Vue 这类渐进式前端开发框架，为了构建SPA(单页面应用)，需要引入前端路由系统，这也就是Vue-router存在的意义。前端路由的核心，就在于改变视图的同时不会向后端发出请求。
1、hash ——即地址栏URL中的#符号，它的特点在于：hash 虽然出现URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。

2、history ——利用了HTML5 History Interface 中新增的pushState() 和replaceState() 方法。这两个方法应用于浏览器的历史记录站，在当前已有的back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改是，虽然改变了当前的URL，但你浏览器不会立即向后端发送请求。history模式，会出现404 的情况，需要后台配置。

路由守卫
双向绑定实现原理
当一个Vue实例创建时，Vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher重新计算，从而致使它关联的组件得以更新。

源码方面：vue怎么优化重排重绘
Vue通过使用virtual DOM（虚拟DOM）来优化重排重绘。virtual DOM是一种技术，它可以比较新旧DOM树，以确定哪些变化需要应用到实际的DOM上。当DOM元素发生变化时，Vue会自动检测并重新渲染DOM，不会影响性能，从而使重绘和重排变得更加有效。

Vue通过数据绑定来修改视图，当某个数据被修改的时候，set方法会让闭包中的Dep调用notify通知所有订阅者Watcher，Watcher通过get方法执行vm._update(…)，进而去更新视图。

在vm._update(…)中，Vue会调用patch(…)，将新产生的vnode与数据未变更之前的旧的prevVnode进行对比。

在patch(…)方法中，Vue通过sameVnode(…)对新旧两个Vnode对象进行比较，通过比对它们的标签名(tag)、键值(key)、是否都拥有data选项(isDef(data))以及是否都为注释节点(isComment)来确定这两个Vnode映射的真实DOM节点为同一个。只有确定它们是同一个真实DOM节点的不同映射时，才会执行下一步patchVnode(…)。

在patchVnode(…)中，Vue会依据新旧两个Vnode对象是否拥有子节点children执行不同的DOM操作，当两个Vnode对象都有子节点时，会调用updateChildren(…)方法递归的对子节点进行patchVnode(…)。

v-model的实现以及它的实现原理吗？
vue中双向绑定是一个指令v-model，可以绑定一个动态值到视图，同时视图中变化能改变该值。v-model是语法糖，默认情况下相于:value和@input。

使用v-model可以减少大量繁琐的事件处理代码，提高开发效率，代码可读性也更好

通常在表单项上使用v-model

原生的表单项可以直接使用v-model，自定义组件上如果要使用它需要在组件内绑定value并处理输入事件

我做过测试，输出包含v-model模板的组件渲染函数，发现它会被转换为value属性的绑定以及一个事件监听，事件回调函数中会做相应变量更新操作，这说明神奇魔法实际上是vue的编译器完成的。

new Vue后整个的流程
initProxy：作用域代理，拦截组件内访问其它组件的数据。
initLifecycle：建立父子组件关系，在当前组件实例上添加一些属性和生命周期标识。如[Math Processing Error]parent,parent,refs,$children,_isMounted等。
initEvents：对父组件传入的事件添加监听，事件是谁创建谁监听，子组件创建事件子组件监听
initRender：声明[Math Processing Error]slots和slots和createElement()等。
initInjections：注入数据，初始化inject，一般用于组件更深层次之间的通信。
initState：重要)数据响应式：初始化状态。很多选项初始化的汇总：data,methods,props,computed和watch。
initProvide：提供数据注入。
思考：为什么先注入再提供呢？？

1、首先来自祖辈的数据要和当前实例的data,等判重，相结合，所以注入数据的initInjections一定要在InitState的上面。

从上面注入进来的东西在当前组件中转了一下又提供给后代了，所以注入数据也一定要在上面。
keep-alive的实现
作用：实现组件缓存

钩子函数：
activated 组件渲染后调用

deactivated 组件销毁后调用

原理：Vue.js内部将DOM节点抽象成了一个个的VNode节点，keep-alive组件的缓存也是基于VNode节点的而不是直接存储DOM结构。它将满足条件(pruneCache与pruneCache)的组件在cache对象中缓存起来，在需要重新渲染的时候再将vnode节点从cache对象中取出并渲染。

配置属性：
include 字符串或正则表达式。只有名称匹配的组件会被缓存

exclude 字符串或正则表达式。任何名称匹配的组件都不会被缓存

max 数字、最多可以缓存多少组件实例

vuex、vue-router实现原理
vuex是一个专门为vue.js应用程序开发的状态管理库。 核心概念：

state(单一状态树) getter/Mutation显示提交更改state
Action类似Mutation，提交Mutation，可以包含任意异步操作。
module(当应用变得庞大复杂，拆分store为具体的module模块)
你怎么理解Vue中的diff算法?
在js中,渲染真实DOM的开销是非常大的, 比如我们修改了某个数据,如果直接渲染到真实DOM, 会引起整个dom树的重绘和重排。那么有没有可能实现只更新我们修改的那一小块dom而不要更新整个dom呢？此时我们就需要先根据真实dom生成虚拟dom， 当虚拟dom某个节点的数据改变后会生成有一个新的Vnode, 然后新的Vnode和旧的Vnode作比较，发现有不一样的地方就直接修改在真实DOM上，然后使旧的Vnode的值为新的Vnode。

diff的过程就是调用patch函数，比较新旧节点，一边比较一边给真实的DOM打补丁。在采取diff算法比较新旧节点的时候，比较只会在同层级进行。 在patch方法中，首先进行树级别的比较 new Vnode不存在就删除 old Vnodeold Vnode 不存在就增加新的Vnode 都存在就执行diff更新 当确定需要执行diff算法时，比较两个Vnode，包括三种类型操作：属性更新，文本更新，子节点更新 新老节点均有子节点，则对子节点进行diff操作，调用updatechidren 如果老节点没有子节点而新节点有子节点，先清空老节点的文本内容，然后为其新增子节点 如果新节点没有子节点，而老节点有子节点的时候，则移除该节点的所有子节点 老新老节点都没有子节点的时候，进行文本的替换

updateChildren 将Vnode的子节点Vch和oldVnode的子节点oldCh提取出来。 oldCh和vCh各有两个头尾的变量StartIdx和EndIdx，它们的2个变量相互比较，一共有4种比较方式。如果4种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦StartIdx>EndIdx表明oldCh和vCh至少有一个已经遍历完了，就会结束比较。

浏览器从输入url到渲染页面，发生了什么？
三个方面：

网络篇:
构建请求

查找强缓存

DNS解析

建立TCP连接(三次握手)

发送HTTP请求(网络请求后网络响应)

浏览器解析篇:
解析html构建DOM树

解析css构建CSS树、样式计算

生成布局树(Layout Tree)

浏览器渲染篇:
建立图层树(Layer Tree)

生成绘制列表

生成图块并栅格化

显示器显示内容

最后断开连接：TCP 四次挥手

Http和Https区别(高频)
1.HTTP 是不安全的，而 HTTPS 是安全的

2.HTTP 标准端口是80 ，而 HTTPS 的标准端口是443

3.HTTP 无法加密，而HTTPS 对传输的数据进行加密

4.HTTP无需证书，而HTTPS 需要CA的SSL证书

GET和POST区别(高频)
1.GET在浏览器回退不会再次请求，POST会再次提交请求

2.GET请求会被浏览器主动缓存，POST不会，要手动设置

3.GET请求参数会被完整保留在浏览器历史记录里，POST中的参数不会

4.GET请求在URL中传送的参数是有长度限制的，而POST没有限制

5.GET参数通过URL传递，POST放在Request body中

6.GET参数暴露在地址栏不安全，POST放在报文内部更安全

7.GET一般用于查询信息，POST一般用于提交某种信息进行某些修改操作

8.GET产生一个TCP数据包；POST产生两个TCP数据包

理解xss，csrf，ddos攻击原理以及避免方式
XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 cookie，session tokens，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。

CSRF(Cross-site request forgery)跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

XSS避免方式：
url参数使用encodeURIComponent方法转义

尽量不是有InnerHtml插入HTML内容

使用特殊符号、标签转义符。

CSRF避免方式：
添加验证码

使用token

服务端给用户生成一个token，加密后传递给用户

用户在提交请求时，需要携带这个token

服务端验证token是否正确

http特性以及状态码
比如：

200响应成功301永久重定向302临时重定向304资源缓存403服务器禁止访问404服务器资源未找到500 502服务器内部错误504 服务器繁忙1xx Informational(信息状态码)   接受请求正在处理2xx Success(成功状态码)            请求正常处理完毕3xx Redirection(重定向状态码)  需要附加操作已完成请求4xx Client Error(客户端错误状态码) 服务器无法处理请求5xx Server Error(服务器错误状态码) 服务器处理请求出错复制代码
http如何实现缓存
强缓存==>Expires(过期时间)/Cache-Control(no-cache)(优先级高) 协商缓存 ==>Last-Modified/Etag(优先级高)Etag适用于经常改变的小文件 Last-Modefied适用于不怎么经常改变的大文件

强缓存策略和协商缓存策略在缓存命中时都会直接使用本地的缓存副本，区别只在于协商缓存会向服务器发送一次请求。它们缓存不命中时，都会向服务器发送请求来获取资源。在实际的缓存机制中，强缓存策略和协商缓存策略是一起合作使用的。浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则浏览器返回最新的资源给浏览器。

什么是同源策略
一个域下的js脚本未经允许的情况下，不能访问另一个域下的内容。通常判断跨域的依据是协议、域名、端口号是否相同，不同则跨域。同源策略是对js脚本的一种限制，并不是对浏览器的限制，像img,script脚本请求不会有跨域限制。

前后端如何通信
Ajax : 短连接

Websocket : 长连接，双向的。

Form表单：最原始的

跨域通信的几种方式
解决方案：

jsonp(利用script标签没有跨域限制的漏洞实现。缺点：只支持GET请求)

CORS(设置Access-Control-Allow-Origin：指定可访问资源的域名)

postMessage(message, targetOrigin, [transfer])(HTML5新增API 用于多窗口消息、页面内嵌iframe消息传递),通过onmessage监听 传递过来的数据

Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。

Node中间件代理

Nginx反向代理

各种嵌套iframe的方式，不常用。

日常工作中用的最对的跨域方案是CORS和Nginx反向代理

前端工程化
webpack配置，webpack4.0有哪些优化点
module.exports={entry: {},output: {},plugins: [],module: [rules:[{}]]}
webpack如何实现代码分离
1．入口起点：使用 entry 配置手动地分离代码。

2．防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。

3．动态导入：通过模块的内联函数调用来分离代码。

常见的Webpack Loader? 如何实现一个Webpack Loader(NO)
loader: 是一个导出为函数的javascript模块，根据rule匹配文件扩展名，处理文件的转换器。

file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)

url-loader： 与file-loader类似，区别是用户可以设置一个阈值，大于阈值会交给file-loader处理，小于阈值时返回文件base64 形式编码 (处理图片和字体)

image-loader：加载并且压缩图片文件

babel-loader：把 ES6 转换成 ES5

sass-loader：将SCSS/SASS代码转换成CSS

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS

postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀 eslint-loader：通过 ESLint 检查 JavaScript 代码

常见的Webpack Plugin? 如何实现一个Webpack Plugin(NO)
plugin:本质是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)

uglifyjs-webpack-plugin：压缩js文件

clean-webpack-plugin：目录清除

mini-css-extract-plugin：分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)

loader和plugin对比？
Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个Plugin的实例，参数都通过构造函数传入。

前端模块化，CMD、AMD、CommonJS
CommonJS
CommonJS是服务器端模块的规范，由Node推广使用，webpack也采用这种规范编写

commonJs规范：
CommonJS模块规范主要分为三部分：模块定义、模块标识、模块引用。

模块定义：module对象：在每一个模块中，module对象代表该模块自身。 export属性：module对象的一个属性，它向外提供接口。输出模块变量的最好方法是使用module.exports对象。一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。

模块标识：传递给require方法的参数，必须是符合小驼峰命名的字符串，或者以 . 、… 、开头的相对路径，或者绝对路径。

模块引用：加载模块使用require(同步加载)，该方法读取一个文件并执行，返回文件内部的module.exports对象。

优势：
在后端，JavaScript的规范远远落后并且有很多缺陷，这使得难以使用JavaScript开发大型应用。比如：没有模块系统、标准库较少、没有标准接口、缺乏包管理系统、列表内容

CommonJS模块规范很好地解决变量污染问题，每个模块具有独立空间，互不干扰，命名空间相比之下就不太好。

CommonJS规范定义模块十分简单，接口十分简洁。

CommonJS模块规范支持引入和导出功能，这样可以顺畅地连接各个模块，实现彼此间的依赖关系

CommonJS规范的提出，主要是为了弥补JavaScript没有标准的缺陷，已达到像Python、Ruby和Java那样具备开发大型应用的基础能力，而不是停留在开发浏览器端小脚本程序的阶段

缺点：
没有并行加载机制

由于CommonJS是同步加载模块，这对于服务器端是很不好的，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。

所以浏览器端不是很适合Common.Js，出现另一种规范AMD

AMD
AMD 是运行在浏览器环境的一个异步模块定义规范 ，是RequireJS 在推广过程中对模块定义的规范化产出。

AMD规范
AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块

优点
用户体验好，因为没有延迟，依赖模块提前执行了。
CMD
CMD是一个通用模块定义规范；是SeaJs推广过程中对模块定义的规范化产出

CMD规范
CMD推崇依赖就近，只有在用到某个模块的时候才会去require

优点
性能好，因为只有用户需要的时候才执行。

防抖节流
函数防抖关注一定时间连续触发，只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

防抖
//定义：触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。//搜索框搜索输入。只需用户最后一次输入完，再发送请求//手机号、邮箱验证输入检测 onchange oninput事件//窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

 const debounce = (fn, wait, immediate) => { let timer = null;  return function (...args) {  if (timer) clearTimeout(timer);   if (immediate && !timer) {      fn.call(this, args);   } timer = setTimeout(() => {   fn.call(this, args); }, wait); }; };const betterFn = debounce(() => console.log("fn 防抖执行了"), 1000, true);document.addEventListener("scroll", betterFn);
节流
//定义：当持续触发事件时，保证隔间时间触发一次事件。//1. 懒加载、滚动加载、加载更多或监听滚动条位置；//2. 百度搜索框，搜索联想功能；//3. 防止高频点击提交，防止表单重复提交.

function throttle(fn,wait){let pre = 0;return function(...args){let now = Date.now();if( now - pre >= wait){fn.apply(this,args);pre = now;}}}function handle(){console.log(Math.random());}window.addEventListener("mousemove",throttle(handle,1000));
对象深浅拷贝
//浅拷贝 1. Object.assign(target,source)2. es6对象扩展运算符。//深拷贝    function deepClone(obj) {if (!obj || typeof obj !== "object") return;let newObj = Array.isArray(obj) ? [] : {};for (let key in obj) {if (obj.hasOwnProperty(key)) {newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];}}return newObj;
}
数组去重,数组对象去重
//数组const arr = [2,7,5,7,2,8,9];console.log([...new Set(arr)]);// [2,7,5,8,9];//对象const list = [{age:18,name:'张三'},{age:18,name:'李四'},{age:18,name:'王五'}]let hash = {};const newArr = arr.reduce((item, next) => {hash[next.age] ? '' : hash[next.age] = true && item.push(next);return item;}, []);console.log(list);
数组扁平化
function flatten(arr) {return arr.reduce((result, item) => {return result.concat(Array.isArray(item) ? flatten(item) : item);}, []);}
性能优化
你都做过哪些Vue的性能优化？

移动端性能优化：
保持单个文件小于25KB:
移动网站页面要求下载资源，如果文件过大，会大大减慢页面加载速度。

打包内容为分段multipart文档:
由于HTTP请求每一次都会执行三次握手，每次握手都会消耗较多的时间。使用multipart，实现了多文件同时上传，可用一个HTTP请求获取多个组件。

图片优化：
CSS sprites:
俗称 CSS 精灵、雪碧图，雪花图等。即将多张小图片合并成一张图片，达到减少 HTTP 请求的一种解决方案。可通过 CSS中的background 属性访问图片内容。这种方案同时还可以减少图片总字节数，节省命名词汇量。

压缩图片:
图片占据资源极大，因此尽量避免使用多余的图片，使用时选择最合适的格式大小，然后使用智图压缩，同时在代码中用Srcset来按需显示。（切记不要过分压缩 可能会导致图片迷糊）

尽量避免重设图片大小:
重设图片大小是指在页面、CSS、JavaScript等中多次重置图片大小，多次重设图片大小会引发图片的多次重绘，影响性能。

图片尽量避免使用DataURL:
DataURL图片没有使用图片的压缩算法文件会变大，并且要解码后再渲染，加载慢耗时长。

图片懒加载:
图片对页面加载速度影响非常大。比如，当一个页面内容比较多的时候，加载速度就会大大的降低，极大的影响到用户体验 。更有甚者，一个页面可能会有几百个图片，但是页面上仅仅只显示前几张图片，那其他的图片是否可以晚点加载用于提高性能。具体可见 >>

JavaScript相关优化
把脚本放在页面底部:
放在前面js加载会造成阻塞，影响后面dom的加载

使用外部JavaScript和CSS :
在现实环境中使用外部文件通常会产生较快的页面，因为 JavaScript 和 CSS 有机会被浏览器缓存起来。对于内联的情况，由于 HTML 文档通常不会被配置为可以进行缓存的，所以每次请求 HTML 文档都要下载 JavaScript 和 CSS。所以，如果 JavaScript 和 CSS 在外部文件中，浏览器可以缓存它们，HTML 文档的大小会被减少而不必增加 HTTP 请求数量。

压缩JavaScript和CSS:
压缩文件是为了降低网络传输量，减少页面请求的响应时间。

减少DOM操作:
操作dom会产生几种动作，极大的影响渲染的效率。其中layout（布局）和paint（绘制）是最大的。

js开销缩短解析时间:
开销：加载-》解析和编译-》执行
js的解析和编译，执行要花很长时间（谷歌开发工具中的performance中可以查看。选中main主线程中的某一段。）
解决方案：

代码拆分按需加载
tree shaking代码减重
避免长任务
requestAnimationFrame和repuestIdleCallback进行时间调度
v8编译原理（代码优化）:

解析js代码成抽象语法树-》字节码-》机器码
编译过程会进行优化
运行时可能会发生反优化
v8内部优化
脚本流:边下载边解析
字节码缓存:常用的字节码会存起来(这个文件用到其他的文件也用到的参数)
函数懒解析:先解析用到的
对象优化(迎合v8进行优化)
保证对象初始化顺序一致(对象初始化时v8会生成隐藏属性以便后续复用并且是按照顺序排序的)
不要直接赋值对象新属性(追加的属性需要通过描述数组间接查找)
使用数组代替类数组(v8会对数组进行优化)比如先将类数组转化成数组
避免读取数组越界(比如for循环多查找1个下标会照成性能相差6倍)
造成undefined和数字比较
数组也是对象，当找不到对应下标的时候回沿着原型链向上找造成额外开销
业务上无效

js内存，避免造成内存泄漏:
通过变量是否能被访问到来判断内存是否释放。
局部变量: 函数执行完没有闭包引用会被标记回收
全局变量: 直到浏览器被卸载页面释放
回收机制:
引用计数:每调用一次加一,当计数为0的时候进行回收。缺点是不能解决循环引用(例如a对象依赖于b对象，标记清除(垃圾回收): 从根节点去访问，当访问到不能被访问的对象就进行标记然后进行垃圾回收。(当a对象
解决：避免意外的全局变量；避免反复运行引发的闭包；避免脱离的dom元素没有被回收(所以react有ref这个api)。
CSS 相关优化
把样式表放在标签中:
css放在head标签中比css放在body标签尾部少了一次构建RenderTree, 一次计算布局和一次渲染网页, 因此性能会更好。
不要使用CSS样式表
使用替代@import
不要使用filter
避免元素类型转化(数组中放多种类型不利于v8引擎优化代码)
降低css对渲染的阻塞(按需加载，放在dom前面加载)
利用pu完成动画(前面讲到的复合)
使用contain进行优化(优化强度大。例如: contan:layout告诉浏览器这个节点内部的子元素和外面的使用font-display进行优化:让文字更早的显示在页面上，减轻文字闪动的问题
html 相关优化
减少iframes使用
压缩空白符
避免嵌套层次太深
避免使用table布局
减少没必要的注释
删除元素默认属性(比如默认checkbox等)
开发内容相关优化
减少HTTP请求数
减少DNS重定向
缓存AJax请求
延迟加载
预加载
减少DOM元素的数量
划分内容到不同域名
尽量减少使用iframe
避免404错误
服务器相关优化
使用CDN
添加Expires或Cache-Control响应头
启用Gzip
配置Etag
尽早输出缓冲
Ajax请求使用GET方法
避免图片src为空
传输加载优化
服务器启用gzip
keep Alive(持久TCP连接)
keepalive_requests 100;请求100次后开启http的keepAlive有keepalive_timeout 65;65秒后关闭。
http缓存
最好是用no-cache(要用的时候需要在服务器那边Etag验证下)
service workers
加速重复访问
离线支持
Cookie相关优化
减少cookie大小
静态资源使用无cookie域名
首屏加载优化
资源压缩、传输压缩、代码拆分、tree shaking、http缓存
路由懒加载、预渲染、inlineCss、虚拟列表
prefetch和preload调整加载顺序js内存管理
