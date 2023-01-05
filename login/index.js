// console.log(axios);

// axios.get(`${url}/${path}/admin/signin`)

const app = Vue.createApp({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    loginCheck() {
      let user = {
        username: this.username,
        password: this.password,
      };
      console.log(user);
      axios
        .post(`https://vue3-course-api.hexschool.io/v2/admin/signin`, user)
        .then((res) => {
          console.log(res.data);
          let token = res.data.token;
          let expired = res.data.expired;

          document.cookie = `myToken=${token};expires=${expired};`;

          window.location = "products.html";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

app.mount("#app");
