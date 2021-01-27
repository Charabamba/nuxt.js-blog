<template>
  <no-ssr>
    <div class="wrapper">
      <Header />
      <div class="admin-container">
        <Intro title="Admin page">
          <nuxt-link to="/admin" class="link-white link-inline-block">
            Admin
          </nuxt-link>
          <nuxt-link to="/admin/new-post" class="link-white link-inline-block">
            New Post
          </nuxt-link>
          <nuxt-link to="/admin/comments" class="link-white link-inline-block">
            Comments
          </nuxt-link>
          <span @click="logoutUser" class="link-white link-inline-block">
            Logout
          </span>
        </Intro>
      </div>
      <Nuxt />
      <Footer />
    </div>
  </no-ssr>
</template>

<script>
import Header from "~/components/system/Header.vue";
import Footer from "~/components/system/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  middleware: ["auth"],
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/admin/auth");
      });
    },
  },
};
</script>


