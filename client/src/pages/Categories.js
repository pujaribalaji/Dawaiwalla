import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const allCategory = useCategory();
  return (
    <Layout title={"All Category - Dawaiwalla"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {allCategory.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link
                  to={`https://dawaiwalla-backend.onrender.com/category/${c.slug}`}
                  className="btn cat-btn"
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
