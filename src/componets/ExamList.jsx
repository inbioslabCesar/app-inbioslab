import { useState } from "react";
import ExamRow from "./ExamRow";

const ExamList = ({ exams }) => {
  const [search, setSearch] = useState("");

  const examsFiltered = filterExamsByName(exams, search)
  const renderExam = renderExams(examsFiltered)

  return (
    <div className="w-full max-w-lg m-auto p-4">
      <h1 className="lista text-2xl font-bold mb-1">Listado de análisis</h1>

      <input
        type="text"
        name="search"
        value={search}
        placeholder="Buscar examenes"
        onChange={(ev) => setSearch(ev.target.value)}
        className="h-10 p-2 rounded-lg shadow-lg border-none mb-5 mt-2 outline-none hover:shadow-2xl placeholder:text-gray-300"
      />

      {renderExam}
    </div>
  );
};
const filterExamsByName = (exams,search ) => {
  const normalizedSearch = search.toLowerCase();

  const examsFiltered = search
    ? exams.filter((ex) => ex.exam.toLowerCase().startsWith(normalizedSearch))
    : exams;
  return examsFiltered
}
const renderExams = (exams) => { 
  const renderExam =
    exams.length > 0 ? (
      exams.map((exam) => <ExamRow key={exam.id} exam={exam} />)
    ) : (
      <p>No hay examenes aun</p>
    );
  return renderExam
};
export default ExamList;
