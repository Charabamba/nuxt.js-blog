<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name"> Name: </AppInput>
        <AppInput v-model="user.email" type="email"> Email: </AppInput>
        <AppTextarea v-model="user.text">Text:</AppTextarea>
        <div class="controls">
          <AppButton class="page-button"> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submitted!";
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    },
  },
};
</script>

<style lang="scss">
.control {
  textarea,
  input {
    border-radius: 4px;
    width: 100%;
    padding: 5px;
  }
  label {
    padding-bottom: 5px;
    padding-top: 15px;
    display: block;
  }
}
</style>
