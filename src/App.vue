<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide">
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
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s linear;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>