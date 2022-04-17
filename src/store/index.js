import axios from "axios";
import { createStore } from "vuex";

const API_URL = "http://localhost:8080/"


export default createStore({
  state: {
    author:{},
    postList: [],
    showWrongAuthorNotif: false,
  },
  mutations: {
    updateUser(state, author) {
      state.author = author;
      console.log(state.author);
    },
    updatePostList(state, postList) {
      state.postList = postList;
      console.log(state.postList);
    },
    removePostFromList(state, post) {
      state.postList = state.postList.filter(function( obj ) {
        return obj.id !== post.id;
    });
      console.log(state.postList);
    },
    showWrongAuthorNotif(state,isShow){
      state.showWrongAuthorNotif = isShow;
    },
    addPostToList(state,post){
      state.postList.push(post);
    }
  },
  actions:{
    async getAuthorInfo(context,email){
      const res = await axios.get(API_URL+"authors/email/"+email);
        context.commit('updateUser',res.data);
    },
    async getAuthorPostList({commit,state}){
      const res = await axios.get(API_URL+"authors/"+state.author.id+"/posts/");
      commit('updatePostList',res.data);
     
    },
    async getAllPostList(context){
      const res = await axios.get(API_URL+"posts/");
      context.commit('updatePostList',res.data);
    },
    async removePost({commit,state},post){
      console.log(post.author);
      console.log(state.author);
      if(post.author.id === state.author.id){
        await axios.delete(API_URL+"posts/"+post.id);
        commit('removePostFromList',post)
      } else {
        commit('showWrongAuthorNotif',true);
        setTimeout(() => {  commit('showWrongAuthorNotif',false); }, 3000);
      }
    },
    async createPost({commit,state}){
      if(state.author.id){
        const res = await axios({
          method: 'post',
          url: API_URL+'posts',
          data: {
            author_id: state.author.id,
            bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "Titre du post"
          }
        });
        commit('addPostToList',res.data)
      }
    }
  }
});