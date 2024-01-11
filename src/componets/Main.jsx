const Main = () => {
  return (
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
              importante reconocer cuáles de ellos son normales y cuáles pueden
              ser señal de un problema de salud. Conocer tu organismo y llevar
              un estilo de vida preventivo te ayudarán a entender los cambios
              que vayan presentándose, y así llevar una vida totalmente plena y
              con buena salud.
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
              cuando se trata de tu salud, ya que niveles elevados a menudo son
              indicativos de prediabetes y diabetes; una enfermedad grave que en
              última instancia puede afectar el funcionamiento de varias partes
              del cuerpo, incluido el sistema nervioso, visual y renal.
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
              Jr. Agustin Cauper N° 290 (Frente a emergencia Hospital Regional)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
