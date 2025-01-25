import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../home/home";
import Marcas from "../componentes principales/marcas/marcas";
import Modelos from "../componentes principales/modelos/modelos";
import Cotizar from "../componentes principales/cotizar/cotizar";
import Rentar from "../componentes principales/rentar/rentar";

export default function router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/marcas" element={<Marcas/>} />
          <Route path="/modelos" element={<Modelos/>} />
          <Route path="/cotizar" element={<Cotizar/>}/>
          <Route path="/rentar" element={<Rentar/>} />
        </Routes>
      </BrowserRouter>
  );
}
