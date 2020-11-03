<template>
  <div class="bottom">
    <div class="navtab" id="navtab">
      <ul>
        <router-link to="/index" tag="li">
          <div class="index">
            <img src="@/images/index-active.png" v-if="active === 'index'" />
            <img src="@/images/index.png" v-else />
          </div>
          <span>首页</span>
        </router-link>

        <router-link to="/order" tag="li">
          <div class="order">
            <img src="@/images/tu1.jpg" v-if="active === 'order'" />
            <img src="@/images/tu2.jpg" v-else />
          </div>
          <span>发现</span>
        </router-link>

        <router-link to="/information" tag="li">
          <div class="order">
            <img
              src="@/images/order-active.png"
              v-if="active === 'information'"
            />
            <img src="@/images/order.png" v-else />
          </div>
          <span>消息</span>
        </router-link>

        <router-link to="/home" tag="li">
          <div class="home">
            <img src="@/images/home-active.png" v-if="active === 'home'" />
            <img src="@/images/home.png" v-else />
          </div>
          <span>我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 当前状态
      active: "index",
    };
  },
  mounted() {
    this.active = this.$route.path.slice(1);
  },
  methods: {},
  components: {},
};
</script>

<style  lang="less">
#navtab {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999; //保证底部在商家列表上层 当点击综合排序时  不会被遮罩挡住
  span {
    font-size: 0.3rem;
  }
  ul {
    display: flex;
    background: rgb(250, 250, 250);
    li {
      display: flex;
      flex-direction: column;
      align-content: center;
      flex: 1;
      margin-bottom: 1%;
      margin-left: 3%;
      line-height: 0.75;
      .index,
      .home,
      .order {
        @include px2rem(width, 60);
        margin: 0.1rem auto;
        img {
          width: 70%;
        }
      }
      span {
        font-size: 0.2rem;
        margin-left: 28%;
        margin-top: 4%;
        align-content: center;
      }
    }
  }
}
</style>
