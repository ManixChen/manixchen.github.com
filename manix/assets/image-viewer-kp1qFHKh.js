import{ak as P,al as xe,am as oe,an as Ce,ao as Le,b as we,$ as Z,a0 as he,c as de,k as le,ap as ge,aq as ze,ar as Te,as as be,l as ke,at as Ne,r as L,au as Oe,s as $e,d as E,w as fe,aj as Ie,o as Ee,m as C,t as me,A as p,v as A,q as x,y as h,e as n,H as ve,z as Ae,D as R,E as F,a9 as Re,n as B,I as ie,B as Be,F as Me,av as Ve,aw as De,ab as Fe,ax as Pe,ay as Xe,J as Ye,x as He,C as We,G as se,T as je,az as Ke,_ as Se,aA as q,aB as G,aC as qe,P as _e,aD as Ge,a1 as Ue,aE as Ze,h as Je,K as Qe,aF as et}from"./index-DCkmKyww.js";import{u as tt}from"./index-oZ5vU6PM.js";const nt=(e,s)=>{if(!P||!e||!s)return!1;const t=e.getBoundingClientRect();let u;return s instanceof Element?u=s.getBoundingClientRect():u={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<u.bottom&&t.bottom>u.top&&t.right>u.left&&t.left<u.right};var at=/\s/;function rt(e){for(var s=e.length;s--&&at.test(e.charAt(s)););return s}var st=/^\s+/;function ot(e){return e&&e.slice(0,rt(e)+1).replace(st,"")}var pe=NaN,it=/^[-+]0x[0-9a-f]+$/i,lt=/^0b[01]+$/i,ut=/^0o[0-7]+$/i,ct=parseInt;function ye(e){if(typeof e=="number")return e;if(xe(e))return pe;if(oe(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=oe(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=ot(e);var t=lt.test(e);return t||ut.test(e)?ct(e.slice(2),t?2:8):it.test(e)?pe:+e}var ue=function(){return Ce.Date.now()},dt="Expected a function",ft=Math.max,mt=Math.min;function vt(e,s,t){var u,i,v,O,o,I,y=0,S=!1,_=!1,w=!0;if(typeof e!="function")throw new TypeError(dt);s=ye(s)||0,oe(t)&&(S=!!t.leading,_="maxWait"in t,v=_?ft(ye(t.maxWait)||0,s):v,w="trailing"in t?!!t.trailing:w);function f(c){var b=u,z=i;return u=i=void 0,y=c,O=e.apply(z,b),O}function M(c){return y=c,o=setTimeout(D,s),S?f(c):O}function d(c){var b=c-I,z=c-y,j=s-b;return _?mt(j,v-z):j}function V(c){var b=c-I,z=c-y;return I===void 0||b>=s||b<0||_&&z>=v}function D(){var c=ue();if(V(c))return X(c);o=setTimeout(D,d(c))}function X(c){return o=void 0,w&&u?f(c):(u=i=void 0,O)}function W(){o!==void 0&&clearTimeout(o),y=0,u=I=i=o=void 0}function Y(){return o===void 0?O:X(ue())}function H(){var c=ue(),b=V(c);if(u=arguments,i=this,I=c,b){if(o===void 0)return M(I);if(_)return clearTimeout(o),o=setTimeout(D,s),f(I)}return o===void 0&&(o=setTimeout(D,s)),O}return H.cancel=W,H.flush=Y,H}var gt="Expected a function";function ce(e,s,t){var u=!0,i=!0;if(typeof e!="function")throw new TypeError(gt);return oe(t)&&(u="leading"in t?!!t.leading:u,i="trailing"in t?!!t.trailing:i),vt(e,s,{leading:u,maxWait:s,trailing:i})}const pt=(e,s)=>{if(!P)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(s)],u=Le(e,t);return["scroll","auto","overlay"].some(i=>u.includes(i))},yt=(e,s)=>{if(!P)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(pt(t,s))return t;t=t.parentNode}return t},wt=we({urlList:{type:Z(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),ht={close:()=>!0,switch:e=>de(e),rotate:e=>de(e)},bt=["src","crossorigin"],kt=le({name:"ElImageViewer"}),It=le({...kt,props:wt,emits:ht,setup(e,{expose:s,emit:t}){var u;const i=e,v={CONTAIN:{name:"contain",icon:ge(ze)},ORIGINAL:{name:"original",icon:ge(Te)}},{t:O}=be(),o=ke("image-viewer"),{nextZIndex:I}=Ne(),y=L(),S=L([]),_=Oe(),w=L(!0),f=L(i.initialIndex),M=$e(v.CONTAIN),d=L({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),V=L((u=i.zIndex)!=null?u:I()),D=E(()=>{const{urlList:r}=i;return r.length<=1}),X=E(()=>f.value===0),W=E(()=>f.value===i.urlList.length-1),Y=E(()=>i.urlList[f.value]),H=E(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!i.infinite&&X.value)]),c=E(()=>[o.e("btn"),o.e("next"),o.is("disabled",!i.infinite&&W.value)]),b=E(()=>{const{scale:r,deg:l,offsetX:m,offsetY:T,enableTransition:$}=d.value;let k=m/r,N=T/r;switch(l%360){case 90:case-270:[k,N]=[N,-k];break;case 180:case-180:[k,N]=[-k,-N];break;case 270:case-90:[k,N]=[-N,k];break}const K={transform:`scale(${r}) rotate(${l}deg) translate(${k}px, ${N}px)`,transition:$?"transform .3s":""};return M.value.name===v.CONTAIN.name&&(K.maxWidth=K.maxHeight="100%"),K});function z(){J(),t("close")}function j(){const r=ce(m=>{switch(m.code){case q.esc:i.closeOnPressEscape&&z();break;case q.space:ae();break;case q.left:re();break;case q.up:g("zoomIn");break;case q.right:a();break;case q.down:g("zoomOut");break}}),l=ce(m=>{const T=m.deltaY||m.deltaX;g(T<0?"zoomIn":"zoomOut",{zoomRate:i.zoomRate,enableTransition:!1})});_.run(()=>{G(document,"keydown",r),G(document,"wheel",l)})}function J(){_.stop()}function Q(){w.value=!1}function ee(r){w.value=!1,r.target.alt=O("el.image.error")}function te(r){if(w.value||r.button!==0||!y.value)return;d.value.enableTransition=!1;const{offsetX:l,offsetY:m}=d.value,T=r.pageX,$=r.pageY,k=ce(K=>{d.value={...d.value,offsetX:l+K.pageX-T,offsetY:m+K.pageY-$}}),N=G(document,"mousemove",k);G(document,"mouseup",()=>{N()}),r.preventDefault()}function ne(){d.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ae(){if(w.value)return;const r=qe(v),l=Object.values(v),m=M.value.name,$=(l.findIndex(k=>k.name===m)+1)%r.length;M.value=v[r[$]],ne()}function U(r){const l=i.urlList.length;f.value=(r+l)%l}function re(){X.value&&!i.infinite||U(f.value-1)}function a(){W.value&&!i.infinite||U(f.value+1)}function g(r,l={}){if(w.value)return;const{minScale:m,maxScale:T}=i,{zoomRate:$,rotateDeg:k,enableTransition:N}={zoomRate:i.zoomRate,rotateDeg:90,enableTransition:!0,...l};switch(r){case"zoomOut":d.value.scale>m&&(d.value.scale=Number.parseFloat((d.value.scale/$).toFixed(3)));break;case"zoomIn":d.value.scale<T&&(d.value.scale=Number.parseFloat((d.value.scale*$).toFixed(3)));break;case"clockwise":d.value.deg+=k,t("rotate",d.value.deg);break;case"anticlockwise":d.value.deg-=k,t("rotate",d.value.deg);break}d.value.enableTransition=N}return fe(Y,()=>{Ie(()=>{const r=S.value[0];r!=null&&r.complete||(w.value=!0)})}),fe(f,r=>{ne(),t("switch",r)}),Ee(()=>{var r,l;j(),(l=(r=y.value)==null?void 0:r.focus)==null||l.call(r)}),s({setActiveItem:U}),(r,l)=>(C(),me(Ke,{to:"body",disabled:!r.teleported},[p(je,{name:"viewer-fade",appear:""},{default:A(()=>[x("div",{ref_key:"wrapper",ref:y,tabindex:-1,class:h(n(o).e("wrapper")),style:ve({zIndex:V.value})},[x("div",{class:h(n(o).e("mask")),onClick:l[0]||(l[0]=Ae(m=>r.hideOnClickModal&&z(),["self"]))},null,2),R(" CLOSE "),x("span",{class:h([n(o).e("btn"),n(o).e("close")]),onClick:z},[p(n(F),null,{default:A(()=>[p(n(Re))]),_:1})],2),R(" ARROW "),n(D)?R("v-if",!0):(C(),B(ie,{key:0},[x("span",{class:h(n(H)),onClick:re},[p(n(F),null,{default:A(()=>[p(n(Be))]),_:1})],2),x("span",{class:h(n(c)),onClick:a},[p(n(F),null,{default:A(()=>[p(n(Me))]),_:1})],2)],64)),R(" ACTIONS "),x("div",{class:h([n(o).e("btn"),n(o).e("actions")])},[x("div",{class:h(n(o).e("actions__inner"))},[p(n(F),{onClick:l[1]||(l[1]=m=>g("zoomOut"))},{default:A(()=>[p(n(Ve))]),_:1}),p(n(F),{onClick:l[2]||(l[2]=m=>g("zoomIn"))},{default:A(()=>[p(n(De))]),_:1}),x("i",{class:h(n(o).e("actions__divider"))},null,2),p(n(F),{onClick:ae},{default:A(()=>[(C(),me(Fe(n(M).icon)))]),_:1}),x("i",{class:h(n(o).e("actions__divider"))},null,2),p(n(F),{onClick:l[3]||(l[3]=m=>g("anticlockwise"))},{default:A(()=>[p(n(Pe))]),_:1}),p(n(F),{onClick:l[4]||(l[4]=m=>g("clockwise"))},{default:A(()=>[p(n(Xe))]),_:1})],2)],2),R(" CANVAS "),x("div",{class:h(n(o).e("canvas"))},[(C(!0),B(ie,null,Ye(r.urlList,(m,T)=>He((C(),B("img",{ref_for:!0,ref:$=>S.value[T]=$,key:m,src:m,style:ve(n(b)),class:h(n(o).e("img")),crossorigin:r.crossorigin,onLoad:Q,onError:ee,onMousedown:te},null,46,bt)),[[We,T===f.value]])),128))],2),se(r.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Et=Se(It,[["__file","image-viewer.vue"]]);const St=_e(Et),_t=we({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>he([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),xt={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>de(e),close:()=>!0,show:()=>!0},Ct=["src","loading","crossorigin"],Lt={key:0},zt=le({name:"ElImage",inheritAttrs:!1}),Tt=le({...zt,props:_t,emits:xt,setup(e,{emit:s}){const t=e;let u="";const{t:i}=be(),v=ke("image"),O=Ge(),o=tt(),I=L(),y=L(!1),S=L(!0),_=L(!1),w=L(),f=L(),M=P&&"loading"in HTMLImageElement.prototype;let d,V;const D=E(()=>[v.e("inner"),Y.value&&v.e("preview"),S.value&&v.is("loading")]),X=E(()=>O.style),W=E(()=>{const{fit:a}=t;return P&&a?{objectFit:a}:{}}),Y=E(()=>{const{previewSrcList:a}=t;return Array.isArray(a)&&a.length>0}),H=E(()=>{const{previewSrcList:a,initialIndex:g}=t;let r=g;return g>a.length-1&&(r=0),r}),c=E(()=>t.loading==="eager"?!1:!M&&t.loading==="lazy"||t.lazy),b=()=>{P&&(S.value=!0,y.value=!1,I.value=t.src)};function z(a){S.value=!1,y.value=!1,s("load",a)}function j(a){S.value=!1,y.value=!0,s("error",a)}function J(){nt(w.value,f.value)&&(b(),te())}const Q=et(J,200,!0);async function ee(){var a;if(!P)return;await Ie();const{scrollContainer:g}=t;Ze(g)?f.value=g:Je(g)&&g!==""?f.value=(a=document.querySelector(g))!=null?a:void 0:w.value&&(f.value=yt(w.value)),f.value&&(d=G(f,"scroll",Q),setTimeout(()=>J(),100))}function te(){!P||!f.value||!Q||(d==null||d(),f.value=void 0)}function ne(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function ae(){Y.value&&(V=G("wheel",ne,{passive:!1}),u=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,s("show"))}function U(){V==null||V(),document.body.style.overflow=u,_.value=!1,s("close")}function re(a){s("switch",a)}return fe(()=>t.src,()=>{c.value?(S.value=!0,y.value=!1,te(),ee()):b()}),Ee(()=>{c.value?ee():b()}),(a,g)=>(C(),B("div",{ref_key:"container",ref:w,class:h([n(v).b(),a.$attrs.class]),style:ve(n(X))},[y.value?se(a.$slots,"error",{key:0},()=>[x("div",{class:h(n(v).e("error"))},Qe(n(i)("el.image.error")),3)]):(C(),B(ie,{key:1},[I.value!==void 0?(C(),B("img",Ue({key:0},n(o),{src:I.value,loading:a.loading,style:n(W),class:n(D),crossorigin:a.crossorigin,onClick:ae,onLoad:z,onError:j}),null,16,Ct)):R("v-if",!0),S.value?(C(),B("div",{key:1,class:h(n(v).e("wrapper"))},[se(a.$slots,"placeholder",{},()=>[x("div",{class:h(n(v).e("placeholder"))},null,2)])],2)):R("v-if",!0)],64)),n(Y)?(C(),B(ie,{key:2},[_.value?(C(),me(n(St),{key:0,"z-index":a.zIndex,"initial-index":n(H),infinite:a.infinite,"zoom-rate":a.zoomRate,"min-scale":a.minScale,"max-scale":a.maxScale,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:U,onSwitch:re},{default:A(()=>[a.$slots.viewer?(C(),B("div",Lt,[se(a.$slots,"viewer")])):R("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):R("v-if",!0)],64)):R("v-if",!0)],6))}});var Nt=Se(Tt,[["__file","image.vue"]]);const At=_e(Nt);export{At as E,ce as t};
