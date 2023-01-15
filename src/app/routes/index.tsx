import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "../pages";
import { Login } from "../pages/login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="/autenticacao" element={<Login />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};
