import Cotizacion from "./componets/Cotizacion";
import Home from "./componets/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import { COTIZACION, HOME, LOGIN, LOGOUT, PRIVATE } from "./routes/paths";
import PrivateRoute from "./componets/router/PrivateRoute";
import PublicRoute from "./componets/router/PublicRoute";
import Private from "./componets/Private";
import { AuthContextProvider } from "./contexts/authContext";
import Logout from "./componets/Logout";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="/app-inbioslab/login" element={<Login />} />
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
