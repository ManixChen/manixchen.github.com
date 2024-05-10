---
layout: post
title:  javascript ES6重点语法记录
tags: javascript ES6
categories: ES6
---

**** 常用的API ***
一、下面是 Proxy 支持的拦截操作一览，一共 13 种。
```
get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为。这里暂时先不解释具体的语法，只看运行结果。对设置了拦截行为的对象obj，去读写它的属性，就会得到下面的结果。

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
上面代码说明，Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

var proxy = new Proxy(target, handler);


强制特点属性，锁死
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
proxy.age // 抛出一个错误
上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回undefined。



npm login --registry=https://npm.pkg.github.com
```


二、bind、call、apply的作用
```
关于call、apply、bind函数，它们主要用来改变this指向的，在很多框架中常有用到，而且也是面试官喜欢问到的问题：多数会问道三者的区别， 以及手动实现它们。
1、call的用法 
fn.call(thisArg, arg1, arg2, arg3, ...) 
调用fn.call时会将fn中的this指向修改为传入的第一个参数thisArg；将后面的参数传入给fn,并立即执行函数fn。

let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。


    let obj1 = {
        name: "lihua",
        age: 30
    }
    // obj1.sayHello(); // Uncaught TypeError: obj1.sayHello is not a function
    obj.sayHello.call(obj1, '设计师', '画画'); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。 


2、 apply的用法 
apply(thisArg, [argsArr])
1、fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。

let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。


    let obj1 = {
        name: "lihua",
        age: 30
    }

    obj.sayHello.apply(obj1, ['设计师', '画画']); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。 

3、bind的用法
bind(thisArg, arg1, arg2, arg3, ...)
1
fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。需要调用才会执行:bind(thisArg, arg1, arg2, arg3, ...)()。bind的传参和call相同。

    let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
    // obj.sayHello('程序员', '看美女'); // 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。

    let obj1 = {
        name: "lihua",
        age: 30
    }

    obj.sayHello.bind(obj1, '设计师', '画画'); // 无输出结果
    obj.sayHello.bind(obj1, '设计师', '画画')(); // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。

4、bind、call、apply的区别
1、相同点
三个都是用于改变this指向；
接收的第一个参数都是this要指向的对象；
都可以利用后续参数传参。
2、不同点
call和bind传参相同，多个参数依次传入的；
apply只有两个参数，第二个参数为数组；
call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。
```


5.JavaScript判断一个变量是否是数组的五种方式
```
1. Array.isArray() 方法进行数组判断的示例代码： 
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // 输出: true
 
let obj = { name: "John", age: 25 };
console.log(Array.isArray(obj)); // 输出: false 
```

2. Object.prototype.toString.call(arr)
``` 
let arr = [1, 2, 3];
let arrType = Object.prototype.toString.call(arr);
console.log(arrType === "[object Array]"); // 输出: true
 
let obj = { name: "John", age: 25 };
let objType = Object.prototype.toString.call(obj);
console.log(objType === "[ Array]"); // 输出: false

```


3. instanceof
```
let arr = [1, 2, 3];
console.log(arr instanceof Array); // 输出: true
 
let obj = { name: "John", age: 25 };
console.log(obj instanceof Array); // 输出: false

**** 注意的是，prototype属性是可以修改的，所以并不是最初判断为true就一定永远为真。**** 
*** instanceof 运算符在判断是否为数组时可能存在误判的情况。下面是一个可能产生误判的示例代码：***
function MyArray() {
  // 自定义的类似数组的对象
  this.length = 0;
}
MyArray.prototype = Array.prototype;
 
const myArr = new MyArray();
 
console.log(myArr instanceof Array); // 输出: true 
```

4.constructor
```
实例的构造函数属性constructor指向构造函数，那么通过constructor属性也可以判断是否为一个数组。
这种判断也会存在多个全局环境的问题，导致的问题与instanceof相同。

console.log('方法2',arr.constructor === Array);//true 
```

5.typeof
```
使用该方法 判断数组时 打印结果为object 
console.log('方法4',typeof n); //number
console.log('方法4',typeof(b)) //object
```