import Cotizacion from "./componets/Cotizacion";
import Home from "./componets/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import { CONVENIO, COTIZACION, HOME, LOGIN, LOGOUT, PRIVATE } from "./routes/paths";
import PrivateRoute from "./componets/router/PrivateRoute";
import PublicRoute from "./componets/router/PublicRoute";
import Private from "./componets/Private";
import { AuthContextProvider } from "./contexts/authContext";
import Logout from "./componets/Logout";
import Convenio from "./componets/Convenio";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={CONVENIO} element={<Convenio />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} /> 
            <Route path={COTIZACION} element={<Cotizacion/>} />
            <Route path={LOGOUT} element={<Logout/> } />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
