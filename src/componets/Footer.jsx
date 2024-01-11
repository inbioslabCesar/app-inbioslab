const Footer = () => {
    return (
        <footer className="bg-very-dark-blue py-24">
      <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-stretch">
          <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
              <input action="email" placeholder="Actualizar Correo" className="min-w-[50px] flex-1 rounded-full px-4"></input>
              <input type="submit" value="Go" className="py-3 px-8 bg-sky-400 rounded-full text-white cursor-pointer"/>
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
                  <img src="src/images/icon-facebook.svg"
                   className="w/8" />
              </a>
              <a href="#">
                  <img src="src/images/icon-youtube.svg"
                   className="w/8" />
              </a>
              <a href="#">
                  <img src="src/images/icon-pinterest.svg"
                   className="w/8" />
              </a>
              <a href="#">
                  <img src="src/images/icon-twitter.svg"
                   className="w/8" />
              </a>
              <a href="#">
                  <img src="src/images/icon-instagram.svg"
                   className="w/8" />
              </a>
          </div>
          <a href="#" className="[grid-area:logo]">
              <img src="src/images/inbioslab-blanco.svg" className="w-40" />
          </a>
          <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">Copyright 2020. All  Rights Reserved</p>
      </section>
  </footer>
    )
}
export default Footer;