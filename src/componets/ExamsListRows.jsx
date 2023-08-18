import ExamRow from "./ExamRow";

const ExamsListRows = ({ exams }) => { 
  if(!exams.length ) return <p>No hay examenes aun</p>
    
     return   exams.map((exam) => <ExamRow key={exam.id} exam={exam} />)
     
};
  export default ExamsListRows