const Section = () => {
  return (
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
            <img src="public/images/avatar-ali.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
