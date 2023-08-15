import ExamRow from "./ExamRow";
const ExamList = ({ exams }) => {
  const renderExam = exams.length > 0 ? exams.map(exam => <ExamRow exam={exam} key={exam.id}/>): <p>No hay examenes aun</p>;
    return <div className="w-full max-w-lg m-auto p-4">
      <h1 className="lista text-2xl font-bold mb-1">Listado de análisis</h1>
      {renderExam}
    </div>;
};
export default ExamList;