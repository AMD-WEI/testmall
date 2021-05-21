import { debounce } from "components/common/util/utils";
import BackTop from "components/content/backTop/BackTop.vue";
export const itemListenerMixin = {
  data() {
    return {
      itemListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500);
    //3.监听item中图片加载完成
    this.itemListener = () => {
      // this.scroll && this.$refs.scroll.refresh();
      this.refresh();
    };
    this.$bus.$on("imageLoadSuccess", this.itemListener);
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowbackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowbackTop = Math.abs(position.y) > 800;
    }
  }
}