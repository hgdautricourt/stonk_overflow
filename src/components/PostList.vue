<template>
  <div class="section">
    <div class="post-container is-center">
      <div class="task-container columns is-multiline">
        <div class="column is-half is-offset-one-quarter">
          <div
            v-show="this.$store.state.showWrongAuthorNotif"
            class="notification is-danger is-light"
          >
            Vous n'êtes pas l'auteur de ce message.
          </div>
          <div
            v-show="!this.$store.state.author.id"
            class="notification is-danger is-light"
          >
            Vous n'êtes pas connecté.
          </div>
        </div>
        <div
          class="column is-half is-offset-one-quarter"
          style="margin-bottom: 10px"
          v-for="post in this.$store.state.postList"
          :key="post.id"
        >
          <PostCard :post="post"></PostCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  name: "PostList",
  components: {
    PostCard,
  },
};
</script>
