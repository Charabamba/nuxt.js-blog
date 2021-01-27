import axios from "axios";

// state
export const state = () => ({
  postsLoaded: [],
  token: null
});

// mutations
export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    console.log(post);
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      post => post.id === postEdit.id
    );
    state.postsLoaded[postIndex] = postEdit;
  },
  addComment(state, comment) {
    console.log(comment);
    state.commentsLoaded.push(comment);
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  }
};

// actions
export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get(
        "https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then(res => {
        const postsArray = [];
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key });
        }
        commit("setPosts", postsArray);
      })
      .catch(e => console.log(e));
  },
  authUser({ commit }, authData) {
    const key = "AIzaSyD2HR2d3xYdUHaHT68TBJXqXw1MulmT1Qo";
    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("setToken", res.data.idToken);
      })
      .catch(e => {
        console.log(e);
      });
  },
  logoutUser({ commit }) {
    commit("destroyToken");
  },
  addPost({ commit }, post) {
    // console.log(post);
    return axios
      .post(
        "https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        post
      )
      .then(res => {
        // console.log(res);
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.log(e));
  },
  editPost({ commit, state }, post) {
    return axios
      .put(
        `https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json?auth=${state.token}`,
        post
      )
      .then(res => {
        commit("editPost", post);
      })
      .catch(e => {
        console.log(e);
      });
  },
  addComment({ commit }, comment) {
    return axios
      .post(
        "https://blog-nuxt-a7d2a-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
        comment
      )
      .then(res => {
        // console.log(res);
        commit("addComment", { ...comment, id: res.data.name });
      })
      .catch(e => console.log(e));
  }
};

// getters
export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  checkAuthUser(state) {
    return state.token != null;
  }
};
