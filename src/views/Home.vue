<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <div class="top-bar">
      <!-- 城市选择 -->
      <div class="city-selector">
        <div class="city-name">深圳<van-icon name="arrow-down" /> </div>
        <div class="weather">多云 30°C</div>
      </div>
      
      <!-- 搜索框 -->
      <div class="search-box">
        <van-icon name="search" class="search-icon" />
        <input @click="goToSearch" type="text" placeholder="黄金" class="search-input" />
        <button class="search-btn">搜索</button>
      </div>
      
      <!-- 圆形加号按钮 -->
      <van-button class="add-btn" shape="circle" icon="plus" size="large" />
    </div>

    <!-- 主内容区 -->
    <div class="content">
      <!-- 四大功能模块 -->
      <div class="function-modules">
        <div class="module-item">
          <van-icon name="scan" class="module-icon" />
          <div class="module-name">扫一扫</div>
        </div>
        <div class="module-item">
          <van-icon name="gold-coin-o" class="module-icon" />
          <div class="module-name">收付款</div>
        </div>
        <div class="module-item">
          <van-icon name="guide-o" class="module-icon" />
          <div class="module-name">出行</div>
        </div>
        <div class="module-item">
          <van-icon name="idcard" class="module-icon" />
          <div class="module-name">卡包</div>
        </div>
      </div>

      <!-- 小程序区域 -->
      <div class="mini-programs">
        <div class="program-row">
          <div class="program-item" v-for="item in programsRow1" :key="item.id">
            <div class="program-icon"> 
              <img v-if="item.url" :src="item.url" alt=""> 
              <span v-else>{{ item.icon }}</span>
            </div>
            <div class="program-name">{{ item.name }}</div>
          </div>
        </div>
        <div class="program-row">
          <div class="program-item" v-for="item in programsRow2" :key="item.id">
            <div class="program-icon">
              
              <img v-if="item.url" :src="item.url" alt=""> 
              <span v-else>{{ item.icon }}</span>
            </div>
            <div class="program-name">{{ item.name }}</div>
          </div>
        </div>
        <!-- 最近消息模块 -->
      <div class="recent-messages">
        <div class="messages-header">
          <div class="header-title">最近消息</div>
          <div class="header-count">11条最新消息<span class="red-dot"></span><van-icon name="arrow" /></div>
        </div>
        <div class="messages-list">
          <div class="message-item">
            <img src="../assets/jizhang.svg" class="message-icon" alt="">
            <div class="message-content">
              <div class="message-title">记账本</div>
              <div class="message-desc">你的记账日报已更新</div>
            </div>
            <div class="message-time">1分钟前</div>
          </div>
          <div class="message-item">
            <img src="../assets/mayi.svg" class="message-icon" alt="">
            <div class="message-content">
              <div class="message-title">蚂蚁森林</div>
              <div class="message-desc">你有即将过期的绿色能量</div>
            </div>
            <div class="message-time">3小时前</div>
          </div>
        </div>
      </div>
      <!-- 财富生活模块 -->
      <div class="finance-module">
        <div class="module-header">
          <div class="module-title">
            <img  src="../assets/rmb.svg" alt=""> 财富生活</div>
          <van-icon name="arrow" class="module-more" />
        </div>
        <div class="text-carousel">
          <div class="carousel-wrapper" ref="wealthWrapper">
            <div class="carousel-item" v-for="(item, index) in wealthMessages" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <!-- 理财成长助手模块 -->
            <!-- 理财成长助手模块 -->
      <div class="finance-module">
        <div class="module-header">
          <div class="module-title">
            <img src="../assets/rmb.svg" alt=""> 
            理财成长助手</div>
          <van-icon name="arrow" class="module-more" />
        </div>
        <div class="finance-cards">
          <div class="finance-card gold-card">
            <div class="card-icon"> <img src="../assets/gold.svg" alt=""></div>
            <div class="card-title">黄金价格</div>
            <div class="card-value">789.5元/克</div>
            <div class="card-change">↑0.2%</div>
          </div>
          <div class="row">
            <div class="finance-card profit-card">
            <div class="card-icon"><van-icon name="gold-coin" size="28" /></div>
            <div class="card-title">收益排行</div>
            <div class="card-value">+128.5元</div>
          </div>
          <div class="finance-card new-card">
            <div class="card-icon"> <van-icon name="new-arrival" size="35"/></div>
            
            <div class="card-desc">黄金积存</div>
            <div class="card-tag">1元起投</div>
          </div>
          </div>
          
        </div>
      </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from 'vant'
