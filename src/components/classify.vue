<template>
  <div class="classify">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item>
        <ul class="programa">
          <li v-for="(item, id1) in titlesA" :key="id1">
            <router-link to="#">
              <i class="iconfont" :class="[item.icon1]"></i>
              <span>{{ item.title1 }}</span>
            </router-link>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="programa">
          <li v-for="(item, id2) in titlesB" :key="id2">
            <router-link to="#">
              <i class="iconfont" :class="[item.icon2]"></i>
              <span>{{ item.title2 }}</span>
            </router-link>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="programa">
          <li v-for="(item, id3) in titlesC" :key="id3">
            <router-link to="#">
              <i class="iconfont" :class="[item.icon3]"></i>
              <span>{{ item.title3 }}</span>
            </router-link>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titlesA: [
        { id1: 1, icon1: "icon-meituanwaimai", title1: "外卖" },
        { id1: 2, icon1: "icon-meishi", title1: "美食" },
        { id1: 3, icon1: "icon-jiudian-copy", title1: "酒店/民宿" },
        { id1: 4, icon1: "icon-xiuxianyule", title1: "休闲/娱乐" },
        { id1: 5, icon1: "icon-dianyingyanchusaishi", title1: "电影/演出" },
        { id1: 6, icon1: "icon-dache_fill", title1: "打车" },
        { id1: 7, icon1: "icon-01maicaizuofan", title1: "买菜" },
        { id1: 8, icon1: "icon-qiandao1", title1: "红包/签到" },
        { id1: 9, icon1: "icon-borrow", title1: "借钱/信用" },
        { id1: 10, icon1: "icon-huochepiaojipiao", title1: "火车票/机票" },
        { id1: 11, icon1: "icon-youxuan", title1: "美团优选" },
        { id1: 12, icon1: "icon-guoshumiaomu", title1: "免费领水果" },
        { id1: 13, icon1: "icon-maiyaopin", title1: "买药" },
        { id1: 14, icon1: "icon-lifa", title1: "理发" },
        { id1: 15, icon1: "icon-chaoshi", title1: "超市/便利" },
      ],
      titlesB: [
        { id2: 16, icon2: "icon-xiyuhanzheng", title2: "洗浴/汗蒸" },
        { id2: 17, icon2: "icon-yuechi", title2: "密室" },
        { id2: 18, icon2: "icon-jiuba", title2: "酒吧" },
        { id2: 19, icon2: "icon-icon-test", title2: "宠物" },
        {
          id2: 20,
          icon2: "icon-weixingongyihuodongshanghu",
          title2: "美团公益",
        },
        { id2: 21, icon2: "icon-chongdianbao", title2: "充电宝" },
        { id2: 22, icon2: "icon-huzhu", title2: "美团互助" },
        { id2: 23, icon2: "icon-zu1", title2: "新奇体验" },
        { id2: 24, icon2: "icon-jiaofei", title2: "云缴费" },
        { id2: 25, icon2: "icon-meituanwaimai", title2: "无障碍外卖" },
        { id2: 26, icon2: "icon-bike", title2: "骑车" },
        { id2: 27, icon2: "icon-chenggongjiao", title2: "乘公交" },
        { id2: 28, icon2: "icon-shishigongjiao", title2: "实时公交" },
        { id2: 29, icon2: "icon-shucai", title2: "送菜上门" },
        { id2: 30, icon2: "icon-haohuozhuanchang", title2: "团好货" },
      ],
      titlesC: [
        { id3: 31, icon3: "icon-chongzhi", title3: "充值中心" },
        { id3: 32, icon3: "icon-fuli", title3: "福利" },
        { id3: 33, icon3: "icon-daigouyuan_huaban1", title3: "跑腿代购" },
        { id3: 34, icon3: "icon-yiliao", title3: "医疗/牙科" },
        { id3: 35, icon3: "icon-lvyou", title3: "景点/旅游" },
        { id3: 36, icon3: "icon-shenghuofuwu", title3: "生活服务" },
        { id3: 37, icon3: "icon-yiliaomeirong", title3: "医学美容" },
        { id3: 38, icon3: "icon-jianshen", title3: "健身/运动" },
        { id3: 39, icon3: "icon-xuexipeixun", title3: "学习培训" },
        { id3: 40, icon3: "icon-jiehun", title3: "结婚摄影" },
        { id3: 41, icon3: "icon-jiaju", title3: "家具/装修" },
        { id3: 42, icon3: "icon-qinzi", title3: "亲子乐园" },
        { id3: 43, icon3: "icon-maikefeng", title3: "KTV" },
        { id3: 44, icon3: "icon-zu", title3: "电玩游戏厅" },
        { id2: 45, icon3: "icon-jingdian", title3: "周边游" },
      ],
    };
  },

  methods: {},
};
</script>

<style  lang="less" scoped>
.classify {
  background-color: #f3f3f3;
}
.my-swipe .van-swipe-item {
  font-size: 20px;
  height: 25vh;
  line-height: 16vh;
  text-align: center;
}
.programa {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-self: start;
  align-items: center;
}
.programa li {
  width: 19%;
  display: flex;
  flex-direction: column;
  align-content: center;
  line-height: 0.75;
  word-break: normal;
  margin: 0% 1% 2% 0;
}
.programa i {
  font-size: 20px;
  display: block;
}
.programa li span {
  font-size: 0.2rem;
  align-content: center;
  font-family: serif;
}
/deep/ .van-swipe__indicators {
  bottom: 3px !important;
}
/deep/ .van-swipe__indicator {
  background-color: blue;
}
</style>
