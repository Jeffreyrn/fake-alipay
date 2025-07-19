<template>
  <div class="add-certificate-page">
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="back-btn" @click="goBack"><van-icon name="arrow-left" class="module-more" size="20"/></div>
      <div class="title">添加证照</div>
      <div class="actions" @click="goHome">
        <span class="icon"><van-icon name="ellipsis" /></span>
        <span class="icon"><van-icon name="close" class="nav-icon close"  /></span>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content">
      <div class="section-title">请选择要添加的证照</div>

      <!-- 常用证件区域 -->
      <div class="cert-type-section">
        <div class="section-header">常用证件</div>
        <ul class="cert-list">
          <li v-for="item in commonCertificates" :key="item.id" class="cert-item" @click="selectCertificate(item)">
            <div class="cert-icon">
                <img :src="item.icon">
            </div>
            <div class="cert-name">{{ item.name }}</div>
            <div class="arrow-icon"><van-icon name="arrow" class="module-more" size="20"/></div>
          </li>
        </ul>
      </div>

      <!-- 交通行驶区域 -->
      <div class="cert-type-section">
        <div class="section-header">交通行驶</div>
        <ul class="cert-list">
          <li v-for="item in trafficCertificates" :key="item.id" class="cert-item" @click="selectCertificate(item)">
            <div class="cert-icon"><img :src="item.icon"></div>
            <div class="cert-name">{{ item.name }}</div>
            <div class="arrow-icon"><van-icon name="arrow" class="module-more" size="20"/></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import imgIcon1 from '../assets/list-icon/image1.png'
import imgIcon2 from '../assets/list-icon/image2.png'
import imgIcon3 from '../assets/list-icon/image3.png'
import imgIcon4 from '../assets/list-icon/image4.png'
import imgIcon5 from '../assets/list-icon/image5.png'
import imgIcon6 from '../assets/list-icon/image6.png'
import imgIcon7 from '../assets/list-icon/image7.png'
import imgIcon8 from '../assets/list-icon/image8.png'
import imgIcon9 from '../assets/list-icon/image9.png'
import imgIcon10 from '../assets/list-icon/image10.png'
import imgIcon11 from '../assets/list-icon/image11.png'
import imgIcon12 from '../assets/list-icon/image12.png'

// 返回上一页
const goBack = () => {
  router.go(-1)
}

const goHome = () => {
  router.replace('/home')
}
// 选择证照类型
const selectCertificate = (cert) => {
  // 模拟跳转到证照未找到页面
  router.push('/license-not-found')
}

// 常用证件数据
const commonCertificates = [
  { id: 1, name: '学位证书', icon: imgIcon1, color: '#4CAF50' },
  { id: 2, name: '学历证书', icon: imgIcon2, color: '#2196F3' },
  { id: 3, name: '中华人民共和国机动车驾驶证', icon: imgIcon3, color: '#9E9E9E' },
  { id: 4, name: '中华人民共和国居民身份证', icon: imgIcon4, color: '#2196F3' },
  { id: 5, name: '中华人民共和国护照', icon: imgIcon5, color: '#F44336' },
  { id: 6, name: '居民户口簿', icon: imgIcon6, color: '#2196F3' },
  { id: 17, name: '中华人民共和国机动车行驶证', icon: imgIcon7, color: '#2196F3' },
  { id: 7, name: '中华人民共和国社会保障卡', icon: imgIcon8, color: '#2196F3' },
  { id: 8, name: '居住证', icon: imgIcon9, color: '#795548' },
  { id: 9, name: '中华人民共和国结婚证', icon: imgIcon10, color: '#F44336' },
  { id: 10, name: '中华人民共和国离婚证', icon: imgIcon11, color: '#F44336' },
  { id: 11, name: '出生医学证明', icon: imgIcon12, color: '#4CAF50' }
]

// 交通行驶证件数据
const trafficCertificates = [
  { id: 12, name: '中华人民共和国机动车行驶证', icon: imgIcon3, color: '#2196F3' },
  { id: 13, name: '中华人民共和国道路运输证', icon: imgIcon4, color: '#2196F3' },
  { id: 14, name: '中华人民共和国网约车', icon: imgIcon7, color: '#2196F3' },
  { id: 15, name: '中华人民共和国道路运输证', icon: imgIcon3, color: '#2196F3' },
  { id: 16, name: '中华人民共和国道路从业资格证', icon: imgIcon4, color: '#2196F3' }
]
</script>

<style scoped>
/* 基础样式 */
.add-certificate-page {
  min-height: 100vh;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  background-color: white;
  position:sticky;
  top:0;
  z-index:100;
}

.back-btn {
  font-size: 20px;
  color: #333;
}

.title {
    flex:1;
    padding-left: 8px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}

.actions {
  display: flex;
  gap: 15px;
border:1px solid #eee;
    border-radius: 20px;
    padding:2px 10px;
}

.icon {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

/* 内容区域样式 */
.content {
  padding: 20px 0px;
}

.section-title {
    font-weight: bold;
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-left:16px;
  border-bottom:0.5px solid #ccc;
}

/* 证件类型区域样式 */
.cert-type-section {
  margin-bottom: 25px;
}

.section-header {
    
    font-weight: bold;
  font-size: 15px;
  margin: 10px 0;
  padding-left: 16px;
}

/* 证件列表样式 */
.cert-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cert-item {
    height:25px;
    overflow:hidden;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  background-color: white;
  border-bottom: 1px solid #f5f5f5;
}

.cert-icon {
  width: 45px;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-right: 10px;
  display: inline-block;
}
.cert-icon img{
    width: 100%;
    height:100%;
}

.cert-name {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.arrow-icon {
  color: #ccc;
  font-size: 18px;
}
</style>