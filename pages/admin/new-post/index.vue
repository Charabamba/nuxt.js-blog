<template>
  <div class="wrapper-content">
    <newPostForm @submit="onSubmit" />
  </div>
</template>


<script>
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: {
    newPostForm,
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      this.$store.dispatch("addPost", post).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
