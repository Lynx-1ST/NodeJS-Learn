import productRoutes from "./products.routes.js"; // Nhớ có đuôi .js

export default (app) => {
  app.get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Trang chủ",
      message: "Xin chào các bạn !",
    });
  });

  // Chuyển hướng mọi yêu cầu có /products sang cho productRoutes xử lý
  app.use("/products", productRoutes);

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
