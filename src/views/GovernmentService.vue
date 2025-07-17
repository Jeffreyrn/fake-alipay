<template>
  <div class="government-service">
    <!-- 顶部导航栏 -->
    <div class="top-nav" style="z-index:99; color: white; padding: 16px; display: flex; justify-content: space-between; align-items: center;">
      <div class="logo-title">
        <img src="https://gjzwfw.www.gov.cn/picture/0/2211301739524903471.png" alt="Logo" class="logo" style="width: 24px; height: 24px; margin-right: 8px; vertical-align: middle;">
        <span style="font-size: 18px; font-weight: bold;">国家政务服务平台</span>
      </div>
      <div class="nav-actions" @click="goBack">
        <van-icon name="guide-o" class="nav-icon geo"  /> <!-- 分享图标预留 -->
        <van-icon name="close" class="nav-icon close"  /> <!-- 关闭图标预留 -->
      </div>
    </div>

    <!-- 省份选择和用户信息 -->
    <div class="user-bar" style="padding: 12px 16px;  color: white;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="province-selector" style="display: flex; align-items: center;">
          <span>广东省</span>
          <span style="margin-left: 4px;">▼</span>
        </div>
        <div class="user-info" style="display: flex; align-items: center;">
          <img src="../assets/vue.svg" alt="Avatar" class="avatar" style="width: 28px; height: 28px; border-radius: 50%; margin-right: 8px;">
          <span>Hi, *潇</span>
        </div>
      </div>
    </div>

    <!-- 城市背景图 -->
    <div class="city-bg" style="height: 100px; display: flex; align-items: flex-end;">
        <img style="width:90%;margin:0 7% 30px 2%" src="../assets/city.svg" alt="">
      <!-- 搜索框 -->
      <div class="search-container">&nbsp;&nbsp;
        <van-icon name="search" class="nav-icon"  />
        <input type="text" placeholder="成绩查询" style="flex: 1; border: none; outline: none; padding: 0 8px;">
        <button class="search-btn" >搜索</button>
      </div>
    </div>

    <!-- 医保服务专区轮播 -->
    <div class="service-carousel" style="margin: 16px; background: linear-gradient(to right, #2ECC71 0%, #27AE60 100%); border-radius: 12px; padding: 16px; color: white;">
      <div class="carousel-content" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">医保服务专区</div>
          <div style="font-size: 14px; opacity: 0.9;">医保更便利，保障更有力</div>
          <div class="carousel-dots" style="margin-top: 12px;font-size: 10px;letter-spacing: 5px;">●●●●●</div>
        </div>
        <div class="service-icon" style="background: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
          <img src="../assets/药箱.svg" style="width: 100%" alt=""> <!-- 医保图标预留 -->
        </div>
      </div>
    </div>

    <!-- 实用服务提示 -->
    <div class="utility-tip" style="display:flex;align-items: center; margin: 0 16px 16px; background: #fff;  padding: 12px; border-radius: 4px;box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);">
      <div style="font-weight: bold; color: #E63946; margin-bottom: 4px;">实用<br>服务</div>
      <div style="padding-left:20px;color: #111; font-size: 15px;">高考录取进行中，来这里一键查询<br>录取结果~</div>
    </div>

    <!-- 热门服务标签页 -->
    <div class="service-tabs" style="margin: 0 16px;">
      <div class="tabs-header" style="display: flex; border-bottom: 1px solid #E5E7EB;">
        <div class="tab active" style="padding: 12px 0; margin-right: 24px; font-weight: bold; color: #E63946; border-bottom: 2px solid #E63946;">热门服务</div>
        <div class="tab" style="padding: 12px 0; color: #6B7280;">我的定制</div>
      </div>

      <!-- 服务图标网格 -->
      <div class="services-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 16px 0;">
        <!-- 服务项1 - 医保电子凭证 -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" background: #D1FAE5; border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/医保电子凭证备份.svg" alt=""> <!-- 医保图标预留 -->
          </div>
          <div style="font-size: 12px;">医保电子凭证</div>
        </div>

        <!-- 服务项2 - 电子社保卡 -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" background: #DBEAFE; border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/shebao.svg" alt="">
          </div>
          <div style="font-size: 12px;">电子社保卡</div>
        </div>

        <!-- 服务项3 - 公积金账户查询 -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/公积金.svg" alt=""> <!-- 公积金图标预留 -->
          </div>
          <div style="font-size: 12px;">公积金账户信息查询</div>
        </div>

        <!-- 服务项4 - 全国互联网账号 -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="  border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/一网通查.svg" alt=""> <!-- 账号图标预留 -->
          </div>
          <div style="font-size: 12px;">全国互联网账号一证通查</div>
        </div>

        <!-- 更多服务项... -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="  border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/社保_社保公积金查询.svg" alt=""> <!-- 公积金查询图标预留 -->
          </div>
          <div style="font-size: 12px;">公积金贷款查询</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/献血.svg" alt=""> <!-- 献血证图标预留 -->
          </div>
          <div style="font-size: 12px;">电子无偿献血证</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="  border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/icon-灾害预警-选中.svg" alt=""> <!-- 灾害预警图标预留 -->
          </div>
          <div style="font-size: 12px;">气象灾害预警</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="  border-radius: 100%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;overflow: hidden;">
             <img src="../assets/协同备案.svg" alt=""><!-- 异地就医图标预留 -->
          </div>
          <div style="font-size: 12px;">跨省异地就医备案</div>
        </div>
        <!-- 更多服务项... -->
        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img src="../assets/教师资格证-copy.svg" alt=""> <!-- 公积金查询图标预留 -->
          </div>
          <div style="font-size: 12px;">中小学教师资格考试</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img style="color: #F97316; font-size: 20px;" src="../assets/普通话水平.svg" alt=""> <!-- 普通话水平测试图标预留 -->
          </div>
          <div style="font-size: 12px;">普通话水平测试</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style="  border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img style="color: #0D9488; font-size: 20px;" src="../assets/中招录取查询.svg" alt=""> <!-- 灾害预警图标预留 -->
          </div>
          <div style="font-size: 12px;">高考录取查询</div>
        </div>

        <div class="service-item" style="text-align: center;">
          <div class="service-icon" style=" border-radius: 50%; margin: 0 auto 8px; display: flex; justify-content: center; align-items: center;">
            <img style="color: #0D9488; font-size: 20px;" src="../assets/职业资格证书查询.svg" alt=""> <!-- 职业资格证书查询图标预留 -->
          </div>
          <div style="font-size: 12px;">职业资格证书查询</div>
        </div>
      </div>
    </div>

    <!-- 新增内容：顶部通知栏 -->
    <div class="notification-bar" style="display: flex; align-items: center; padding: 12px 16px; background: white; margin: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <img src="https://gjzwfw.www.gov.cn/picture/0/2211301739524903471.png" alt="Logo" style="width: 40px; height: 40px; margin-right: 12px;">
      <div style="flex: 1;">
        <div style="display: flex; align-items: center;">
          <span style="font-weight: bold; margin-right: 8px;">国家政务服务平台</span>
          <span style="background: #fff; color: #444; font-size: 12px; padding: 2px 4px; border-radius: 4px;border:1px solid #eee;">生活号</span>
        </div>
        <div style="font-size: 14px; color: #666; margin-top: 4px;">快来看我的最新动态</div>
      </div>
      <button style="color: #165DFF; background: white; border: 1px solid #165DFF; padding: 6px 12px; border-radius: 4px; font-size: 14px;">查看</button>
    </div>

    <!-- 新增内容：我的证照区域 -->
    <div style="margin: 0 16px 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 16px; font-weight: bold;">我的证照</div>
        <div style="color: #dd2d3c; font-size: 14px; display: flex; align-items: center;" @click="goNext">
          全部 <van-icon name="arrow" class="module-more"/>
        </div>
      </div>

      <!-- 社保卡卡片 -->
      <div class="card-sb-bg">
        <div style="display: flex; align-items: center;">
          <div style="width: 50px; height: 50px; background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 16px;">
            <img src="../assets/shebao.svg" style="color: #165DFF; width: 100%;"/> <!-- 社保卡图标预留 -->
          </div>
          <div style="flex: 1;">
            <div style="font-size: 18px; font-weight: bold;">社会保障卡</div>
            <div style="font-size: 14px; opacity: 0.9; margin-top: 4px;">添加后快速查看和使用此卡</div>
          </div>
          <div style="background: rgba(255,255,255,0.3); padding: 4px 10px; border-radius: 12px; font-size: 14px;">未关联</div>
        </div>
        <div style="height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; margin-top: 16px; width: 100%;"></div>
      </div>
    </div>

    <!-- 新增内容：专区区域 -->
    <div style="margin: 0 16px 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 16px; font-weight: bold;">专区</div>
        <div style="color: #dd2d3c; font-size: 14px; display: flex; align-items: center;">
          全部 <van-icon name="arrow" class="module-more"/>
        </div>
      </div>

      <!-- 专区卡片网格 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
        <!-- 生育服务专区 -->
        <div style="background: linear-gradient(135deg, #FF7A45, #FF5252); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">生育服务专区</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">❤️</span> <!-- 生育服务图标预留 -->
            </div>
          </div>
        </div>

        <!-- 医保服务专区 -->
        <div style="background: linear-gradient(135deg, #00B42A, #00A86B); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">医保服务专区</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">🏥</span> <!-- 医保服务图标预留 -->
            </div>
          </div>
        </div>

        <!-- 药品服务专区 -->
        <div style="background: linear-gradient(135deg, #00B42A, #00A86B); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">药品服务专区</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">💊</span> <!-- 药品服务图标预留 -->
            </div>
          </div>
        </div>

        <!-- 经营主体服务政策库 -->
        <div style="background: linear-gradient(135deg, #E63946, #C32F27); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">经营主体服务政策库</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">📚</span> <!-- 政策库图标预留 -->
            </div>
          </div>
        </div>

        <!-- 老年人办事服务专区 -->
        <div style="background: linear-gradient(135deg, #FF7A45, #FF5252); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">老年人办事服务专区</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">👴</span> <!-- 老年人服务图标预留 -->
            </div>
          </div>
        </div>

        <!-- 教育考试服务专区 -->
        <div style="background: linear-gradient(135deg, #165DFF, #0E42D2); border-radius: 12px; padding: 16px; color: white;">
          <div style="font-size: 16px; font-weight: bold; margin-bottom: 16px;">教育考试服务专区</div>
          <div style="display: flex; justify-content: flex-end;">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <span style="font-size: 20px;">🎓</span> <!-- 教育考试图标预留 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 页面逻辑可在此添加
