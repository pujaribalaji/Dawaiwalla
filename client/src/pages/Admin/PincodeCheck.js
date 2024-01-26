import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import PincodeForm from "../../components/Form/PincodeForm";
import { Modal } from "antd";
const CreatePincode = () => {
  const [pincode, setPincode] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/pincode/create-pincode",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllPincode(); // getAllCategory();  changed to getAllPincode()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input form");
    }
  };

  //get all pincode
  const getAllPincode = async () => {
    try {
      const { data } = await axios.get(
        "https://dawaiwalla-backend-2pc2.onrender.com/api/v1/pincode/get-pincode"
      );
      if (data?.success) {
        setPincode(data?.pincode);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting existing pincodes");
    }
  };

  useEffect(() => {
    getAllPincode();
  }, []);

  //update pincode
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/pincode/update-pincode/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllPincode();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  //delete pincode
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `https://dawaiwalla-backend-2pc2.onrender.com/api/v1/pincode/delete-pincode/${pId}`
      );
      if (data.success) {
        toast.success(`Pincode is deleted`);

        getAllPincode();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Pincode"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Pincode</h1>
            <div className="p-3 w-50">
              <PincodeForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pincode?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <PincodeForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePincode;
