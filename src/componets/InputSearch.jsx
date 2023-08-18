function InputSearch({search, setSearch}) {
    return (
        <input
        type="text"
        name="search"
        value={search}
        placeholder="Buscar examenes"
        onChange={(ev) => setSearch(ev.target.value)}
        className="h-10 p-2 rounded-lg shadow-lg border-none mb-5 mt-2 outline-none hover:shadow-2xl placeholder:text-gray-300"
      />
  )
}

export default InputSearch