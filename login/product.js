const app = Vue.createApp({
  data() {
    return {
      apiPath: "danny21316",
      products: [],
      detailProduct: {},
    };
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    ); // take token
    axios.defaults.headers.common.Authorization = token; // default bring token in
    this.signInCheck();
  },
  methods: {
    signInCheck() {
      let signInCheckUrl =
        "https://vue3-course-api.hexschool.io/v2/api/user/check";
      axios
        .post(signInCheckUrl)
        .then((res) => {
          console.log("success", res);
          this.getProduct();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct() {
      let productUrl = `https://vue3-course-api.hexschool.io/v2/api/${apiPath}/admin/products`;
      axios
        .get(productUrl)
        .then((res) => {
          console.log("watch getProduct", res);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

app.mount("#app");
