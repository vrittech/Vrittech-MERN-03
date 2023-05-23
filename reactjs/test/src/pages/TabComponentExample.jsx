import React, { useEffect, useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { getData } from "../services/axios.service";
import ProductLister from "../components/ProductLister";
import PostsLister from "./PostsLister";
import UsersLister from "./UsersLister";
import Modal from "react-bootstrap/Modal";

const TabComponentExample = () => {
  const [key, setKey] = useState("products");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [prods, setProds] = useState([]);
  const [users, setusers] = useState([]);
  const [posts, setposts] = useState([]);

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

  const handleEditProduct = (e, id) => {
    setShow(true);
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control" placeholder="Product name" />
          <input
            className="form-control mt-3"
            placeholder="Product description"
          />
          <input className="form-control mt-3" placeholder="Image url" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TabComponentExample;
