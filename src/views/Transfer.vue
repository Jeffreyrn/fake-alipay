<template>
  <div class="finance-page">
    <!-- 头部搜索栏 -->
    <div class="search-container">
      <div class="search-bar">
        <van-icon name="search" class="search-icon" />
        <input type="text" placeholder="搜索理财产品" class="search-input" />
      </div>
    </div>

    <!-- 可滑动内容区 -->
    <div class="scroll-content">
      <!-- 资产概览 -->
      <div class="assets-overview">
        <div class="asset-item" :class="{ animate: isAnimated }">
          <div class="asset-label">总资产 (元)</div>
          <div class="asset-value">125,896.73</div>
        </div>
        <div class="asset-stats">
          <div class="stat-item" :class="{ animate: isAnimated }">
            <div class="stat-label">昨日收益</div>
            <div class="stat-value">+23.56</div>
          </div>
          <div class="stat-item" :class="{ animate: isAnimated }">
            <div class="stat-label">保障</div>
            <div class="stat-value">1</div>
          </div>
        </div>
      </div>

      <!-- 应用列表 -->
      <div class="finance-apps">
        <div class="app-row">
          <div class="app-item" v-for="app in appsRow1" :key="app.id" @click="handleAppClick(app.name)">
            <div class="app-icon">{{ app.icon }}</div>
            <div class="app-name">{{ app.name }}</div>
          </div>
        </div>
        <div class="app-row">
          <div class="app-item" v-for="app in appsRow2" :key="app.id" @click="handleAppClick(app.name)">
            <div class="app-icon">{{ app.icon }}</div>
            <div class="app-name">{{ app.name }}</div>
          </div>
        </div>
      </div>


      <!-- 指数行情 -->
      <div class="market-indices" :class="{ fadeIn: isAnimated }">
        <div class="section-title">市场指数</div>
        <div class="indices-list">
          <div class="index-item" v-for="index in indices" :key="index.id">
            <div class="index-name">{{ index.name }}</div>
            <div class="index-value">{{ index.value }}</div>
            <div class="index-change" :class="index.change > 0 ? 'rise' : 'fall'">{{ index.change }}%</div>
          </div>
        </div>
      </div>

      <!-- 今日行情 -->
      <div class="today-market" :class="{ fadeIn: isAnimated }">
        <div class="section-title">今日行情</div>
        <div class="market-opportunities">
          <div class="opportunity-item" v-for="item in opportunities" :key="item.id">
            <div class="opportunity-icon">{{ item.icon }}</div>
            <div class="opportunity-text">{{ item.text }}</div>
          </div>
        </div>
      </div>

      <!-- 基金列表 -->
      <div class="fund-list" :class="{ fadeIn: isAnimated }">
        <div class="section-title">推荐基金</div>
        <div class="fund-item" v-for="fund in funds" :key="fund.id">
          <div class="fund-info">
            <div class="fund-name">{{ fund.name }}</div>
            <div class="fund-code">{{ fund.code }}</div>
          </div>
          <div class="fund-rate" :class="fund.rate > 0 ? 'rise' : 'fall'">{{ fund.rate }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Icon, Toast } from 'vant'

