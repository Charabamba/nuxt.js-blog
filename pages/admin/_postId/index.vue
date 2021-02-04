<template>
  <div class="wrapper-content">
    <div class="container">
      <AppButton class="page-button" @click="postDelete">
        Delete post!
      </AppButton>
    </div>
    <newPostForm :postEdit="post" @submit="onSubmit" />
  </div>
</template>


<script>
import axios from "axios";
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: {
    newPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`
      )
      .then((res) => {
        return {
          post: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => {
        context.error(e);
      });
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      console.log("Post Editing");
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    },
    postDelete() {
      let id = this.post.id;
      axios
        .delete(
          `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
        )
        .then((res) => {
          this.$store.dispatch("updatePosts").then(() => {
            this.$router.push("/admin");
          });
        });
    },
  },
};
</script>
