import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const Dashboard = () => {
  const history = useNavigate();

  function loginButton() {
    history("/autenticacao");
  }

  return (
    <div>
      <h1>Página Principal</h1>
      <Button variant="contained" onClick={loginButton}>
        Login
      </Button>
    </div>
  );
};
