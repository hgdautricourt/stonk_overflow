<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ post.title }}</p>
      <p class="is-pulled-right pt-3">{{ post.author.lastName }}</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">{{ post.bodyText }}</div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item has-text-primary"></a>
      <a
        href="#"
        class="card-footer-item has-text-danger"
        v-on:click="removePost(post)"
        >Supprimer</a
      >
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostCard",
  props: ["post"],
  methods: {
    ...mapActions({
      removePost: "removePost", // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
};
</script>

<style></style>
