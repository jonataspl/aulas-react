import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const history = useNavigate();

  function loginButton() {
    history("/autenticacao");
  }

  return (
    <div>
      <h1>Página Principal</h1>
      <button onClick={loginButton}>Login</button>
    </div>
  );
};
