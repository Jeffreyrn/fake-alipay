<template>
  <div class="certificates-page">
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="back-btn" @click="goBack"><van-icon name="arrow-left" class="module-more" size="20"/><div class="title">我的证照</div></div>
      
      <div class="actions" @click="goBack">
        <span class="icon"><van-icon name="ellipsis" /></span>
        <span class="icon"><van-icon name="close" class="nav-icon close"  /></span>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content">
      <!-- 插图占位 -->
      <div class="illustration">
        <img src="../assets/31752735753_.pic.jpg">
        <div class="phone-illustration"></div>
        <div class="person-illustration"></div>
      </div>

      <!-- 提示文本 -->
      <div class="text-content">
        <p>您暂未添加电子证照，点击下方<br><span class="highlight">"添加证照"</span>添加</p>
        <p></p>
      </div>
    </div>

    <!-- 添加按钮 -->
    <div class="add-btn" @click="addCertificate">添加证照</div>
  </div>
</template>

<script setup>
import { Icon, Button } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 添加证照按钮点击事件
const addCertificate = () => {
  // 这里可以添加实际添加证照的逻辑
  alert('添加证照功能将在这里实现')
}
</script>

<style scoped>
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
  display:flex;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 400;
  color: #333;
  padding: 0 10px;
}

.actions {
  display: flex;
  gap: 15px;
  border: 0.5px solid rgba(0,0,0,0.1);
  border-radius: 18px;
  padding:5px 15px;
}
.actions .close{
    padding-left: 15px;
    border-left: 1px solid rgba(200,200,200,0.4);
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
  justify-content: center;
  min-height: calc(100vh - 180px);
  padding: 20px;
  text-align: center;
}

/* 插图占位样式 */
.illustration {
  width: 90%;
  height: 200px;
  margin-bottom: 30px;
  position: relative;
}

.illustration img{
    width: 100%;
}
/* 文本样式 */
.text-content {
  font-size: 16px;
  color: #666;
  opacity:0.8;
  line-height: 1.8;
}



/* 添加按钮样式 */
.add-btn {
  background-color: #c30407;
  color: white;
  border: none;
  border-radius: 0px;
  padding: 14px 0;
  margin: 0 16px 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-align:center;
}
</style>