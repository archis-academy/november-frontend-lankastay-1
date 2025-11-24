import Welcome from "@components/welcome/welcome";
import Button from "@components/welcome/Button/Button";


const Home = () => {
  const handleLogin = () => {
    alert("Login clicked!");
  };

  return (
    <div>
      <Welcome/>
      <Button onClick={handleLogin} />
    </div>
  );
};

export default Home;