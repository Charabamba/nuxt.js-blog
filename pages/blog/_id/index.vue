<template>
  <div class="wrapper-content">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>


<script>
import axios from "axios";
import post from "@/components/Blog/Post.vue";
import newComment from "@/components/Comments/NewComment.vue";
import comments from "@/components/Comments/Comments.vue";

export default {
  components: {
    post,
    newComment,
    comments,
  },
  head() {
    let title = this.post.title,
      descr = this.post.descr,
      img = `site.com${this.post.img}`,
      type = "article";
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: descr },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: "og:img", name: "og:img", content: img },
      ],
    };
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
      ),
    ]);

    let commentsArray = [],
      commentsArrayRes = [];
    Object.keys(comments.data).forEach((key) => {
      commentsArray.push(comments.data[key]);
    });
    for (let i = 0; i < commentsArray.length; i++) {
      if (
        commentsArray[i].postId === context.params.id &&
        commentsArray[i].publish === true
      ) {
        commentsArrayRes.push(commentsArray[i]);
      }
    }

    return {
      post: post.data,
      comments: commentsArrayRes,
    };
  },
};
</script>


<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 40px;
  img {
    max-width: 400px;
  }
  p {
    color: #999999;
  }
  .post-body {
    text-align: left;
  }
}
</style>
