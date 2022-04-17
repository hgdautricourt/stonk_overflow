<template>
  <nav
    class="navbar has-background-white-bis"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item mr-6" href="#">
        <div class="has-text-primary is-size-2">StonckOverflow</div>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start ml-6">
        <a class="navbar-item" v-on:click="getAuthorPost"> Mes publications </a>
        <a class="navbar-item" v-on:click="getAllPost"
          >Toutes les publications
        </a>
        <div class="buttons">
          <a
            class="navbar-item has-background-grey has-text-white button"
            v-on:click="createPost"
            >Nouvelle publication</a
          >
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item">
            {{ this.$store.state.author.firstName }}
            {{ this.$store.state.author.lastName }}
          </div>
          <input
            v-model="email"
            class="input mr-2"
            type="text"
            placeholder="Email"
          />
          <div class="buttons">
            <a class="button is-primary" v-on:click="logIn(email)">
              Connexion
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions({
      logIn: "getAuthorInfo", // map `this.add()` to `this.$store.dispatch('increment')`
      getAuthorPost: "getAuthorPostList", // map `this.add()` to `this.$store.dispatch('increment')`
      getAllPost: "getAllPostList",
      createPost: "createPost",
    }),
  },
};
</script>
