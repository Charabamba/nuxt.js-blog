<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title"> Title </AppInput>
        <AppInput v-model="post.descr"> Descr </AppInput>
        <AppInput v-model="post.img"> Img </AppInput>
        <AppTextarea v-model="post.content"> Content </AppTextarea>
        <div class="controls">
          <div @click="cancel">Cancel</div>
          <AppButton> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    postEdit: {
      type: Object,
    },
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            descr: "",
            img: "",
            content: "",
          },
    };
  },
  methods: {
    cancel() {
      this.$router.push("/admin/");
    },
    onSubmit() {
      this.$emit("submit", this.post);
    },
  },
};
</script>
