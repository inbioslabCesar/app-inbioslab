import Cotizacion from "./componets/Cotizacion";
import Header from "./componets/Header";
import Home from "./componets/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/app-inbioslab/" element={<Header />}>
          <Route path="/app-inbioslab/" element={<Home />} />
          <Route path="/app-inbioslab/cotizacion" element={<Cotizacion />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
