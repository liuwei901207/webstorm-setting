<template>
  <div>

  </div>
</template>
<script>

  // import axios from 'axios' // 按需加载

  export default {
    /**
     * ************ 组件数据 ************ */

    /**
     * data Vue 实例的数据对象, 组件的数据集合。
     */
    data () {
      return {
        title: 'Hello World!'
      }
    },

    /**
     * filters Vue 实例可用过滤器, 注册或获取全局过滤器。
     */
    filters: {},

    /**
     * computed 对于任何复杂逻辑，你都应当使用计算属性。
     */
    computed: {},

    /**
     * watch 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的 watcher,当你想要在数据变化响应时，执行异步操作或开销较大的操作，这个方法是很有用的。
     */
    watch: {},

    /**
     * asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据并返回给当前组件。
     * ES6 async/await
     */
//    async asyncData ({params}) {
//      let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//      return {post: data}
//    },

    /**
     * fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
     * ES6 async/await
     */
//    async fetch ({store, params}) {
//      let {data} = await axios.get('http://my-api/stars')
//      store.commit('setStars', data)
//    },

    /**
     * ************ 组件设置 ************ */

    /**
     * 在 head 方法里可通过 this 关键字来获取组件的数据，你可以利用页面组件的数据来设置个性化的 meta 标签。
     */
//    head () {
//      return {
//        title: this.title,
//        meta: [
//          {hid: 'description', name: 'description', content: 'My custom description'}
//        ]
//      }
//    },

    /**
     * layouts 根目录下的所有文件都属于个性化布局文件，可以在页面组件中利用 layout 属性来引用。
     */
    layout: 'default',

    /**
     * components 组件注册。
     */
    components: {},

    /**
     * middleware 在应用中的特定页面设置中间件。
     */
//    middleware: 'stats',

    /**
     * scrollToTop 属性用于控制页面渲染前是否滚动至页面顶部。
     * 默认值： false
     */
    scrollToTop: false,

    /**
     * transition 组件来实现路由切换时的过渡动效。
     */
    transition: 'slide-right',

    /**
     * validate 可以让你在动态路由对应的页面组件中配置一个校验方法用于校验动态路由参数的有效性。
     */
//    validate ({ params, store }) {
//      // 校验 `params.id` 是否存在
//      return store.state.categories.some((category) => category.id === params.id)
//    },

    /**
     * ************ 组件中的函数方法 ************ */

    methods: {},

    /**
     * ************ 组件的常用生命周期 ************ */

    /**
     * beforeCreate 如： 页面的loading 事件可以在这里触发。
     */
    beforeCreate() {},

    /**
     * created 如： 页面的loading 事件可以在这里结束；还可以做一些初始化，实现函数自执行。
     */
    created() {},

    /**
     * mounted 如： 在这发起后端请求，拿回数据，配合路由钩子做一些事情 。
     */
    mounted() {}
  }
</script>
<style scoped>

</style>
