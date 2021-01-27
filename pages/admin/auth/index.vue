<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput v-model="user.email" type="email">Login:</AppInput>
        <AppInput v-model="user.password" type="password">Password:</AppInput>

        <div class="controls">
          <AppButton class="page-button"> Login </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((e) => {
          this.user.email = "";
          this.user.password = "";
          console.log(e);
        });
    },
  },
};
</script>


<style lang="scss">
.auth {
  text-align: center;
}
.auth__form {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 40vh;
  flex-direction: column;
}
</style>
