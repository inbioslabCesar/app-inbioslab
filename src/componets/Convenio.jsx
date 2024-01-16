import { exams } from "../date/users";
import ExamListConvenio from "./ExamListConvenio";
const Convenio = () => {
  return (
    <div>
      <ExamListConvenio initialExams={exams} />
    </div>
  );
};

export default Convenio;
