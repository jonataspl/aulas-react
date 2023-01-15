import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setEnvironmentData } from "worker_threads";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  function homeButton() {
    history("/pagina-inicial");
  }

  const handleEntrar = () => {
    var emailLogin = email;
    var passLogin = password;
    console.log(emailLogin, passLogin);
  };

  return (
    <div>
      <form>
        <label>
          <span>E-mail: </span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha: </span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
      <h1>
        <button onClick={homeButton}>Home</button>
      </h1>
    </div>
  );
};
