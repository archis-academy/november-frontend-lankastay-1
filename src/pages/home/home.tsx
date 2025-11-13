import Welcome from "@components/welcome/welcome";
import LoginButton from "@components/welcome/LoginButton/LoginButton";

function Home() {
  return <Welcome />;
}

export default Home;



const Home = () => {
  const handleLogin = () => {
    alert("Login clicked!");
  };

  return (
    <div>
      <LoginButton onClick={handleLogin} />
    </div>
  );
};

export default Home;