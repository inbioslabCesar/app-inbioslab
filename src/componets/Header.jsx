import { Link, Outlet } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import logo from '../images/inbioslab-logo.png'

const Header = () => {
  return (
    <div>
        <nav className="w-[90%] mx-auto overflow-hidden max-w-screen-xl h-40 flex items-center justify-between">
          <Link to="/app-inbioslab/" className="flex justify-center items-center mb-10  w-1/3 xl:max-w-[140px] ">
            
            <img
              src={logo}
              alt="logo"
              className="absolute w-full max-w-[140px]"
          />
          </Link>
         
          <input type="checkbox" id="menu" className="peer hidden" />
          <label
            htmlFor="menu"
            className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"></label>

          <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-dark-blue/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 xl:static xl:bg-none xl:translate-x-0">
            <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl xl:w-max xl:bg-transparent xl:p-0 xl:grid-flow-col xl:static">
              <li>
                <Link to="/app-inbioslab/">Inicio</Link>
              </li>
              <li>
                <Link to="/app-inbioslab/cotizacion">Lista de Precios</Link>
              </li>
              <li>
                <Link to="#">Promociones</Link>
              </li>
              <li>
                <Link to="#">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="#">Contacto</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/app-inbioslab/cotizacion"
            className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 hidden md:block cursor-pointer">
            Cotizar!
          </Link>
      </nav>
      <div className="flex justify-center items-center -mt-16 xl:-mt-5 m-5">
            <div className="flex flex-col xl:flex-row items-center font-bold text-center">
              <div className="flex flex-col xl:flex-row items-center">
                <i className="ri-map-pin-2-fill text-2xl text-sky-400"></i>
                <div className="flex flex-col xl:flex-row ml-2">
              <span>Jr. Calleria N°135 (Cental)</span>
                  <span className="ml-3">
                    Jr. Agustin Cauper N°290 (Sede-1)
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center ml-2">
                <i className="ri-phone-fill text-2xl text-sky-400"></i>
                <span className="ml-1 text-fuchsia-800">
                  945241093-945241682(Yape)
                </span>
              </div>
            </div>
          </div>
      <Outlet />
    </div>
  );
};

export default Header;