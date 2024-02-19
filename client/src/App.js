import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Termsandconditions from "./pages/Termsandconditions";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import CreatePincode from "./pages/Admin/PincodeCheck";
// import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import ChatBot from "./components/Chatbot/ChatBot";
import WomenCategoryPage from "./pages/HealthCategory/Womens";
import BonesCategoryPage from "./pages/HealthCategory/Bone-joints";
import DiabeticCategoryPage from "./pages/HealthCategory/Diabetic";
import HairCategoryPage from "./pages/HealthCategory/Hair";
import EyesCategoryPage from "./pages/HealthCategory/Eye-ear";
import StomachCategoryPage from "./pages/HealthCategory/Stomach";
import Banners from "./pages/Admin/banners";
import BannersLists from "./pages/Admin/BannersList";
import UpdateBanner from "./pages/Admin/UpdateBanner";
import OrdersList from "./pages/Admin/OrdersList";
import TextManager from "./pages/Admin/TextManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/HealthCategory/women" element={<WomenCategoryPage />} />
        <Route
          path="/HealthCategory/bones&joints"
          element={<BonesCategoryPage />}
        />
        <Route
          path="/HealthCategory/diabetic"
          element={<DiabeticCategoryPage />}
        />
        <Route path="/HealthCategory/Eye-ear" element={<EyesCategoryPage />} />
        <Route
          path="/HealthCategory/stomach"
          element={<StomachCategoryPage />}
        />
        <Route path="/HealthCategory/hair" element={<HairCategoryPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard/user/orders/:id" element={<Orders />} />
          <Route path="/dashboard/user/orders/:orderId" element={<Orders />} />

          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/create-pincode" element={<CreatePincode />} />
          {/* <Route path="admin/users" element={<Users />} /> */}
          <Route path="admin/banner" element={<Banners />} />
          <Route path="admin/bannerslist" element={<BannersLists />} />
          <Route path="admin/orderslist" element={<OrdersList />} />
          <Route path="admin/textmanager" element={<TextManager />} />
          <Route
            path="admin/bannerslist/updatebanner"
            element={<UpdateBanner />}
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <ChatBot />
    </>
  );
}

export default App;
