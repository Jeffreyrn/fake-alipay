<template>
  <div class="license-not-found-page">
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="back-btn" @click="goBack">
        <van-icon name="arrow-left" class="module-more" size="20"/>
      </div>
      <div class="title">国家政务服务平台</div>
      <div class="actions">
        <span class="icon"><van-icon name="ellipsis" /></span>
        <span class="icon"><van-icon name="close" class="nav-icon close"  /></span>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content">
      <!-- 插图占位 -->
      <div class="illustration">
        <img src="../assets/nofind.png" alt="">
        <div class="document-icon"></div>
        <div class="magnifier-icon"></div>
      </div>

      <!-- 提示文本 -->
      <div class="text-content">
        <p>暂未在国家政务服务平台找到您的证照数据，您可联系地方证照颁发部门核实证照数据上传
        情况。或点击下方"我要纠错"进行证照缺失登记，等待处理。</p>
      </div>

      <!-- 操作链接 -->
      <div class="operation-links">
        <span class="link-item" @click="reportError">
            <van-icon name="todo-list-o" size="20"/>
            我要纠错
        </span>
        <span class="link-item" @click="viewErrorRecords">
            <van-icon name="orders-o" size="20" />
            纠错记录
        </span>
      </div>

      <!-- 添加按钮 -->
      <div class="add-btn" @click="addOtherLicense">添加其他证照</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 我要纠错
const reportError = () => {
  // 实现纠错功能
  alert('我要纠错功能将在这里实现')
}

// 查看纠错记录
const viewErrorRecords = () => {
  // 实现查看纠错记录功能
  alert('查看纠错记录功能将在这里实现')
}

// 添加其他证照
const addOtherLicense = () => {
  // 跳转到添加证照页面
  router.push('/add-certificate')
}
</script>

<style scoped>
/* 基础样式 */
.license-not-found-page {
  background-color: white;
  min-height: 100vh;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  background-color: white;
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
}

/* 内容区域样式 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 40px;
  text-align: center;
}

/* 插图样式 */
.illustration {
  width: 260px;
  position: relative;
  margin-bottom: 0px;
}
.illustration img{
  width: 100%;
}

/* 文本样式 */
.text-content {
  font-size: 16px;
  color: #777;
  line-height: 25px;
  margin-bottom: 30px;
  padding: 0 20px;
}
.text-content p{
    text-align: left;
}

/* 操作链接样式 */
.operation-links {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  margin-bottom: 40px;
}

.link-item {
  color: #b90f18;
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
}

.link-separator {
  color: #ccc;
}

/* 添加按钮样式 */
.add-btn {
  width: 100%;
  background-color: #cb111a;
  color: white;
  border: none;
  border-radius: 0;
  padding: 14px 0;
  font-size: 19px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1px;
}
</style>