import ExamRow from "./ExamRow";

const ExamsListRows = ({
  exams,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  if (!exams.length) return <p>No hay examenes aun</p>;

  return exams.map((exam) => (
    <ExamRow
      key={exam.id}
      exam={exam}
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
