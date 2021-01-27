<template>
  <section class="post">
    <div class="container">
      <div class="post-header">
        <div class="post__image-wrapper">
          <img :src="post.img" :alt="post.title" />
        </div>
        <h1 class="title">
          {{ post.title }}
        </h1>
        <p>
          {{ post.descr }}
        </p>
      </div>
      <div class="post-body">
        <p>
          {{ post.content }}
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post__image-wrapper {
  img {
    width: 100%;
  }
}
</style>
