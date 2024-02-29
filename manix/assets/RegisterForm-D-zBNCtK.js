import{aJ as y,bj as E,r as S,M as f,m as F,n as N,q as n,A as o,v as m,d as U,bm as $,Z as w,K as g,bk as I,aH as _,E as R,ah as k,bo as C,bp as P}from"./index-BSqOno0d.js";import{E as q,a as M,b as A}from"./input-D-b9wXso.js";import"./event-CHfSTiuK.js";import"./index-L33ci54R.js";const b=u=>(C("data-v-0219f7b0"),u=u(),P(),u),x={class:"login-form"},B=b(()=>n("div",null,"Register",-1)),z={class:"action-footer vertical-align-center"},H={class:"action-footer action-bottom"},Z=b(()=>n("footer",null,null,-1)),j={__name:"RegisterForm",props:{whetherRegister:Function},setup(u){const{locale:J,t:r}=E(),c=S(),s=f({name:"",email:"",password:"",repassword:""}),h=f({name:[{required:!0,message:r("login.AccountCannotEmpty"),trigger:"blur"},{min:4,message:r("login.MinUserinfo")},{max:12,message:r("login.MaxUserinfo")}],password:[{required:!0,message:r("login.NeedPassword"),trigger:"blur"},{min:6,message:r("login.PasswordMinChar")},{max:15,message:r("login.PasswordMaxChar")}],repassword:[{required:!0,message:r("register.NeedPassword"),trigger:"blur"},{validator:(t,e,l)=>{e!==s.password?l(new Error(r("register.PasswordNeedSame"))):l()},trigger:"blur"}],email:[{required:!0,message:r("register.NeedEmail"),trigger:"blur"},{pattern:/((\w+)|(\w+[!#$%&'*+\-,./=?^_`{|}~\w]*[!#$%&'*+\-,/=?^_`{|}~\w]))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)/,message:r("register.CorrectEmail"),trigger:"blur"}]}),v=async t=>{if(!t)return!1;await t.validate((e,l)=>{if(e)I.setCache("cusser_info",JSON.stringify(s)),_({title:"submit!",message:r("login.SubmitSuccessfully"),type:"success"});else{let d="";for(let i in l)if(l[i])for(let p in l[i])d+=l[i][p].message+"<br/>";_({title:r("login.WrongInformation"),dangerouslyUseHTMLString:!0,message:d,type:"error",duration:60001})}})};return(t,e)=>{const l=R,d=q,i=M,p=k,V=A;return F(),N("div",x,[n("header",null,[n("div",null,[o(l,null,{default:m(()=>[o(U($))]),_:1})]),B]),n("section",null,[o(V,{class:"loginForm",ref_key:"registerFormRef",ref:c,rules:h,model:s,"label-position":"top",labelSuffix:"",requireAsteriskPosition:"right","label-width":"200px"},{default:m(()=>[o(i,{prop:"name"},{default:m(()=>[o(d,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a),placeholder:t.$t("login.UserName")},null,8,["modelValue","placeholder"])]),_:1}),o(i,{prop:"email"},{default:m(()=>[o(d,{modelValue:s.email,"onUpdate:modelValue":e[1]||(e[1]=a=>s.email=a),placeholder:t.$t("register.UserEmail")},null,8,["modelValue","placeholder"])]),_:1}),o(i,{prop:"password"},{default:m(()=>[o(d,{type:"password",modelValue:s.password,"onUpdate:modelValue":e[2]||(e[2]=a=>s.password=a),placeholder:t.$t("login.Password")},null,8,["modelValue","placeholder"])]),_:1}),o(i,{prop:"repassword"},{default:m(()=>[o(d,{type:"password",modelValue:s.repassword,"onUpdate:modelValue":e[3]||(e[3]=a=>s.repassword=a),placeholder:t.$t("register.RepeatPassword")},null,8,["modelValue","placeholder"])]),_:1}),n("div",z,[o(p,{size:"large",type:"primary",round:"",class:"login-circle",onClick:e[4]||(e[4]=a=>v(c.value))},{default:m(()=>[w(g(t.$t("login.SignUp")),1)]),_:1})]),n("div",H,[w(g(t.$t("register.HasCount"))+" ",1),n("a",{onClick:e[5]||(e[5]=(...a)=>u.whetherRegister&&u.whetherRegister(...a)),href:"javascript:void(0)"},g(t.$t("register.Login")),1)])]),_:1},8,["rules","model"])]),Z])}}},O=y(j,[["__scopeId","data-v-0219f7b0"]]);export{O as default};
