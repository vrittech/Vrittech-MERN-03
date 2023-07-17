import { useNavigate } from "react-router-dom";
import { postData } from "../../services/axios.service";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }: any) => {
  // const user = useSelector((state:any)=>state.)
  const handleCheckout = async () => {
    const resp = await postData("stripe/create-checkout-session", {
      cartItems,
    });

    if (resp.success) {
      window.location.href = resp.data;
    }
  };
  return (
    <div>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
};

export default PayButton;
