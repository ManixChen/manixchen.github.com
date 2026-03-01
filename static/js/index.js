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
    function initTabCarousel() {
      const tabShells = document.querySelectorAll('[data-expandable-tabs]');
      if (!tabShells.length) {
        return;
      }

      tabShells.forEach((shell) => {
        const tabsNav = shell.querySelector('.taxonomy-tabs .el-tabs__nav');
        const tabsNavScroll = shell.querySelector('.taxonomy-tabs .el-tabs__nav-scroll');
        const tabsHeader = shell.querySelector('.taxonomy-tabs .el-tabs__header');
        const controls = shell.querySelector('.taxonomy-tabs-controls');
        const prevBtn = shell.querySelector('.taxonomy-tabs-prev');
        const nextBtn = shell.querySelector('.taxonomy-tabs-next');
        const searchInput = shell.querySelector('.taxonomy-tabs-search');
        if (!tabsNav || !tabsNavScroll || !tabsHeader || !controls || !prevBtn || !nextBtn) {
          return;
        }

        if (controls.parentElement !== tabsHeader) {
          tabsHeader.appendChild(controls);
        }

        const getMetrics = () => {
          const maxScroll = tabsNav.scrollWidth - tabsNavScroll.clientWidth;
          const hasOverflow = maxScroll > 8;
          return { maxScroll, hasOverflow };
        };

        const pageWidth = () => Math.max(220, Math.floor(tabsNavScroll.clientWidth * 0.82));

        const goNext = () => {
          const { maxScroll, hasOverflow } = getMetrics();
          if (!hasOverflow) return;
          const current = tabsNavScroll.scrollLeft;
          const step = pageWidth();
          const target = current + step >= maxScroll - 2 ? 0 : current + step;
          tabsNavScroll.scrollTo({ left: target, behavior: 'smooth' });
        };

        const goPrev = () => {
          const { maxScroll, hasOverflow } = getMetrics();
          if (!hasOverflow) return;
          const current = tabsNavScroll.scrollLeft;
          const step = pageWidth();
          const target = current - step <= 0 ? maxScroll : current - step;
          tabsNavScroll.scrollTo({ left: target, behavior: 'smooth' });
        };

        if (!shell.dataset.carouselBound) {
          shell.dataset.carouselBound = '1';
          prevBtn.addEventListener('click', goPrev);
          nextBtn.addEventListener('click', goNext);
          tabsNav.addEventListener('click', () => {
            const activeItem = tabsNav.querySelector('.is-active');
            if (activeItem && typeof activeItem.scrollIntoView === 'function') {
              activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
          });
        }

        if (searchInput && !searchInput.dataset.bound) {
          searchInput.dataset.bound = '1';
          searchInput.addEventListener('input', () => {
            const keyword = searchInput.value.trim().toLowerCase();
            const items = tabsNav.querySelectorAll('.el-tabs__item');
            let firstVisible = null;
            items.forEach((item) => {
              const text = (item.textContent || '').trim().toLowerCase();
              const matched = !keyword || text.includes(keyword);
              item.style.display = matched ? '' : 'none';
              if (matched && !firstVisible) {
                firstVisible = item;
              }
            });
            if (firstVisible && !firstVisible.classList.contains('is-active')) {
              firstVisible.click();
            }
            const { hasOverflow } = getMetrics();
            controls.hidden = !hasOverflow;
          });
        }

        const { hasOverflow } = getMetrics();
        controls.hidden = !hasOverflow;
        shell.classList.toggle('has-overflow', hasOverflow);
        if (!hasOverflow) {
          tabsNavScroll.scrollTo({ left: 0, behavior: 'smooth' });
        }

        if (shell.__carouselTimer) {
          clearInterval(shell.__carouselTimer);
          shell.__carouselTimer = null;
        }

        if (hasOverflow) {
          const startTimer = () => {
            if (shell.__carouselTimer) clearInterval(shell.__carouselTimer);
            shell.__carouselTimer = setInterval(() => {
              goNext();
            }, 4200);
          };
          const stopTimer = () => {
            if (shell.__carouselTimer) {
              clearInterval(shell.__carouselTimer);
              shell.__carouselTimer = null;
            }
          };
          startTimer();
          if (!shell.dataset.hoverBound) {
            shell.dataset.hoverBound = '1';
            shell.addEventListener('mouseenter', stopTimer);
            shell.addEventListener('mouseleave', startTimer);
          }
        }
      });
    }

    // Update loading state and initialize page widgets.
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
          initTabCarousel();
        }, 1200)
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
      changeLoading,loadedShare,initTabCarousel
    }
  }, 
  mounted() {  
    Vue.nextTick(this.changeLoading)
    window.addEventListener('resize', this.initTabCarousel)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initTabCarousel)
    document.querySelectorAll('[data-expandable-tabs]').forEach((shell) => {
      if (shell.__carouselTimer) {
        clearInterval(shell.__carouselTimer)
        shell.__carouselTimer = null
      }
    })
  },
  delimiters:['[[[',']]]']
//   delimiters:['${','}']
}).use(ElementPlus).mount('#app'); 
