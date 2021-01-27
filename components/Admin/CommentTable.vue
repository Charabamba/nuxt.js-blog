<template>
  <section>
    <div class="container container_scroll">
      <table class="comment-table">
        <thead>
          <tr>
            <th v-for="(th, index) in thead" :key="index">
              {{ th }}
            </th>
          </tr>
        </thead>
        <slot name="tbody"></slot>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.comment-table {
  width: 100%;
  min-width: 700px;
  font-size: 18px;
  th {
    font-weight: bold;
    padding: 5px 15px;
    padding-bottom: 15px;
  }
  td {
    padding: 5px 15px;
    border: 1px solid #4b40e3;
  }
}
</style>
