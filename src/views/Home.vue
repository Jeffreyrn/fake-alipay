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
        <input type="text" placeholder="黄金" class="search-input" />
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
            <div class="program-icon">{{ item.icon }}</div>
            <div class="program-name">{{ item.name }}</div>
          </div>
        </div>
        <div class="program-row">
          <div class="program-item" v-for="item in programsRow2" :key="item.id">
            <div class="program-icon">{{ item.icon }}</div>
            <div class="program-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from 'vant'

export default {
  components: {
    VanIcon: Icon,
    VanButton: Button
  },
  setup() {
    // 小程序数据
    const programsRow1 = [
      { id: 1, name: '股票', icon: '股' },
      { id: 2, name: '市民中心', icon: '民' },
      { id: 3, name: '网商银行', icon: '银' },
      { id: 4, name: '铁路12306', icon: '铁' },
      { id: 5, name: '生活缴费', icon: '缴' }
    ]
    
    const programsRow2 = [
      { id: 6, name: '汇率换算', icon: '汇' },
      { id: 7, name: '飞猪旅行', icon: '旅' },
      { id: 8, name: '支付宝红包', icon: '红' },
      { id: 9, name: '我的小程序', icon: '我' },
      { id: 10, name: '更多', icon: '更' }
    ]
    
    return { programsRow1, programsRow2 }
  }
}
</script>

<style scoped>
/* 支付宝蓝色背景 */
.home {
  background-color: #1677FF;
  flex:1;
  padding-top: 46px;
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
  background-color: transparent;
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
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 15px 0;
  margin-top: 15px;
}
.program-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.program-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.program-icon {
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
}
.program-name {
  font-size: 12px;
  color: #333;
}
</style>