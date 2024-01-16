import ExamRow from "./ExamRow";

const ExamsListRows = ({
  datas,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  if (!datas.length) return <p>No hay examenes aun</p>;

  return datas.map((data) => (
    <ExamRow
      key={data.id}
      data={data}
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      
    />
  ));
};
export default ExamsListRows;
