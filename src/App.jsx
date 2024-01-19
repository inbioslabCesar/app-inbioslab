import Cotizacion from "./componets/Cotizacion";
import Home from "./componets/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import {COTIZACION, HOME, LOGIN, LOGOUT, PRIVATE, PUBLICO } from "./routes/paths";
import PrivateRoute from "./componets/router/PrivateRoute";
import PublicRoute from "./componets/router/PublicRoute";
import Private from "./componets/Private";
import { AuthContextProvider } from "./contexts/authContext";
import Logout from "./componets/Logout";
import ExamPublic from "./componets/ExamPublic";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} /> 
            <Route path={PUBLICO} element={<ExamPublic/> } />
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
