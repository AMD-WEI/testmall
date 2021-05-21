<template>
  <div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title flex">
      <div><b>评价</b></div>
      <div>更多</div>
    </div>
    <div v-for="(item, index) in commentInfo" :key="index" class="comment">
      <div class="comment-user-info">
        <div><img :src="item.user.avatar" alt="" class="avatar" /></div>
        <div class="name-time">
          <div>
            <b>{{ item.user.uname }}</b>
          </div>
          <div class="comment-time">{{ item.created | showDate }}</div>
        </div>
      </div>
      <div class="comment-text">{{ item.content }}</div>
      <div class="flex">
        <div
          class="comment-info-images"
          v-for="(item, index) in item.images"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="comment-goods-info">
        <span>{{ item.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "components/common/util/utils";
export default {
  name: "DetailCommmentInfo",
  components: {},
  props: {
    commentInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return dateFormat(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.comment {
  border-bottom: 0.2rem solid #ececec;
}
.comment-info-wrap {
  padding: 0 1rem;
  font-size: 1.4rem;
}
.comment-title {
  justify-content: space-between;
  border-bottom: 0.2rem solid #ececec;
  padding: 1rem 1rem;
  margin-top: 1rem;
}
.comment-user-info {
  padding: 2rem 0;
  position: relative;
}
.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  margin-right: 1.2rem;
  vertical-align: middle;
}
.name-time {
  position: absolute;
  margin: -3.5rem 5rem 0;
}
.comment-text {
  line-height: 2rem;
  font-size: 1.2rem;
}
.comment-goods-info {
  color: #999;
  margin: 2rem 0;
  font-size: 1.1rem;
}
.comment-time {
  font-size: 1.1rem;
  margin-top: 0.6rem;
  color: #999;
}
.comment-info-images img {
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
  object-fit: cover;
}
</style>
