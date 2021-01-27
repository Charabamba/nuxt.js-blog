<template>
  <div class="post-preview__wrapper">
    <nuxt-link :to="getLink" class="post-preview">
      <div class="post__image-wrapper">
        <img :src="post.img" :alt="post.title" />
      </div>
      <div class="post-content">
        <h3 class="title">
          {{ post.title }}
        </h3>
        <p>
          {{ post.description }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getLink() {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`;
    },
  },
};
</script>


<style lang="scss">
.post-preview__wrapper {
  .post-preview {
    margin: 0 auto;
  }
}
.post-preview {
  text-align: center;
  transition: 0.2s;
  max-width: 300px;
  .post__image-wrapper {
    max-width: 300px;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .post-content {
    color: #2c2c2c;
  }
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
}
</style>