export default {
  components: {
    VanIcon: Icon
  },
  setup() {
    const isAnimated = ref(false)

    // 应用列表数据
    const appsRow1 = [
      { id: 1, name: '余额宝', icon: '余' },
      { id: 2, name: '稳健理财', icon: '稳' },
      { id: 3, name: '基金', icon: '基' },
      { id: 4, name: '黄金', icon: '黄' },
      { id: 5, name: '股票', icon: '股' }
    ]

    const appsRow2 = [
      { id: 6, name: '帮你投', icon: '投' },
      { id: 7, name: '更多', icon: '更' }
    ]

    // 指数数据
    const indices = [
      { id: 1, name: '上证指数', value: '3,286.52', change: 0.32 },
      { id: 2, name: '深证成指', value: '11,131.79', change: -0.54 },
      { id: 3, name: '创业板指', value: '2,267.88', change: 1.21 }
    ]

    // 热点机会
    const opportunities = [
      { id: 1, icon: '📈', text: '新能源板块领涨' },
      { id: 2, icon: '💹', text: '科技股持续走强' },
      { id: 3, icon: '📊', text: '消费板块回暖' }
    ]

    // 基金列表
    const funds = [
      { id: 1, name: '易方达蓝筹精选混合', code: '005827', rate: 2.35 },
      { id: 2, name: '招商中证白酒指数', code: '161725', rate: -1.23 },
      { id: 3, name: '华夏能源革新股票', code: '003834', rate: 3.56 }
    ]

    // 应用点击事件
    const handleAppClick = (name) => {
      Toast(`打开${name}功能`)
    }

    // 页面加载动画
    onMounted(() => {
      // 触发入场动画
      setTimeout(() => {
        isAnimated.value = true
      }, 100)
    })

    return {
      isAnimated,
      appsRow1,
      appsRow2,
      indices,
      opportunities,
      funds,
      handleAppClick
    }
  }
}
</script>

<style scoped>
/* 基础样式 */
.finance-page {
  background-color: #1677FF;
  flex:1;
  color: white;
  padding-bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* 搜索栏 */
.search-container {
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #1677FF;
}
.search-bar {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.search-icon {
  margin-right: 8px;
  color: white;
}
.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
}
.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* 滚动内容区 */
.scroll-content {
  padding: 0 15px;
  overflow: scroll;
  flex:1;
  padding-bottom: 40px;
}

/* 资产概览 */
.assets-overview {
    display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
}
.asset-item {
  margin-bottom: 20px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s ease;
}
.asset-label {
    text-align: left;
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 5px;
}
.asset-value {
  font-size: 30px;
}
.asset-stats {
    padding-left: 25px;
    align-items: flex-start;
    flex:1;
  display: flex;
  justify-content: space-around;
}
.stat-item {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s ease 0.2s;
}
.stat-label {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 5px;
}
.stat-value {
  font-size: 30px;
  font-weight: 300;
}

/* 应用列表 */
.finance-apps {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
}
.app-row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
}
.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  color: #333;
}
.app-icon {
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
  color: #1677FF;
}
.app-name {
  font-size: 12px;
}

/* Banner */
.finance-banner {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 15px;
  opacity: 0;
  transition: opacity 0.5s ease 0.4s;
}
.banner-img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

/* 市场指数 */
.market-indices {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  color: #333;
  opacity: 0;
  transition: opacity 0.5s ease 0.6s;
}
.section-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #333;
}
.indices-list {
  display: flex;
  justify-content: space-between;
}
.index-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
}
.index-name {
  font-size: 14px;
  margin-bottom: 5px;
}
.index-value {
  font-size: 16px;
  font-weight: 500;
}
.index-change {
  font-size: 14px;
}
.rise {
  color: #f53f3f;
}
.fall {
  color: #00b42a;
}

/* 今日行情 */
.today-market {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  opacity: 0;
  transition: opacity 0.5s ease 0.8s;
}
.market-opportunities {
  display: flex;
  justify-content: space-between;
}
.opportunity-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.opportunity-icon {
  margin-right: 5px;
}

/* 基金列表 */
.fund-list {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  color: #333;
  opacity: 0;
  transition: opacity 0.5s ease 1s;
}
.fund-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
}
.fund-item:last-child {
  border-bottom: none;
}
.fund-info {
}
.fund-name {
  font-size: 15px;
  margin-bottom: 3px;
}
.fund-code {
  font-size: 12px;
  color: #999;
}
.fund-rate {
  font-size: 15px;
  font-weight: 500;
}

/* 动画类 */
.animate {
  transform: translateY(0);
  opacity: 1;
}
.fadeIn {
  opacity: 1;
}
</style>