const ExamsListPaginate = ({
  page,
  itensPerPage,
  setPage,
  setItemsPerPage,
}) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center gap-1">
        <select
          value={itensPerPage}
          onChange={(ev) => setItemsPerPage(Number(ev.target.value))} className="border rounded-lg shadow-md  hover:shadow-xl cursor-pointer no-underline">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="">Elementos por página</p>
      </div>
    </div>
  );
};

export default ExamsListPaginate;
