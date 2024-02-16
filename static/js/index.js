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
    return {
      message,
      loading,
      formInline,
      changeLoading
    }
  }, 
  mounted() {  
    Vue.nextTick(this.changeLoading)
  },
  delimiters:['[[[',']]]']
//   delimiters:['${','}']
}).use(ElementPlus).mount('#app'); 
