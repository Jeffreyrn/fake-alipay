<template>
  <div class="mine">
    <van-nav-bar title="我的" fixed />
    <div class="user-info">
      <img src="../assets/21752892929_.pic_thumb.jpg" round />
      <div class="user-name">焕林</div>
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
.user-info img {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}
.user-name {
  font-size: 18px;
  font-weight: bold;
}
</style>