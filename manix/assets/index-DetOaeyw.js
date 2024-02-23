import{b as Z,c as j,i as h,a as k,d as U,e as f,u as v,r as M,f as B,w,o as c,g as u,n as E,h as i,j as d,k as t,l as y,E as G,m as W,p as L,_ as x,q as J,s as b,t as D,v as A,x as e,y as O,z as q}from"./index-Cv3_oK_S.js";import{E as H}from"./button-kqzvLirm.js";import{E as z,a as N}from"./col-AFYffnGn.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const X=Z({size:{type:[Number,String],values:j,default:"",validator:a=>h(a)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:k},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:U(String),default:"cover"}}),Y={error:a=>a instanceof Event},P=["src","alt","srcset"],T=f({name:"ElAvatar"}),R=f({...T,props:X,emits:Y,setup(a,{emit:m}){const g=a,r=v("avatar"),o=M(!1),l=B(()=>{const{size:s,icon:C,shape:I}=g,p=[r.b()];return J(s)&&p.push(r.m(s)),C&&p.push(r.m("icon")),I&&p.push(r.m(I)),p}),Q=B(()=>{const{size:s}=g;return h(s)?r.cssVarBlock({size:b(s)||""}):void 0}),S=B(()=>({objectFit:g.fit}));w(()=>g.src,()=>o.value=!1);function V(s){o.value=!0,m("error",s)}return(s,C)=>(c(),u("span",{class:L(i(l)),style:E(i(Q))},[(s.src||s.srcSet)&&!o.value?(c(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:E(i(S)),onError:V},null,44,P)):s.icon?(c(),d(i(G),{key:1},{default:t(()=>[(c(),d(y(s.icon)))]),_:1})):W(s.$slots,"default",{key:2})],6))}});var F=x(R,[["__file","avatar.vue"]]);const _=D(F),$="data:image/png;base64,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",AA="/manix/assets/gitee-CWZIweKB.png",sA="/manix/assets/weixin-lrYNmKOu.png",aA="/manix/assets/qq-JHfo8giW.png",eA="data:image/png;base64,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",tA="/manix/assets/manix2-Dv87uiZF.png",n=a=>(O("data-v-ffa23053"),a=a(),q(),a),nA={class:"just-center"},oA=n(()=>A("h1",null,"ManixChen",-1)),rA=n(()=>A("span",{class:"job-type"},"Web Engineer",-1)),lA=n(()=>A("br",null,null,-1)),gA=n(()=>A("br",null,null,-1)),cA=n(()=>A("div",{class:"href-container"},[A("a",{target:"new",href:"https://github.com/ManixChen"},[A("img",{src:$,alt:""})]),A("a",{target:"new",href:"https://gitee.com/manixchen"},[A("img",{src:AA,alt:""})]),A("a",{target:"new",href:"weixin://muruoqingchenan"},[A("img",{src:sA,alt:""})]),A("a",{target:"new",href:"http://wpa.qq.com/msgrd?v=3&uin=&site=1183108660&menu=yes"},[A("img",{src:aA,alt:""})]),A("a",{target:"new",href:"mailto:manixchensunshine@163.com"},[A("img",{src:eA,alt:""})])],-1)),iA=n(()=>A("br",null,null,-1)),pA=n(()=>A("br",null,null,-1)),QA=n(()=>A("br",null,null,-1)),BA=n(()=>A("a",{target:"new",href:"/public/resume_web.pdf"},"Download Cv",-1)),uA={__name:"index",setup(a){return(m,g)=>{const r=_,o=N,l=z,Q=H;return c(),u("main",null,[A("div",nA,[A("div",null,[e(r,{class:"icon-avtor",src:i(tA),lazy:""},null,8,["src"])])]),e(l,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[oA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[rA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[lA,gA,cA]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[A("div",null,[iA,pA,QA,e(Q,{type:"danger",round:"",class:"btn-large"},{default:t(()=>[BA]),_:1})])]),_:1})]),_:1})])}}},dA=K(uA,[["__scopeId","data-v-ffa23053"]]);export{dA as default};
