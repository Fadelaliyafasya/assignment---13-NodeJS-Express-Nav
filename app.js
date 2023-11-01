const express = require("express");
const app = express();

// Konfigurasi alamat host dan port
const host = "localhost"; // alamat host
const port = 3000; // alamat port

// Handle permintaan GET ke root ("/") dan mengirimkan file "index.html"
app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

// Handle permintaan GET ke "/about" dan mengirimkan file "about.html"
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// Handle permintaan GET ke "/contact" dan mengirimkan file "contact.html"
app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

// Handle permintaan GET dengan parameter dinamis
app.get("/product/:id", (req, res) => {
  // Menangani parameter dinamis ":id" dan query "category"
  res.send(
    `<h1>product id : ${req.params.id} <br> category id :  ${req.query.category}</h1>`
  );
});

// Middleware untuk menangani permintaan yang tidak sesuai dengan rute yang ada
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server Express pada host dan port yang ditentukan
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
