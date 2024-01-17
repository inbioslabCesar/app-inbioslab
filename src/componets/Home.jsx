import "remixicon/fonts/remixicon.css";
import logo from "../images/inbioslab-logo.png";
import logoLeo from "../images/logo-leo.jpeg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import inbioslabBlanco from "../images/inbioslab-blanco.svg";
import { Link } from "react-router-dom";
import { HOME, LOGIN } from "../routes/paths";
import ReactWhatsapp from "react-whatsapp";
const Home = () => {
  return (
    <div>
      <header>
        <nav className="w-[90%] mx-auto overflow-hidden max-w-screen-xl h-40 flex items-center justify-between">
          <Link
            to={HOME}
            className="flex justify-center items-center mb-10  w-1/3 xl:max-w-[140px] ">
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
                <Link to={HOME}>Inicio</Link>
              </li>
              <li>
                <Link>Lista de precio público</Link>
              </li>
              <li>
                <Link to="#">Promociones</Link>
              </li>
              <li>
                <Link to="#">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="#">Servicio a domicilio</Link>
              </li>
              <li>
                <div className="bg-sky-400 text-vary-light-gray block w-max py-3 px-5 rounded-full hover:scale-110 mx-auto md:hidden">
                  <Link to={LOGIN} className="">
                    Empresas
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <Link
            to={LOGIN}
            className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 hidden md:block cursor-pointer">
            Empresas
          </Link>
        </nav>
        <div className="flex justify-center items-center -mt-16 xl:-mt-5 m-5">
          <div className="flex flex-col xl:flex-row items-center font-bold text-center">
            <div className="flex flex-col xl:flex-row items-center">
              <i className="ri-map-pin-2-fill text-2xl text-sky-400"></i>
              <div className="flex flex-col xl:flex-row ml-2">
                <span>Jr. Calleria N°135 (Central)</span>
                <span className="ml-3">Jr. Agustin Cauper N°290 (Sede-1)</span>
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
      </header>
      <section className="hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-around h-full ">
            <div className="hero__tetxt xl:w-[48%] text-center xl:text-left">
              <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto">
                <i className="ri-heart-pulse-line text-2xl text-sky-400"></i>
                <div className=" uppercase text-base font-medium text-[#9ab4b7] tracking-[8px]">
                  Vive tu vida
                </div>
              </div>
              <h1 className="font-bold text-6xl mb-6">
                Nos preocupamos por tu salud
              </h1>
              <p className="mb-[26px] md:max-w-xl">
                Proporcionamos a nuestros pacientes y usuarios una excelente
                atención, calidez, oportunidad y confiabilidad en nuestros
                resultados.
              </p>
              <ReactWhatsapp number="945241093">
                <a
                  href="#"
                  className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 lg:block">
                  <i className="ri-whatsapp-line text-green-500 bg-white rounded-full text-lg mr-2 p-1"></i>
                  Contáctanos
                </a>
              </ReactWhatsapp>
            </div>
            <div className="hero__img hidden xl:flex max-w-[814px] self-end">
              <img src={logoLeo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="wrapper text-center py-24 grid gap-12 md:grid-cols-2">
          <article>
            <h2 className="text-3xl font-bold text-very-dark-blue mb-6 md:text-4xl">
              Perfiles de Prevención
            </h2>
            <p className="text-dark-grayish-blue text-left">
              Un grupo de pruebas que serán el complemento ideal para cuidar tu
              salud
            </p>
          </article>
          <div className="grid gap-12">
            <article className="space-y-4 md:space-y-6">
              <p className="bg-sky-200 rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-sky-400 text-white px-6 rounded-full py-2">
                  01
                </span>
                <span className="flex-1 p-2">Perfil Salud Sexual</span>
              </p>
              <p className="text-dark-grayish-blue text-left">
                La salud sexual requiere un enfoque positivo y respetuoso, así
                como la posibilidad de tener experiencias sexuales seguras y
                libres de cualquier temor. Desde el respeto y la información
                oportuna, las personas podemos adquirir hábitos sexuales
                saludables.
              </p>
              <a className="text-blue-400 font-bold flex cursor-pointer">
                Ver detalles
              </a>
            </article>
            <article className="space-y-4 md:space-y-6">
              <p className="bg-sky-200 rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-sky-400 text-white px-6 rounded-full py-2">
                  02
                </span>
                <span className="flex-1 p-2">Perfil Masculino Edad de Oro</span>
              </p>
              <p className="text-dark-grayish-blue text-left">
                A medida que pasan los años nuestro cuerpo cambia, por eso, es
                importante reconocer cuáles de ellos son normales y cuáles
                pueden ser señal de un problema de salud. Conocer tu organismo y
                llevar un estilo de vida preventivo te ayudarán a entender los
                cambios que vayan presentándose, y así llevar una vida
                totalmente plena y con buena salud.
              </p>
              <a className="text-blue-400 font-bold flex cursor-pointer">
                Ver detalles
              </a>
            </article>
            <article className="space-y-4 md:space-y-6">
              <p className="bg-sky-200 rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-sky-400 text-white px-6 rounded-full py-2">
                  03
                </span>
                <span className="flex-1 p-2">Perfil Diabetes Bajo Control</span>
              </p>
              <p className="text-dark-grayish-blue text-left">
                ¿Preocupado por la diabetes? Este perfil puede ayudarte. Tus
                niveles de azúcar en sangre actúan como un indicador crítico
                cuando se trata de tu salud, ya que niveles elevados a menudo
                son indicativos de prediabetes y diabetes; una enfermedad grave
                que en última instancia puede afectar el funcionamiento de
                varias partes del cuerpo, incluido el sistema nervioso, visual y
                renal.
              </p>
              <a className="text-blue-300 font-bold flex cursor-pointer">
                Ver detalles
              </a>
            </article>
          </div>
        </section>
        <section className="bg-sky-400 font-bold py-4 pt-5 grid md:grid-cols-2">
          <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl py-20 text-center grid gap-6">
            <h2 className="text-4xl text-vary-light-gray">UBÍCANOS</h2>
          </div>
          <div className="wrapper bg-vary-light-gray p-12 rounded-2xl grid md:grid-cols-2 max-w-[40%_40%]">
            <div className="">
              <h2 className="text-3xl">Sede Central</h2>
              <p>Jr. Calleria N° 135 (A media cuadra de la fiscalia)</p>

              <span>Horario: 7:00 am - 7:00 pm</span>
            </div>
            <div className="">
              <h2 className="text-3xl">Sede 1</h2>
              <p>
                Jr. Agustin Cauper N° 290 (Frente a Emergencia Hospital
                Regional)
              </p>
              <span>Horario: 7:00 am - 3:00 pm</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-very-dark-blue py-24">
        <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-stretch">
          <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
            <input
              action="email"
              placeholder="Actualizar Correo"
              className="min-w-[50px] flex-1 rounded-full px-4"></input>
            <input
              type="submit"
              value="Go"
              className="py-3 px-8 bg-sky-400 rounded-full text-white cursor-pointer"
            />
          </form>
          <nav className="grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
            <Link to={HOME}>Inicio</Link>
            <Link>Lista de precios público</Link>
            <a href="#">Servicos</a>
            <a href="#">Promociones</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Politicas de Privacidad</a>
          </nav>
          <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">
            <a href="#">
              <img src={facebook} className="w/8" />
            </a>
            <a href="#">
              <img src={youtube} className="w/8" />
            </a>
            <a href="#">
              <img src={pinterest} className="w/8" />
            </a>
            <a href="#">
              <img src={twitter} className="w/8" />
            </a>
            <Link to="#">
              <img src={instagram} className="w/8" />
            </Link>
          </div>
          <Link to={HOME} className="[grid-area:logo]">
            <img src={inbioslabBlanco} className="w-40" />
          </Link>
          <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">
            Copyright 2024. All Rights Reserved
          </p>
        </section>
      </footer>
    </div>
  );
};
export default Home;
