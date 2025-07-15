<template>
  <div class="message-page">
    <van-nav-bar title="消息" fixed />
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多消息"
      @load="onLoad"
    >
      <van-cell
        v-for="item in messages"
        :key="item.id"
        :title="item.name"
        :value="item.lastMessage"
        :label="item.time"
        class="message-item"
      >
        <template #icon>
          <van-image
            :src="item.avatar"
            round
            class="avatar"
          />
        </template>
        <template #extra>
          <div v-if="item.unread > 0" class="unread-badge">{{ item.unread }}</div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { ref } from 'vue'
import { NavBar, List, Cell, Image } from 'vant'

export default {
  components: {
    VanNavBar: NavBar,
    VanList: List,
    VanCell: Cell,
    VanImage: Image
  },
  setup() {
    const messages = ref([
      {
        id: 1,
        name: '张三',
        avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        lastMessage: '明天一起吃饭吗？',
        time: '10:30',
        unread: 2
      },
      {
        id: 2,
        name: '李四',
        avatar: 'https://img01.yzcdn.cn/vant/dog.jpeg',
        lastMessage: '项目文件已经发送给你了',
        time: '昨天',
        unread: 1
      },
      {
        id: 3,
        name: '王五',
        avatar: 'https://img01.yzcdn.cn/vant/rabbit.jpeg',
        lastMessage: '好的，没问题',
        time: '周三',
        unread: 0
      }
    ])
    const loading = ref(false)
    const finished = ref(false)

    const onLoad = () => {
      // 模拟加载更多数据
      setTimeout(() => {
        loading.value = false
      }, 1000)
    }

    return { messages, loading, finished, onLoad }
  }
}
</script>

<style scoped>
.message-page {
  padding-top: 46px;
  flex:1;
}
.avatar {
  width: 50px;
  height: 50px;
}
.unread-badge {
  display: inline-block;
  background-color: #f53f3f;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
.message-item {
  padding: 10px 16px;
}
</style>