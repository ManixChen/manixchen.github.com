function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LoginForm-p5nLYzDX.js","assets/index-DK5HkDXa.js","assets/index-DWrdaYQO.css","assets/input-Bxq6qlIF.js","assets/event-DJPVWD5V.js","assets/index-BvNsDrGx.js","assets/input-p8GxgIlS.css","assets/scroll-DGpnu8Pa.js","assets/vnode-B60RIPiq.js","assets/LoginForm-B-P5qheZ.css","assets/RegisterForm-B3VtMNoF.js","assets/RegisterForm-DVXUL15O.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{af as b,aJ as x,r as L,aK as S,aL as y,aM as E,ag as O,n as j,x as c,d as t,K as k,v as w,A as n,t as l,q as _,T as g,D as d,E as C,m as i,aN as N,aO as f,C as R,aP as p}from"./index-DK5HkDXa.js";const T=b("loginbox",()=>{const{t:m,locale:e}=x(),o=L(!0);return{isLogin:o,locale:e,changeLang:a=>{Object.prototype.toString.call(a)=="[object String]"?e.value=a:Object.prototype.toString.call(a)=="[object Null]"?e.value=S():e.value=e.value=="en-us"?"zh-cn":"en-us",y.setCache("locale",e.value)},whetherRegister:function(){o.value=o.value===!1}}}),B={class:"user-box"},D={class:"container"},I={__name:"index",setup(m){const e=f(()=>p(()=>import("./LoginForm-p5nLYzDX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),o=f(()=>p(()=>import("./RegisterForm-B3VtMNoF.js"),__vite__mapDeps([10,1,2,3,4,5,6,11]))),s=T(),{isLogin:r,locale:a}=O(s);return(V,u)=>{const v=C;return i(),j("div",B,[c("div",D,[c("span",{onClick:u[0]||(u[0]=(...h)=>t(s).changeLang&&t(s).changeLang(...h)),id:"change-lang"},[c("b",null,k(t(a)=="en-us"?"中":"ENG"),1),w(n(v,null,{default:l(()=>[n(t(N))]),_:1},512),[[R,!1]])]),t(r)?(i(),_(g,{key:0,name:"sun-login"},{default:l(()=>[n(t(e))]),_:1})):d("",!0),t(r)?d("",!0):(i(),_(g,{key:1,name:"sun-register"},{default:l(()=>[n(t(o))]),_:1}))])])}}},P=E(I,[["__scopeId","data-v-6f4824db"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{z as i,T as u};
