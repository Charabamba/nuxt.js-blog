<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview
          :admin="admin"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from "@/components/Blog/PostPreview.vue";
export default {
  components: {
    postPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss">
.posts__wrapper {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
@media (max-width: 1350px) {
  .posts__wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1000px) {
  .posts__wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 670px) {
  .posts__wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
