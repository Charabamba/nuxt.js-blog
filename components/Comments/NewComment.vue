<template>
  <section class="new-comment">
    <div class="container">
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name"> Name: </AppInput>
        <AppTextarea v-model="comment.text">Text:</AppTextarea>
        <div class="controls">
          <AppButton class="page-button"> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: null,

      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          publish: false,
          ...this.comment,
        })
        .then(() => {
          this.message = "Submitted!";
          this.comment.name = "";
          this.comment.text = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
.new-comment form {
  max-width: 400px;
}
</style>
