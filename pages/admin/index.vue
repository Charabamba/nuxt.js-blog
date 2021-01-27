<template>
  <div class="wrapper-content">
    <div class="container">
      <div>
        <PostsList :posts="postsLoaded" :admin="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>

