<template>
  <button :class="btnClass" v-on="$listeners" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "button",
    },
  },
};
</script>
