<template>
  <div class="message" :class="mesClass">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>


<style lang="scss">
.message {
  font-size: 22px;
  &.success {
    color: rgb(0, 82, 0);
  }
  &.error {
    color: rgb(102, 0, 0);
  }
}
</style>
