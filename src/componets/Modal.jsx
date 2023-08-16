export function Modal({ isVisible, onClose, exam }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className=" text-white text-xl place-self-end"
          onClick={() => onClose()}>
          x
        </button>
              <div className="bg-zinc-600 text-white p-2 rounded flex flex-col text-sm uppercase text-left">
                  <h1 className=" font-bold text-lime-500">pre-analítica:</h1>
          <span>codigo: 000{exam.id}</span>
          <span>nombre de prueba: {exam.exam}</span>
          <span>condiciones pre-analitica: {exam.preanalitic}</span>
          <span>tipo de tubo(color)/recipiente: {exam.tube}</span>
          <span>tipo de muestra: {exam.sample}</span>
          <span>metodologia: {exam.method}</span>
          <span>precio: {exam.price}.00 soles</span>
          <span>tiempo de proceso: {exam.time} día(s)</span>
          <span className=" font-bold">
            observaciones: el tiempo de proceso corre a partir de llegada la
            muestra al laboratorio, ciertos analitos requieren dilucion pudiendo
            aumentar el tiempo de proceso.
          </span>
        </div>
      </div>
    </div>
  );
}
