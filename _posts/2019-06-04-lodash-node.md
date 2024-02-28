---
layout: post
title:  javascript lodashjs常见对象的所有操作
tags: javascript ES6 lodash
categories: ES6 lodash
---
 > *** 简单介绍 ***
> Lodash 能够大幅度提高前端 JavaScript 编程的效率和可读性，使得代码编写更加快捷、简洁、易懂。如果你还没有使用过 Lodash，建议尝试使用它来优化你的项目，提高开发效率。向大家介绍或简单的展示一下它的能力，或许能够吸引到你。Lodash 是一个流行的 JavaScript 实用工具库，提供了许多常用的函数和工具，能够方便地处理集合、字符串、数值、函数等多种数据类型，减少编写重复代码的时间和精力。Lodash 的 API 设计与 ES6 的新特性相似，同时兼容了更早的浏览器版本。Lodash 支持模块化加载，可以通过 npm 或在浏览器中直接引入来使用。
Lodash 有多达 300 多个函数，每个函数都有详细的文档和示例，能够快速地满足各种编程需求。同时，Lodash 的功能也非常完善，比如数组、对象等的操作，以及日期、数学计算、函数式编程等多方面支持。Lodash 还提供了链式调用的方式，简化操作的流程。
*** npm install lodash ****

```
1. chunk
_.chunk(array,[size]) 函数可以将一个数组按照指定的大小分割成若干个数组，返回一个新的二维数组。

const arr = ['a', 'b', 'c', 'd', 'e'];
const result = _.chunk(arr, 3);
console.log(result); // [['a', 'b', 'c'], ['d', 'e']]
2. compact
_.compact(array) 函数可以将数组中的 falsy 值去除（即 false、null、0、""、undefined、NaN），返回一个新的数组。

const arr = ['a', 0, '', null, undefined, NaN, 'b'];
const result = _.compact(arr);
console.log(result); // ['a', 'b']
3. concat
_.concat(array, [values]) 函数可以将两个或多个数组合并成一个新数组。

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
const result = _.concat(arr1, arr2, 'e');
console.log(result); // ['a', 'b', 'c', 'd', 'e']
4. difference
_.difference(array, [values]) 函数可以返回两个数组之间的差异，即在第一个数组中但不在第二个数组中的所有值组成的数组。

const arr1 = [1,2,3];
const arr2 = [2,3,4];
const result = _.difference(arr1, arr2);
console.log(result)/[1]
5. drop
_.drop(array, [n=1]) 函数可以从数组中删除前面指定的 n 个元素，并返回一个新的数组。

const arr = [1, 2, 3, 4, 5];
const result = _.drop(arr, 2);
console.log(result); // [3, 4, 5]
6. dropRight
_.dropRight(array, [n=1]) 函数可以从数组中删除后面指定的 n 个元素，并返回一个新的数组。

const arr = [1, 2, 3, 4, 5];
const result = _.dropRight(arr, 2);
console.log(result); // [1, 2, 3]
7. fill
_.fill(array, value, [start=0], [end=array.length]) 函数可以用指定的值填充数组。

const arr = [1, 2, 3, 4, 5];
const result = _.fill(arr, '*', 1, 4);
console.log(result); // [1, '*', '*', '*', 5]
8. findIndex
_.findIndex(array, [predicate=_.identity], [fromIndex=0]) 函数可以返回符合指定条件的元素的索引值，如果没有找到则返回 -1。

const arr = [
  { name: 'Alice', age: 18 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 22 }
];
const result = _.findIndex(arr, { age: 20 });
console.log(result); // 1
9. intersection
_.intersection([arrays]) 函数可以返回两个或多个数组之间的交集，即在所有数组中都存在的所有值组成的数组。

const arr1 = ['a', 'b'];
const arr2 = ['b', 'c'];
const arr3 = ['b', 'd'];
const result = _.intersection(arr1, arr2, arr3);
console.log(result)/['b']
三、对象操作
1. assign
_.assign(object,[sources]) 函数可以合并多个对象，并返回一个新的对象。

const obj1 = {a:};
const obj2 = {b: 2, c: 3};
const result = _.assign(obj1, obj2);
console.log(result);//{a: 1, b: 2, c: 3}
2. clone
_.clone(value) 函数可以复制一个对象或数组，并返回一个新的对象或数组。

const obj = {name: 'Tom', age:18};
const result = _.clone(obj);
console.log(result);//{name: 'Tom', age:18}
3. has
_.has(object, path)函数可以判断一个对象是否包含指定的属性。

const obj = { name: 'Tom', age: 18 };
const result = _.has(obj, 'age');
console.log(result); // true
4. keys
_.keys(object) 函数可以返回一个对象所有的属性名组成的数组。

const obj = { name: 'Tom', age: 18 };
const result = _.keys(obj);
console.log(result); // ['name', 'age']
5. mapKeys
_.mapKeys(object, [iteratee=_.identity]) 函数可以将一个对象的属性名进行修改，并返回一个新的对象。

const obj = { name: 'Tom', age: 18 };
const result = _.mapKeys(obj, (value, key) => {
  return key.toUpperCase();
});
console.log(result); // { NAME: 'Tom', AGE: 18 }
6. omit
_.omit(object, [paths]) 函数可以删除一个对象中指定的属性，并返回一个新的对象。

const obj = { name: 'Tom', age: 18 };
const result = _.omit(obj, 'age');
console.log(result); // { name: 'Tom' }
7. pick
_.pick(object, [paths]) 函数可以选择一个对象中的指定属性，并返回一个新的对象。

const obj = { name: 'Tom', age: 18 };
const result = _.pick(obj, 'name');
console.log(result); // { name: 'Tom' }
四、字符串操作
1. capitalize
_.capitalize([string='']) 函数可以将字符串的第一个字符转换为大写，其余字符转换为小写。

const str = 'lodash';
const result = _.capitalize(str);
console.log(result); // 'Lodash'
2. repeat
_.repeat([string=''], [n=1]) 函数可以将一个字符串重复 n 次，并返回一个新的字符串。

const str = 'lodash';
const result = _.repeat(str, 3);
console.log(result); // 'lodashlodashlodash'
3. startCase
_.startCase([string='']) 函数可以将一个字符串中每个单词的首字母大写，并返回一个新的字符串。

const str = 'hello world';
const result = _.startCase(str);
console.log(result); // 'Hello World'
4. trim
_.trim([string=''], [chars=whitespace]) 函数可以删除一个字符串两端指定的字符（默认为空格），并返回一个新的字符串。

const str = '   lodash   ';
const result = _.trim(str);
console.log(result); // 'lodash'
五、高级函数
1. debounce
_.debounce(func, [wait=0], [options={}]) 防抖函数可以延迟执行一个函数，并且只有当延迟时间过去后该函数没有被再次调用时才会执行。其中，参数 func 是要延迟执行的目标函数；wait 是延迟的毫秒数，默认为 0；options 是一个可选的配置对象，可以用来额外控制防抖的行为。

// 例如，下面是一个带有搜索框的页面，并且需要在用户停止输入 500 毫秒后才开始搜索：
function search(keyword) {
  // 根据关键词进行搜索
  console.log(`Searching for '${keyword}'...`)
}

const inputEl = document.getElementById('search-input');

// 创建 debounce 函数，最多每 500 毫秒执行一次 search 函数
const debouncedSearch = _.debounce(search, 500);

// 监听 input 变化，如果有变化则调用 debouncedSearch 函数
// 每当出现输入变化时，我们会将输入内容传递给 `debouncedSearch` 函数，这个函数会将搜索操作延迟 500 毫秒后执行。因此，只有用户停止输入 500 毫秒之后，才会真正执行搜索操作
inputEl.addEventListener('input', (evt) => {
  const keyword = evt.target.value.trim();
  debouncedSearch(keyword);
});
2. throttle
_.throttle(func,[wait=0],[options={}])节流函数可以限制一个函数在一定时间范围内最多执行一次。也就是说，如果同一个函数在短时间内多次触发，这个函数只会以固定的频率执行。

// 例如，下面是一个点击按钮时每隔 1 秒输出一次 log 的示例：
function log() {
  console.log('Clicked!');
}

const btnEl = document.getElementById('click-button');

// 创建 throttle 函数，最多每 1 秒执行一次 log 函数
const throttledLog = _.throttle(log, 1000);

// 监听 click 事件，如果有点击则调用 throttledLog 函数
// 每当用户点击按钮时，我们会调用 `throttledLog` 函数，这个函数会通过限制函数的执行频率，保证每隔 1 秒钟输出一条日志。即使用户连续点击按钮，也只有第一次点击可以触发函数的执行，后续的点击都会被忽略
btnEl.addEventListener('click', (evt) => {
  throttledLog();
});
3. delay
_.delay(func,[wait],[args]) 函数可以延迟执行一个函数，并指定延迟的时间和参数。

function log(name) {
  console.log(`Hello, ${name}`);
}
_.delay(log, 2000, 'Tom'); // 两秒后输出：'Hello, Tom'
4. forEach
_.forEach(collection,[iteratee=_.identity]) 函数可以遍历一个集合中的每个元素，并对每个元素进行指定的操作。

const arr = ['a', 'b', 'c'];
_.forEach(arr, (value, index) => {
  console.log(`${index}: ${value}`);
});
// 输出：
// 0: a
// 1: b
// 2: c
5. sortBy
_.sortBy(collection,[iteratees=[_.identity]])函数可以对一个集合中的元素进行排序，并返回一个新的数组。

const arr = [
  { name: 'Tom', age: 18 },
  { name: 'Bob', age: 20 },
  {name: 'Charlie', age: 22 }
];
const result = _.sortBy(arr,['age']);
console.log(result){name: 'Tom', age:18{name: 'Bob', age:20{name: 'Charlie', age:22}]
六、函数式编程
1. flow
_.flow([funcs]) 函数可以将多个函数组合成一个新的函数，并返回该新函数。

function add(a, b) {
  return a + b;
}
function square(n) {
  return n * n;
}
const newFunc = _.flow([add, square]);
const result = newFunc(2,/等价于 square(add(2,3）)
console.log(result);// 25
2. memoize
_.memoize(func,[resolver]) 函数可以对一个函数进行记忆化处理，即缓存该函数的计算结果。

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = _.memoize(fibonacci);
console.log(memoizedFibonacci（50）)/第一次运行时会进行计算，后续运行时直接返回缓存的结果
3. curry
_.curry(func,[arity=func.length]) 函数可以将一个函数转换为柯里化函数，即逐步传入参数并返回一个新的函数。

function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = _.curry(add);
console.log(curriedAdd（3）);// 6
console.log(curriedAdd(1，（3）);// 6
console.log(curriedAdd（1）(2,3）);// 6
七、数学函数
1. round
_.round(number,[precision=0])函数可以将一个数字四舍五入到指定的精度。

const num = 3.1415926;
const result = _.round(num,2）;
console.log(result);// 3.14
2. sum
_.sum(array) 函数可以计算一个数组中所有元素的和。

const arr = [1,2,3,4,5];
const result = _.sum(arr);
console.log(result);// 15
3. random
_.random([lower=0],[upper=1],[floating]) 函数可以生成一个随机数。

const result = _.random(1,10）;
console.log(result);//1～10中的一个随机整数
八、日期函数
1. now
_.now()函数可以返回当前的时间戳。

const timestamp = _.now();
console.log(timestamp)/当前的时间戳
2. moment
_.moment([dateString]) 函数可以将一个日期字符串解析为一个 Moment.js 对象。

const m = _.moment('2019-01-01');
console.log(m.year()); // 2019
console.log(m.month());//0（表示1月）
console.log(m.date());// 1
九、异常处理
1. attempt
_.attempt(func,[args]) 函数可以尝试执行一个函数，并返回该函数执行的结果，如果出现错误则返回错误对象。

function divide(a, b){
  if (b === 0) {
    throw new Error('除数不能为 0');
  }
  return a / b;
}
const result1 = _.attempt(divide,6,0）;
console.log(result1)/返回错误对象
const result2 = _.attempt(divide,6,2）;
console.log(result2)/返回计算结果（3）
2. isError
_.isError(value) 函数可以判断一个值是否为错误对象。

const err = new Error('错误');
console.log(_.isError(err));// true
console.log(_.isError('hello'));// false
十、对象处理
1. defaults
_.defaults(object, [sources]) 函数可以将一个或多个源对象的属性复制到目标对象中，如果目标对象已经存在该属性，则不会被覆盖。

const object = { a: 1 };
const result = _.defaults(object,{a: 2, b: 2{b: 3, c: 3});
console.log(result);//{a: 1, b: 2, c: 3}
2. merge
_.merge(object,[sources]) 函数可以将一个或多个源对象的属性递归地合并到目标对象中，如果目标对象已经存在该属性，则会被覆盖。

const object = {
  a: { b: { c: 1 } },
  d: [2, 3]
};
const result = _.merge(object, {
  a: {b: {d: 2}},
  d: [4],
  e: 3
});
console.log(result);
//{
//   a: {b: {c: 1, d: 2}},
//   d: [4,3],
//   e: 3
// }
3. pickBy
_.pickBy(object, [predicate=_.identity]) 函数可以从一个对象中筛选出符合条件的属性，并返回一个新的对象。

const object = {a: 1, b: 'hello', c: true};
const result = _.pickBy(object,_.isNumber);
console.log(result);//{a: 1}
十一、集合处理
1. filter
_.filter(collection,[predicate]) 函数用于过滤出集合中符合给定条件 predicate 的元素，并返回一个新的数组。

collection：要被遍历的集合，可以是数组、对象或字符串。
predicate： 一个函数或对象，用于判断元素是否应该被保留。（断言函数）调用三个参数： (value, index|key, collection) 。
// 1. 一个数字数组 `numbers`。我们想要筛选出其中的偶数。
const numbers = [1, 2, 3, 4, 5];

const result = _.filter(numbers, (num) => num % 2 === 0);
console.log(result);
// [2, 4]
// ------------------------------------------------------------------
//2.一个包含用户对象的数组`users`。我们想要筛选出年龄为`30`的用户对象。
const users = [
  {name: 'Alice', age},
  {name: 'Bob', age},
  {name: 'Charlie', age}
];

const result = _.filter(users,{age:30});
console.log(result);
/{name: 'Bob', age:30}]
2. partition
_.partition(array, predicate)是Lodash 中的函数，用于将一个数组根据给定的条件拆分为两个数组，并返回这两个数组。

该函数接受两个参数：array 和 predicate。array 是要处理的数组，而 predicate 是一个函数，用于指定拆分条件。

_.partition 方法可以非常方便地根据条件拆分数组，并且保持了原始数组中元素的顺序。

const numbers = [1, 2, 3, 4, 5, 6];
const result = _.partition(numbers, n => n % 2 === 0);
console.log(result);

// [
//   [2, 4, 6], // 偶数数组
//   [1, 3, 5]  // 奇数数组
// ]


const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const result = _.partition(users,'age');
console.log(result);

//[
//[
//{name: 'John', age:25},
//{name: 'Bob', age:20}
//],
/{name: 'Jane', age:30}]
//]
3. union
_.union([arrays]) 函数可以返回多个数组合并后去重后的新数组。

const arr1 = [1,2,3];
const arr2 = [2,3,4];
const arr3 = [3,4,5];
const result = _.union(arr1, arr2, arr3);
console.log(result)/[1,2,3,4,5]
4. reject
_.reject(collection,[predicate]) 函数用于从集合中排除符合给定条件 predicate 的元素，并返回一个新的数组。

collection：要被遍历的集合，可以是数组、对象或字符串。
predicate：一个函数或对象，用于判断元素是否应该被排除。如果传递一个对象，则会使用 _.matches 进行浅层相等比较。
通过使用 _.reject 函数，你可以轻松地根据自定义条件排除集合中的元素，得到一个符合要求的新数组。

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

const result = _.reject(users, { age: 30 });
console.log(result);
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

const numbers = [1, 2, 3, 4, 5];
const result = _.reject(numbers, (num) => num %2=== 0);
console.log(result);
//[1,5]
5. groupBy
_.groupBy(collection,[iteratee]) 函数根据指定的标准将集合进行分组，并返回一个包含分组结果的对象。

collection：要被分组的集合，可以是数组、对象或字符串。
iteratee：一个函数或属性名称，用作每个元素的分组标准。默认情况下，它使用自身作为键进行分组。
通过使用 _.groupBy 函数，你可以根据指定的标准轻松对集合进行分组，并得到一个包含分组结果的对象。

// 我们有一个包含用户对象的数组 `users`。我们想根据用户的名称对它们进行分组。通过调用 `_.groupBy` 函数，并传入 `'name'` 作为分组标准，它会遍历整个集合并按照名称进行分组。
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'Alice', age: 35 }
];

const result = _.groupBy(users, 'name');
console.log(result);
/*
{
  Alice: [
    { name: 'Alice', age: 25 },
    { name: 'Alice', age: 35 }
  ],
  Bob: [
    { name: 'Bob', age: 30 }
  ],
  Charlie: [
    { name: 'Charlie', age: 20 }
  ]
}
*/

// 我们有一个数字数组 `numbers`。我们使用一个函数作为 `iteratee` 参数，判断元素是奇数还是偶数，并根据结果进行分组
const numbers = [1, 2, 3, 4, 5];
const result = _.groupBy(numbers, (num) => num %2=== 0? 'even': 'odd');
console.log(result);
/*
{
  odd:[1,3,5],
  even:[2,4]
}
*/
```
