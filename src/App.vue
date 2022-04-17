<template>
  <html>
    <NavBar />
    <PostList />
  </html>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PostList,
  },
};
</script>
