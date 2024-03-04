import ReactWhatsapp from "react-whatsapp"
import "remixicon/fonts/remixicon.css";
function ButtonWhatsApp() {
  return (
    <ReactWhatsapp number="51945241093" message="Solícito información de un análisis">
    <a
      href="#"
      className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 lg:block">
      <i className="ri-whatsapp-line text-green-500 bg-white rounded-full text-lg mr-2 p-1"></i>
      Contáctanos
    </a>
  </ReactWhatsapp>
  )
}

export default ButtonWhatsApp