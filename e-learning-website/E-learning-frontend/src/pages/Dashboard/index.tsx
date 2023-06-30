const Dashboard = () => {
  console.log("cookies");
  const cookie = document.cookie;
  console.log(document.cookie);
  console.log(cookie.split(":"));
  return <div className="text-bold text-3xl underline">Dashboard</div>;
};

export default Dashboard;
