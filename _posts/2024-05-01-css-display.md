```yaml
layout: post
title:  布局的常用方法
tags: css 布局
categories: css
```

**** 网格布局-grid 的常用方法 *** 
一.   CSS 网格布局模块（CSS Grid Layout Module）提供了带有行和列的基于网格的布局系统，它使网页设计变得更加容易，而无需使用浮动和定位。 
1.  grid-template-columns属性
```vue
grid-template-columns：定义网格布局中的列数，并可定义每列的宽度。

* {
  margin: 0px;
}
.container {
  /* 设置为网格布局，并且占据页面一整行 */
  display: grid;
  /* 设置网格列数 这里设置为4列，每一列宽度为100px */
  grid-template-columns: 100px 100px 100px 100px;
  /* 设置网格项目间间隙 */
  gap: 10px 10px;
  background-color: #7bddf6;
  padding: 10px;
}

.container > div {
  border: 1px solid white;
  text-align: center;
  font-size: 20px;
  background-color: #b5f1f7;
}
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>
```
```
通过使用repeat(重复次数，重复值)函数，可以简写重复的值。

.container{
	/* 表示重复4列，每一列100px宽度*/
	 grid-template-columns: (4,100px);
	 /*
		等同于
     grid-template-columns: 100px 100px 100px 100px;
	*/
}
auto-fill：表示自动填充，让一行或一列中尽可能地容纳更多的单元格。

grd-template-columns:repeat(auto-fill,200px) 
/*
表示列宽200px，但是列的数量是不固定的，只要浏览器能够容纳的下，就可以放置元素
*/
fr：表示片段，为了方比那表示比例关系

grid-template-columns:200px 1fr 2fr;
/*
表示第一个列宽度设置为200px，后面剩余的宽度被按照比例划分，分别为剩余宽度的1/3和2/3
*/
minmax：产生一个长度范围，表示长度就在这个范围值中都可以应用到网格项目中。第一个参数就是最小值，第二个参数时最大值。

minmax(100px,1fr)
/*表示列宽不小于100px，不大于1fr*/
grid-template-rows 属性
grid-template-rows 属性定义每列的高度。

<div class="container">
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <div>4</div>
   <div>5</div>
   <div>6</div>
   <div>7</div>
   <div>8</div>
 </div>
* {
  margin: 0px;
}
.container {
  /* 设置为网格布局，并且占据一行 */
  display: grid;
  /* 设置网格列数 这里设置为4行，宽度自动 */
  grid-template-columns: auto auto auto auto;
  /* 设置第一行和第二行中每一列的高度 */
  grid-template-rows: 100px 200px;
  /* TODO:把高度设为100%或者auto试试 */
  /* 设置网格项目间间隙 */
  gap: 10px 10px;
  background-color: #7bddf6;
  padding: 10px;
}

.container > div {
  border: 1px solid white;
  text-align: center;
  font-size: 20px;
  background-color: #b5f1f7;
}
其拥有和grid-template-columns差不多的属性值可选，例如：repeat()函数，fr比例关系，auto-fill自动填充，minmax长度范围。

justify-content 属性
justify-content 属性用于在容器内对齐整个网格。网格的总宽度必须小于容器的宽度，这样 justify-content 属性才能生效。

<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>
* {
  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px 10px;
  /* justify-content: space-evenly; */
  /* justify-content: space-between; */
  /* justify-content: space-around; */
  /* justify-content: center; */
  /* justify-content: start; */
  justify-content: end;
  background-color: #99deef;
}

.container > div {
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid white;
  background-color: #d1f3f5;
}
```