</script>
<script setup>
import { Icon, Button } from 'vant'
// ... 现有代码 ...
import { useRouter } from 'vue-router'
const router = useRouter()

// 添加返回上一页的方法
const goBack = () => {
  router.go(-2)
}

const goNext = () => {
  router.push('/certificates')
}
</script>

<style scoped>
.top-nav{
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.government-service{
    padding-top:50px;
    flex:1;
    overflow:scroll;
}
/* 可添加额外样式 */
.icon-btn {
  margin-left: 16px;
  cursor: pointer;
}
.top-nav,.user-bar{
    background-color: #e02838;
}
.card-sb-bg{
background: linear-gradient(135deg,  #a8cbf4,#6eacf7); border-radius: 12px; padding: 20px; color: white;
}
.city-bg{
    background-color: #dd2d3c;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    position:relative;
}
.nav-actions{
    background:rgba(0,0,0,0.3);
    border-radius: 20px;
    padding:4px 5px;
}
.nav-actions .nav-icon{
    padding: 0 10px;
}
.nav-actions .close{
    border-left: 1px solid rgba(200,200,200,0.4);
}
.geo {
    animation: fadeInOut 1s ease-in-out infinite; /* 添加这行实现动画 */
}
.search-container{
    position:absolute;
    left:3%;
    bottom:-25px;
width: 90%; margin: 0 auto 16px; 
background: white; 
border-radius: 8px; display: flex; padding: 8px;
align-items: center;
box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);
}
.search-btn{
color: #E63946; background: white; border: none; padding: 6px 12px; 
border-left:1px #E63946 solid;
}
/* 添加忽隐忽现动画 */
@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.service-item{
  margin-bottom: 5px;
}
.service-icon {
  width: 40px; 
  height: 40px;
  padding: 5px;
}
.service-icon img {
  width: 100%;
}
</style>