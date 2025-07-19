<template>
  <div class="camera-page">
    <!-- 顶部导航栏 -->
    <div class="navbar">
      <div class="back-btn" @click="goBack"><van-icon name="cross" /></div>
      <div class="title"></div>
      <div class="close-btn" @click="closePage"></div>
    </div>

    <!-- 提示文字 -->
    <div class="prompt-text">拿起手机，眨眨眼</div>

    <!-- 摄像头显示区域 -->
    <div class="camera-container">
      <div class="camera-circle">
        <video ref="videoElement" class="camera-feed" autoplay playsinline></video>
        <!-- 摄像头加载占位符 -->
        <div v-if="!isCameraActive" class="camera-placeholder">
          <div class="camera-icon"></div>
          <div class="loading-text">正在启动摄像头...</div>
        </div>
      </div>
    </div>

    <!-- 底部操作提示 -->
    <div class="action-tips"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const videoElement = ref(null);
const isCameraActive = ref(false);
let mediaStream = null;

// 返回上一页
const goBack = () => {
  router.go(-1);
};

// 关闭页面
const closePage = () => {
  router.push('/government');
};
const errorMessage = ref(''); 
// 启动摄像头
const startCamera = async () => {
  // Reset error message
  errorMessage.value = '';

  try {
    // Check browser compatibility
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      errorMessage.value = '您的浏览器不支持摄像头访问功能，请使用最新版Chrome、Firefox或Safari浏览器';
      console.error('摄像头访问失败1:', errorMessage.value);
      return;
    }

    // Request camera permission with fallback for older browsers
    const constraints = {
      video: {
        facingMode: 'user',
        width: { ideal: 400 },
        height: { ideal: 400 }
      },
      audio: false
    };

    // Try standard API first
    mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    // For older browsers that might have prefixes
    if (!mediaStream && navigator.webkitGetUserMedia) {
      mediaStream = await new Promise((resolve, reject) => {
        navigator.webkitGetUserMedia(constraints, resolve, reject);
      });
    }

    if (!mediaStream && navigator.mozGetUserMedia) {
      mediaStream = await new Promise((resolve, reject) => {
        navigator.mozGetUserMedia(constraints, resolve, reject);
      });
    }

    if (videoElement.value && mediaStream) {
      videoElement.value.srcObject = mediaStream;
      isCameraActive.value = true;
    }
  } catch (error) {
    console.error('摄像头访问失败:', error);
    // Handle specific error types
    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
      errorMessage.value = '摄像头权限被拒绝，请在浏览器设置中启用摄像头权限';
    } else if (error.name === 'NotFoundError') {
      errorMessage.value = '未检测到可用摄像头';
    } else if (error.name === 'NotSupportedError') {
      errorMessage.value = '当前环境不支持摄像头访问，请使用HTTPS或localhost';
    } else {
      errorMessage.value = `摄像头访问失败: ${error.message}`;
    }
    console.error('fail',errorMessage.value)
  }
};

// 停止摄像头
const stopCamera = () => {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    isCameraActive.value = false;
  }
};

// 组件挂载时启动摄像头
onMounted(async() => {
  await startCamera();
  setTimeout(()=>{
    router.push('/certificates')
  },2500)
});

// 组件卸载时停止摄像头
onUnmounted(() => {
  stopCamera();
});
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.back-btn, .close-btn {
  font-size: 20px;
  color: #333;
}

.title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
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
</style>