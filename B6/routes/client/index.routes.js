import mongoose from "mongoose";

// ES6 Thay module.exports -> export default
export default (app) => {
  // --- CÁC ĐƯỜNG DẪN (ROUTES) ---
  app.get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Trang chủ",
      message: "Xin chào các bạn !",
    });
  });

  // Gọi lại Model Product đã được định nghĩa bên server.js thông qua mongoose
  const Product = mongoose.model("Product");

  // Controller
  app.get("/products", async (req, res) => {
    try {
      const products = await Product.find({});
      res.render("products", {
        pageTitle: "Danh sách sản phẩm",
        products: products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Đã xảy ra lỗi khi lấy dữ liệu");
    }
  });

  app.get("/blog", (req, res) => {
    res.send("<h1>Trang danh sách bài viết</h1> <a href='/'>Về trang chủ</a>");
  });

  app.get("/contact", (req, res) => {
    res.render("contact", {
      pageTitle: "Trang liên hệ",
      message: "Xin chào các bạn",
    });
  });
};
