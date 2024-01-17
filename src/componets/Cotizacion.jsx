import { exams } from "../date/users";
import ExamList from "./ExamList";

const Cotizacion = () => {
  return (
    <div>
      <ExamList
        initialExams={exams}
      />
    </div>
  );
};
export default Cotizacion;
