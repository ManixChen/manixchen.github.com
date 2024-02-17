const { createApp, ref,reactive } = Vue

createApp({
  setup() {
    const message = ref('Hello Vue!')
    const loading = ref(true) 
    // 改变加载状态
    function changeLoading(){ 
        setTimeout(()=>loading.value = false, 4000)
        
    } 
    const formInline = reactive({
    search: '', 
    date: '',
    })

    
    function loadedDuoshuo(){
        function duoshuo(){ 
          var duoshuoQuery = {short_name:"manixchen"};
          var ds = document.createElement("script");
          ds.type = "text/javascript";
          // ds.async = true;
          // ds.src =   (document.location.protocol == "https:" ? "https:"  : "http:") + "//static.duoshuo.com/embed.js";
          ds.src =  "http://static.duoshuo.com/embed.js";//测试已经失效
          ds.charset = "UTF-8";
          (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
          ).appendChild(ds);
          //为多说评论框添加当前页面的地址
          var dsThread=document.getElementsByClassName("ds-thread");
          //console.log(dsThread.length);
          if(dsThread.length>0&&dsThread[0].getAttribute("data-url")!=null){
            //console.log(dsThread[0].getAttribute("data-url"));
            dsThread[0].setAttribute("data-url",window.location.href);
          }
          
        }
          
            
        function share(){
          window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
          with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
        }
        
        
        function disqus(){
          /* * * CONFIGURATION VARIABLES * * */
          var disqus_shortname =document.getElementById("disqus_shortname").value;
          console.log("disqus_shortname:",disqus_shortname);
          var dsq = document.createElement('script');
          dsq.type = 'text/javascript'; 
          //  dsq.async = true;
          dsq.src =   disqus_shortname + '.disqus.com/embed.js';
          document.getElementsByTagName("script")[0].parentNode.appendChild(dsq);
        }

        if(document.getElementById("disqus_shortname")){
          duoshuo();
          share();
          disqus();
        }
      }; 

      const activeNames = ref(['1','2','3'])
    return {
      message,
      loading,
      formInline,activeNames,
      changeLoading,loadedDuoshuo,
    }
  }, 
  mounted() {  
    Vue.nextTick(this.changeLoading)
    
      // setTimeout(Vue.nextTick(this.loadedDuoshuo),500); 
  },
  delimiters:['[[[',']]]']
//   delimiters:['${','}']
}).use(ElementPlus).mount('#app'); 
