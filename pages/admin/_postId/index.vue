<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
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
  },
};
</script>