import { useRouter } from 'vue-router'

import { ref, onMounted, watch } from 'vue'
import feizhu from '../assets/feizhu.svg'
import didi from '../assets/didi.svg'
import moreicon from '../assets/more.svg'
import hongbao from '../assets/hongbao.svg'
import gaode from '../assets/gaode.svg'
import jiaofei from '../assets/jiaofei.svg'
import wangshang from '../assets/wangshang.svg'
import gupiao from '../assets/gupiao.svg'
import shimin from '../assets/shimin.svg'
import huilv from '../assets/huilv.svg'
export default {
  components: {
    VanIcon: Icon,
    VanButton: Button
  },
  setup() {
    // 小程序数据
    const programsRow1 = [
      { id: 1, name: '股票', url: gupiao },
      { id: 2, name: '市民中心', url: shimin },
      { id: 3, name: '网商银行', url: wangshang },
      { id: 4, name: '高德打车', url: gaode },
      { id: 5, name: '生活缴费', url: jiaofei }
    ]
    
    const programsRow2 = [
      { id: 6, name: '汇率换算', url: huilv },
      { id: 7, name: '飞猪旅行', url: feizhu },
      { id: 8, name: '红包', url: hongbao },
      { id: 9, name: '滴滴打车', url:didi },
      { id: 10, name: '更多', url: moreicon }
    ]
    // 财富生活轮播消息
    const wealthMessages = [
      '国内金价: 786.52元/克 涨0.23%',
      '攒金全新上线，首次购买享额外5%收益',
      '黄金基金近7日年化3.21%',
      '今日10:00 限量黄金券发放'
    ]

    // 理财成长助手轮播消息
    const growthMessages = [
      '收益第一名公布: 张某某 本月收益12.5%',
      '进阶理财本月收益: 4.86%',
      '昨日最赚: 科技主题基金 涨3.2%',
      '交易记录: 您的定投已成功扣款'
    ]

    // 轮播元素引用
    const wealthWrapper = ref(null)
    const growthWrapper = ref(null)

    // 文字轮播动画
    const startCarousel = (wrapper, duration = 5000) => {
      if (!wrapper.value) return

      const container = wrapper.value
      const items = container.children
      if (items.length <= 1) return

      // 复制第一组元素用于无缝滚动
      const clone = container.innerHTML
      container.innerHTML += clone

      let index = 0
      const itemHeight = items[0].offsetHeight
      const totalHeight = itemHeight * items.length

      const animate = () => {
        index++
        container.style.transition = 'transform 0.5s ease'
        container.style.transform = `translateY(-${index * itemHeight}px)`

        // 滚动到复制元素时重置
        if (index >= items.length / 2) {
          setTimeout(() => {
            container.style.transition = 'none'
            container.style.transform = 'translateY(0)'
            index = 0
          }, 500)
        }
      }

      // 启动轮播定时器
      const timer = setInterval(animate, duration)

      // 清理函数
      return () => clearInterval(timer)
    }

    // 组件挂载后启动轮播
    onMounted(() => {
      const wealthCleanup = startCarousel(wealthWrapper)
      const growthCleanup = startCarousel(growthWrapper, 6000)

      // 组件卸载时清理定时器
      return () => {
        wealthCleanup && wealthCleanup()
        growthCleanup && growthCleanup()
      }
    })
    const router = useRouter()
    // ... 现有代码 ...

    // 跳转到搜索页面
    const goToSearch = () => {
      router.push('/search')
    }
    return { 
      goToSearch,
      // ... existing returns ...
      programsRow1,
      programsRow2,
      wealthMessages,
      growthMessages,
      wealthWrapper,
      growthWrapper
    }
  }
}
</script>

