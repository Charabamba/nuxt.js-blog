<template>
  <div class="wrapper-content">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam
        </p>
        <intro title="natus ullam veniam suscipit velit!" />
        <p>Ab, id illo. Vero voluptatibus vel</p>
        <p>
          deserunt natus consequatur! Qui, doloremque? Inventore cumque sequi
          ea!
        </p>
        <div class="hidden">
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import intro from "@/components/UI/Intro.vue";

export default {
  components: {
    intro,
  },
  head() {
    let title = "About My SSR Blog!",
      descr = "About My SSR Blog! With Nuxt.js",
      type = "site";
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: descr },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
};
</script>


<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>
