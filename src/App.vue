<template>
  <div id="app">
    <router-view v-slot="{ Component }">
  <transition name="slide-left">
    <component :is="Component" />
  </transition>
</router-view>
    <tabbar route v-if="!route.meta.hideTab">
      <tabbar-item icon="wap-home-o" to="/home">首页</tabbar-item>
      <tabbar-item icon="gold-coin-o" to="/transfer">理财</tabbar-item>
      <tabbar-item icon="chat-o" to="/message">消息</tabbar-item> <!-- 新增消息导航项 -->
      <tabbar-item icon="user-o" to="/mine">我的</tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  setup() {
    const active = ref('/home')
    const unreadCount = ref(3)
    const route = useRoute()

    onMounted(() => {
      active.value = route.path
    })

    // 添加路由监听，保持Tabbar与路由同步
    watch(
      () => route.path,
      (newPath) => {
        active.value = newPath
      }
    )

    return { active, unreadCount,route }
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>