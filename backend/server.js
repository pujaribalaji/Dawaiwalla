import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import pincodeRoutes from "./routes/pincodeRoutes.js";
import cors from "cors";
import bannerRoute from "./routes/bannerRoute.js";
import orderRoutes from "./routes/ordersRoute.js";
import footerRoutes from "./routes/footerRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import purchaseRouter from "./routes/purchaseStore.js";
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/pincode", pincodeRoutes);
app.use("/api/v1/banner", bannerRoute);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/footer", footerRoutes);

// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/purchaseOrder", purchaseRouter)

// app.get("/api/v1/purchaseOrder",(req,res)=>{
//   console.log("Request Received")
//   res.send("Hello User Bhai!")
// })

//rest api
app.post("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
