const Home = () => {
  return (
    <div>      
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
              <a
                href="#"
                className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 lg:block">
                Contáctanos
              </a>
            </div>
            <div className="hero__img hidden xl:flex max-w-[814px] self-end">
              <img src="src/images/leo.png" alt="" />
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
            </div>
            <div className="">
              <h2 className="text-3xl">Sede 1</h2>
              <p>
                Jr. Agustin Cauper N° 290 (Frente a emergencia Hospital
                Regional)
              </p>
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
            <a href="#">Inicio</a>
            <a href="#">Precio</a>
            <a href="#">Servicos</a>
            <a href="#">Promociones</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Politicas de Privacidad</a>
          </nav>
          <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">
            <a href="#">
              <img src="src/images/icon-facebook.svg" className="w/8" />
            </a>
            <a href="#">
              <img src="src/images/icon-youtube.svg" className="w/8" />
            </a>
            <a href="#">
              <img src="src/images/icon-pinterest.svg" className="w/8" />
            </a>
            <a href="#">
              <img src="src/images/icon-twitter.svg" className="w/8" />
            </a>
            <a href="#">
              <img src="src/images/icon-instagram.svg" className="w/8" />
            </a>
          </div>
          <a href="#" className="[grid-area:logo]">
            <img src="src/images/inbioslab-blanco.svg" className="w-40" />
          </a>
          <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">
            Copyright 2020. All Rights Reserved
          </p>
        </section>
      </footer>
    </div>
  );
};
export default Home;
