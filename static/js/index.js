const { createApp, ref,reactive } = Vue

createApp({
  setup() {
    const message = ref('Hello there is manixchens blog!')
    const loading = ref(true)  
    
    // z站内搜索
    function pageSearch(){ 
      window.simpleJekyllSearch = new SimpleJekyllSearch({
        searchInput: document.getElementById('pageSearch'),
        resultsContainer: document.getElementById('searchResultScontainer'),
        // json: '{{ site.baseurl }}/search.json',
        json: window.location.origin+'/search.json',
        searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}">{title}</a></li>',
        noResultsText: 'No results found',
        limit: 10,
        fuzzy: false,
        exclude: ['Welcome']
      }) 
    }
    // 改变加载状态
    function changeLoading(){ 
        setTimeout(function(){
          loading.value = false; 
          if(document.getElementById("gitalk-container")){ 
            const gitalk = new Gitalk({
              clientID: 'f7c5d9acf154e373d8eb',
              clientSecret: '7ecf0b089f43335e1ed5dd8d2a6f375f6695aa11',
              repo: 'gitalk-blog',      // The repository of store comments,
              owner: 'manixchen',
              admin: ['manixchen'],
              id: window.location.pathname.slice(0, 50),      //唯一ID
              distractionFreeMode: false  // Facebook-like distraction free mode
          })
          // console.log(gitalk);
            gitalk.render('gitalk-container') 
          }
          if(document.getElementById("pageSearch")){ 
            pageSearch();
          }
        }, 4000)
    } 
      const formInline = reactive({
      search: '', 
      date: '',
      })
      const activeNames = ref(['1','2','3']);

    
    function loadedShare(){    
        if(document.getElementById("disqus_shortname")){  
          window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
          with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

        }
      }; 

    return {
      message,
      loading,
      formInline,activeNames,
      changeLoading,loadedShare
    }
  }, 
  mounted() {  
    Vue.nextTick(this.changeLoading) 
  },
  delimiters:['[[[',']]]']
//   delimiters:['${','}']
}).use(ElementPlus).mount('#app'); 
