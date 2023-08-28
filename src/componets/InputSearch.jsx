import { FaSearch } from "react-icons/fa";

function InputSearch({ search, setSearch }) {
  return (
    <div>
      <div className="w-2/3 h-10 p-2 rounded-lg shadow-lg border-none mb-5 mt-2 outline-none hover:shadow-2xl placeholder:text-gray-300 relative">
        <FaSearch className=" absolute mt-1 text-zinc-400"/>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Buscar examenes"
          onChange={(ev) => setSearch(ev.target.value)}
          className="ml-6 outline-none"
        />
      </div>
    </div>
  );
}

export default InputSearch;
