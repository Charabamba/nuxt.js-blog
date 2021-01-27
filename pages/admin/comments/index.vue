<template>
  <no-ssr>
    <div class="wrapper-content">
      <commentTable
        :thead="['Name', 'Text', 'Publish', 'Change Status', 'Delete']"
      >
        <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
            <td>
              <span>
                {{ comment.name }}
              </span>
            </td>
            <td>
              <span>
                {{ comment.text }}
              </span>
            </td>
            <td>
              <span v-if="comment.publish"> Publish </span>
              <span v-else> Hidden </span>
            </td>
            <td>
              <span @click="changeComment(comment)"> Change Status </span>
            </td>
            <td>
              <span @click="deleteComment(comment.id)"> Delete </span>
            </td>
          </tr>
        </tbody>
      </commentTable>
    </div>
  </no-ssr>
</template>


<script>
import axios from "axios";
import commentTable from "@/components/Admin/CommentTable.vue";
export default {
  components: {
    commentTable,
  },
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.loadComments();
  },
  layout: "admin",
  methods: {
    changeComment(comment) {
      comment.publish = !comment.publish;
      axios.put(
        `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(id) {
      axios
        .delete(
          `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`
        )
        .then((res) => {
          this.loadComments();
        });
    },
    loadComments() {
      axios
        .get(
          "https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
        )
        .then((res) => {
          let commentsArray = [];
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });
          this.comments = commentsArray;
        });
    },
  },
};
</script>
