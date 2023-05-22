import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { getData } from "../services/axios.service";
import ProductLister from "../components/ProductLister";

const TabComponentExample = () => {
  const [key, setKey] = useState("products");
  const [prods, setProds] = useState([]);
  const [users, setusers] = useState([]);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getData(key).then((values) => {
      setProds(values.data.products);
    });
  }, [key]);

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="products" title="Products">
        <ProductLister prods={prods} />
      </Tab>
      <Tab eventKey="users" title="Users">
        {/* <StudentLister student={users} /> */}
      </Tab>
      <Tab eventKey="posts" title="Posts">
        {/* <PostListe posts={post} /> */}
      </Tab>
    </Tabs>
  );
};

export default TabComponentExample;
