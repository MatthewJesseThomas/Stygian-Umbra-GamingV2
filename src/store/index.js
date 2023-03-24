import { createStore } from 'vuex'
import axios from 'axios';
// import { useCookies } from "vue3-cookies";

const renderAPI = 'https://stygian-umbra-gaming-store.onrender.com';
// const { allowCookies } = useCookies();
export default createStore({
  state: {
    user: null,
    users: null,
    products: null,
    product: null,
    category: null,
    orders: null,
    message:null,
    spinner:true,
    jwToken: null,
    loggedInUser: false,
    admin: false
  },
  getters: {
  },
  mutations: {
    setUsers: (state, users) =>{
      state.users = users;
    },
    setUser: (state, user) =>{
      state.user = user;
      state.loggedInUser = true;
      state.admin = true;
    },
    setProducts: (state, products) =>{
      state.products = products;
    },
    setProduct: (state, product) =>{
      state.product = product;
    },
    Category: (state, category) =>{
      state.category = category;
    },
    setOrders: (state, orders) =>{
      state.orders = orders;
    },
    setSpinner: (state, spinner) =>{
      state.spinner = spinner;
    },
    setMessage: (state, message) =>{
      state.message = message;
    },
    setToken: (state, jwToken)=>{
      state.jwToken = jwToken;
    },
    setloggedInUser: (state, user)=>{
      state.loggedInUser = user;
    },
    setAdmin: (state, admin)=>{
      state.admin = admin;
    }

  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderAPI}/users`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchUserById(context, id){
      const res = await axios.get(`${renderAPI}/users/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async register(context, payload){
      console.log(payload);
      const res = await axios.post(`${renderAPI}/register`, payload);
      const {err, results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      }else {
        context.commit('setMessage', err);
      }
    },
    async login(context, payload){
      console.log(payload);
      const res = await axios.post(`${renderAPI}/login`, payload);
      const {err, result, jwToken} = await res.data;
      console.log(await res.data);
      if(result){
        console.log(result);
        context.commit('setUser', result);
        context.commit('setToken', jwToken);
        context.commit('setloggedInUser', result);
      //  await allowCookies.set('userCookie', jwToken, '24hr');
      //  await allowCookies.get('userCookie');
        context.commit('setSpinner', false);
      }else {
        console.log(err);
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload, id){
      console.log(payload);
      const res = await axios.put(`${renderAPI}/users/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id){
      const res = await axios.delete(`${renderAPI}/users/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setUsers', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchProducts(context){
      const res = await axios.get(`${renderAPI}/products`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchProductById(context, id){
      const res = await axios.get(`${renderAPI}/products/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setProduct', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, payload){
      console.log(payload);
      const res = await axios.post(`${renderAPI}/products`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async updateProduct(context, payload, id){
      console.log(payload);
      const res = await axios.put(`${renderAPI}/products/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async deleteProduct(context, id){
      const res = await axios.delete(`${renderAPI}/products/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchOrders(context){
      const res = await axios.get(`${renderAPI}/orders`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchOrdersById(context, id){
      const res = await axios.get(`${renderAPI}/orders/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async addToOrders(context, payload){
      console.log(payload);
      const res = await axios.post(`${renderAPI}/orders`, payload);
      const {err, results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async updateOrders(context, payload, id){
      console.log(payload);
      const res = await axios.put(`${renderAPI}/orders/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    },
    async deleteOrders(context, id){
      const res = await axios.delete(`${renderAPI}/orders/${id}`);
      const {err, results} = await res.data;
      if(results){
        context.commit('setOrders', results);
        context.commit('setSpinner', false);
      }else{
        context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})
