import { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import headLogo from "../images/head-logo.svg";
import { MAGIC_WORD } from "../consts/magicWord";
import { HOME } from "../routes/paths";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const [magicWord, setMagicWord] = useState("");
  const handleInputChage = (e) => {
    setMagicWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <div className=" bg-slate-100  h-screen w-screen flex">
      <div className="w-80 h-80 rounded-xl mt-48 mx-auto overflow-hidden max-w-screen-xl flex flex-col bg-slate-200 justify-center items-center gap-5">
        <Link to={HOME}>
        <img src={headLogo} alt="" />
        </Link>
        <h1 className="text-2xl font-bold">INBIOSLAB</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
          <input value={magicWord} onChange={handleInputChage} type="text" className=" rounded-xl w-full outline-none p-5 py-3" />
          <button
            type="submit"
            className="button font-bold hover:scale-110">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
