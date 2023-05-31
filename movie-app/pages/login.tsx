import React from "react";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  function navigateTOLogin() {
    router.push("/login");
    // navigate('/login');
  }
  return <div>login</div>;
};

export default login;
