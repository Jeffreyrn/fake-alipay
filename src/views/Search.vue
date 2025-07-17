<template>
  <div class="search-page">
    <!-- 顶部导航栏 -->
    <div class="search-nav">
      <div class="nav-back" @click="goBack">
        <van-icon name="arrow-left" class="module-more" size="20"/>
      </div>
      <div class="search-container">
        <input
          type="text"
          v-model="searchKeyword"
          class="search-input"
          placeholder="请输入搜索内容"
          @input="handleSearch"
        />
        <button class="search-btn" @click="handleSearch">搜索</button>
      </div>
    </div>

    <!-- 条件显示搜索结果或排行榜 -->
    <div v-if="results.length > 0" class="search-results">
      <div class="result-item" v-for="(item, index) in results" :key="index" @click="handleClick(item)">
        <div class="result-icon">
          <van-icon name="search" class="module-more" color="#888" size="17"/>
        </div>
        <div class="result-name" v-html="item.name"></div>
      </div>
    </div>

    <!-- 搜索发现排行榜 - 无结果时显示 -->
    <div v-else class="ranking-container">
      <div class="ranking-header"><van-icon name="search" class="module-more" color="#1677FF" size="17"/>&nbsp;搜索发现</div>
      <div class="ranking-list">
        <div class="ranking-item" v-for="(item, index) in rankingList" :key="index">
          <div class="ranking-num">{{ index + 1 }}</div>
          <div class="ranking-content">
            <div class="ranking-name">{{ item.name }}</div>
            <div class="ranking-detail">{{ item.detail }}</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon, Button } from 'vant'
// 移除所有Vant组件导入

export default {
  components: {
    VanIcon: Icon,
    VanButton: Button
  },
  setup() {
    const router = useRouter()
    const searchKeyword = ref('')
    const results = ref([])

    // 搜索发现排行榜数据
    const rankingList = ref([
      { name: '优酷视频', detail: '热门剧集更新' },
      { name: '医保余额查询', detail: '实时到账' },
      { name: '中国黄金最新行情', detail: '金价上涨0.5%' },
      { name: '滴滴出行', detail: '打车立减5元' },
      { name: '深圳地铁', detail: '3号线延误' }
    ])

    // 返回上一页
    const goBack = () => {
      router.go(-1)
    }
    
    // 跳转到搜索页面
    const handleClick = () => {
      router.push('/government')
    }
    // 生成随机搜索结果
    const generateResults = () => {
      const countries = ['中国', '美国', '日本', '德国', '法国', '英国', '澳大利亚']
      const types = ['政务平台', '基金', '证券', '银行', '保险', '投资']
      const randomResults = []

      // 固定第一项为国家政务平台
      randomResults.push({ name: `<span style="color:#1677ff">国家</span>政务平台` })

      // 随机生成8个结果
      for (let i = 0; i < 8; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)]
        const type = types[Math.floor(Math.random() * types.length)]
        const randomNum = Math.floor(Math.random() * 1000)
        randomResults.push({
          name: `${country}<span style="color:#1677ff">国家</span>${type}${randomNum}`
        })
      }

      return randomResults
    }

    // 处理搜索
    const handleSearch = () => {
      results.value = generateResults()
    }

    return {
        handleClick,
        rankingList,
      searchKeyword,
      results,
      goBack,
      handleSearch
    }
  }
}
</script>

<style scoped>
/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.search-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 导航栏样式 */
.search-nav {
  background-color: #eee;
  height: 56px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-back {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.back-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

/* 搜索容器 */
.search-container {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
  flex: 1;
  max-width: 500px;
}

.search-input {
  border: none;
  outline: none;
  flex: 1;
  padding: 8px 5px;
  font-size: 14px;
}

.search-btn {
  color: #1677ff;
  background: white;
  border: none;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}

/* 搜索结果样式 */
.search-results {
  padding: 0;
}

.result-item {
  background: white;
  padding: 10px 20px;
  border-radius: 0;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.result-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.flag-icon {
  width: 100%;
  height: 100%;
}

.result-name {
  font-size: 15px;
  color: #333;
}
.result-name .blue{
  color: #1677FF;
}

/* 搜索发现排行榜样式 */
.ranking-container {
  background: linear-gradient(135deg, #d4dff3 0%, #fdfdfd 100%);
  border-radius: 12px;
  margin: 15px;
  padding: 15px 0;
}

.ranking-header {
  color: black;
  font-size: 16px;
  padding: 0 15px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.ranking-list {
  background-color: white;
  border-radius: 10px;
  margin: 0 10px;
  overflow: hidden;
}

.ranking-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #f5f5f5;
}

.ranking-item:last-child {
  border-bottom: none;
}

.ranking-num {
  width: 15px;
  height: 15px;
  background-color: #f19d64;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 15px;
}

.ranking-content {
  flex: 1;
  display: flex;
  align-items: center;
}

.ranking-name {
  font-size: 15px;
  color: #333;
  margin-bottom: 2px;
}

.ranking-detail {
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
  color: #999;
}
</style>