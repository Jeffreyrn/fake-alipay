<template>
  <div class="camera-page">
    <!-- 顶部导航栏 -->
    <div class="navbar">
      <div class="back-btn" @click="goBack"><van-icon name="arrow-left" class="module-more" size="20"/></div>
      <div class="title">人脸识别认证</div>
      <div class="close-btn" @click="closePage"><van-icon name="close" class="nav-icon close"  size="20" /></div>
    </div>

    <!-- 服务说明区域 -->
    <div class="service-info">
      <p class="service-desc">本服务仅限本人查询，请先完成人脸识别验证</p>
      <p class="tips">拍摄您本人人脸，请确保正对手机，光线充足</p>
      <p class="user-id">*潇、***********0071</p>
    </div>

    <!-- 人脸采集区域 -->
    <div class="face-scan-container">
      <div class="face-frame">
        <!-- 人脸轮廓示意图 -->
        <img src="../assets/avatar.png" alt="avatar" />
      </div>
    </div>
    <div class="bottom">
    <!-- 验证按钮 -->
    <button class="verify-btn" @click="startVerification">人脸识别验证</button>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
// 返回上一页
const goBack = () => {
  router.go(-1);
};

// 关闭页面
const closePage = () => {
  router.push('/government');
};
// ... existing code ...
const startVerification = () => {
  router.push('/camera')
};
// ... existing code ...
</script>

<style scoped>
.camera-page {
  padding-top: 44px; /* 导航栏高度 */
  height: 100vh;
  box-sizing: border-box;
  background-color: #fff;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: white;
  z-index: 10;
}

.back-btn, .close-btn {
  font-size: 20px;
  color: #333;
}

.title {
  font-size: 18px;
  font-weight: 500;
  color: #555;
  padding-left: 15px;
  flex:1;
}

.prompt-text {
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  color: #444;
}

.camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.camera-circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  position: relative;
  background-color: #000;
}

.camera-feed {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); /* 水平翻转，模拟镜子效果 */
}

.camera-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.camera-icon {
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 10px;
  margin-bottom: 15px;
  position: relative;
}

.camera-icon::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}

.loading-text {
  font-size: 14px;
}

.action-tips {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: #666;
}
/* 服务信息样式 */
.service-info {
  padding: 10px 25px;
  text-align: center;
  
}

.service-desc {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.5;
}

.tips {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  opacity: 0.7;
}

.user-id {
  font-size: 14px;
  color: #666;
  letter-spacing: 1px;
  opacity: 0.7;
}

/* 人脸采集区域样式 */
.face-scan-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0 40px;
}

.face-frame {
  width: 190px;
  position: relative;
  border: 1px solid rgba(0, 120, 255, 0.3);
  background-color: #f5f8ff;
}

/* 人脸轮廓示意图 */
.face-frame img {
  width: 100%;
}

.bottom{
    width:100%;
    display: flex;
    justify-content: center;
}
/* 验证按钮 */
.verify-btn {
  width: 80%;
  height: 48px;
  background-color: #1a80f5;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 120, 255, 0.3);
  cursor: pointer;
  margin: auto;
}

.verify-btn:active {
  background-color: #0066cc;
}
</style>