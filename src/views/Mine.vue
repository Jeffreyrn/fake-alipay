<template>
  <div class="mine">
    <van-nav-bar title="我的" fixed />
    <div class="user-info">
      <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" round />
      <div class="user-name">支付宝用户</div>
    </div>
    <van-cell-group>
      <van-cell title="余额" value="98,765.43元" />
      <van-cell title="账单" />
      <van-cell title="设置" />
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar, Image, Cell, CellGroup } from 'vant'

export default {
  components: {
    VanNavBar: NavBar,
    VanImage: Image,
    VanCell: Cell,
    VanCellGroup: CellGroup
  }
}
</script>

<style scoped>
.mine {
  padding-top: 46px;
  flex: 1;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}
.van-image {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}
.user-name {
  font-size: 18px;
  font-weight: bold;
}
</style>