<style scoped>
/* 支付宝蓝色背景 */
.home {
  background-color: #1677FF;
  flex:1;
  padding-top: 46px;
  overflow: scroll;
}

/* 顶部栏样式 */
.top-bar {
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #1677FF;
  z-index: 10;
}

/* 城市选择样式 */
.city-selector {
  width:40px;
  color: white;
  margin-right: 15px;
  overflow: hidden;
}
.city-name {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}
.weather {
  width:45px;
  font-size: 10px;
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 搜索框样式 */
.search-box {
  flex: 1;
  background-color: white;
  border-radius: 20px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 15px;

  margin-right: 5px;
}
.search-icon {
  color: #999;
  margin-right: 5px;
}
.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
}
.search-btn {
  font-weight: bold;
  white-space: nowrap;
  border: none;
  background: transparent;
  color: #1677FF;
  font-size: 13px;
  border-left: #1677FF 1px solid;
  padding-left: 10px;
}

/* 加号按钮 */
.add-btn {
  width:30px;
  height:28px;
  margin-left: 0px;
  background-color: transparent !important;
  border: 1px solid white !important;
  color: white !important;
  border-radius: 100%;
}

/* 内容区域 */
.content {
  flex:1;
  overflow: scroll;
  padding: 0;
}

/* 功能模块 */
.function-modules {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.module-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.module-icon {
  font-size: 32px;
  margin-bottom: 8px;
}
.module-name {
  font-size: 14px;
}

/* 小程序区域 */
.mini-programs {
  background-color: #fefefe;
  border-radius: 12px 12px 0 0;
  padding: 15px 0;
  margin-top: 15px;
}
.program-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.program-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.program-icon {
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
}
.program-icon img{
  width: 100%;
  height: 100%;
}
.program-name {
  font-size: 12px;
  color: #333;
}
/* 最近消息模块样式 */
.recent-messages {
  background-color: white;
  border-radius: 12px;
  margin: 15px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 10px;
}

.header-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.header-count {
  font-size: 12px;
  color: #444;
  display: flex;
  align-items: center;
  gap: 4px;
}

.red-dot {
  width: 10px;
  height: 10px;
  background-color: #FF3B30;
  border-radius: 50%;
  display: inline-block;
}


.messages-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.message-icon {
  width: 18px;
  height: 18px;
  font-size: 20px;
  color: #1677FF;
  background-color: #f0f7ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-content {
  display: flex;
  align-items: center;
  flex: 1;
}

.message-title {
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 2px;
}

.message-desc {
  margin-left: 5px;
  font-size: 13px;
  line-height: 14px;
  color: #999;
}

.message-time {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

/* 理财模块通用样式 */
.finance-module {
  background-color: white;
  border-radius: 12px;
  margin: 15px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.module-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
}
.module-title img{
  width: 18px;
  margin-right: 3px;
}
.module-more {
  color: #999;
  font-size: 16px;
}

/* 文字轮播样式 */
.text-carousel {
  height: 40px;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper {
  position: absolute;
  width: 100%;
}

.carousel-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 添加进入动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.finance-module {
  animation: fadeIn 0.5s ease-out;
}

/* 为两个模块设置不同的动画延迟 */
.finance-module:nth-of-type(2) {
  animation-delay: 0.2s;
}
.finance-cards {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  height:200px;
}
.finance-cards .row{
  flex:1;
  margin-left:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.finance-card {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: white;
  border-radius: 12px;
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
}

.finance-cards .row .finance-card{
  
  width: 100%;
  display: flex;
  padding: 5px;
}
.gold-card .card-icon { color: #FFD700; }
.profit-card .card-icon { color: #00B42A; }
.new-card .card-icon { color: #FF7D00; }
.card-icon img{
  width:50px;
  height:50px;
}
.card-title {
  font-size: 14px;
  margin: 8px 0;
}

.card-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.card-change {
  color: #00B42A;
  font-size: 12px;
  margin-top: 5px;
}

.card-tag {
  display: inline-block;
  background: #FFF0E6;
  color: #FF7D00;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-top: 5px;
}
</style>