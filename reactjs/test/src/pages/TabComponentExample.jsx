import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { getData } from "../services/axios.service";
import ProductLister from "../components/ProductLister";
import PostsLister from "./PostsLister";
import UsersLister from "./UsersLister";
import EditModal from "../components/EditModal";

const TabComponentExample = () => {
  const [key, setKey] = useState("products");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [prods, setProds] = useState([]);
  const [users, setusers] = useState([]);
  const [posts, setposts] = useState([]);
  const [editProduct, setEditProduct] = useState({});

  // const [data, setData] = useState([]);

  useEffect(() => {
    getData(key).then((values) => {
      if (key === "products") {
        setProds(values.data[key]);
      } else if (key === "users") {
        setusers(values.data[key]);
      } else if (key === "posts") {
        setposts(values.data[key]);
      }
    });
  }, [key]);

  const handleDeleteProduct = (e, id) => {
    e.preventDefault();
    const filteredProduct = prods.filter((prod) => {
      return prod.id !== id;
    });
    setProds(filteredProduct);
  };

  const handleEditProduct = (e, product) => {
    e.preventDefault();
    console.log(product);
    setEditProduct(product);
    setShow(true);
  };
  //individually update state value in edit product
  const handleTitleChange = (e) => {
    setEditProduct({
      title: e.target.value,
    });
  };
  //individually update state value in edit product
  const handleDescriptionChange = (e) => {
    setEditProduct({
      description: e.target.value,
    });
  };
  //individually update state value in edit product
  const handleThumbnailChange = (e) => {
    setEditProduct({
      thumbnail: e.target.value,
    });
  };
  // let b = 10;
  // let a = 10;
  // let e = {
  //   target: {
  //     name: "title",
  //     value: "10",
  //   },
  // };
  // let test = {
  //   [e.target.name]: e.target.value,
  // };
  // console.log(test);

  //dynamically update state value in edit product
  const handleChange = (e) => {
    let updatedData = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };
    setEditProduct(updatedData);
  };

  //save changes update button
  const handleEditChanges = () => {
    const updatedProd = prods.map((item) => {
      return item.id === editProduct.id ? editProduct : item;
    });
    setProds(updatedProd);
    setShow(false);
  };

  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="products" title="Products">
          {key === "products" && (
            <ProductLister
              prods={prods}
              handleDeleteProduct={handleDeleteProduct}
              handleEditProduct={handleEditProduct}
            />
          )}
        </Tab>
        <Tab eventKey="users" title="Users">
          {key === "users" && <UsersLister users={users} />}
        </Tab>
        <Tab eventKey="posts" title="Posts">
          {key === "posts" && <PostsLister posts={posts} />}
        </Tab>
      </Tabs>

      <EditModal
        show={show}
        handleClose={handleClose}
        product={editProduct}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        handleThumbnailChange={handleThumbnailChange}
        handleChange={handleChange}
        handleEditChanges={handleEditChanges}
      />
    </>
  );
};

export default TabComponentExample;
