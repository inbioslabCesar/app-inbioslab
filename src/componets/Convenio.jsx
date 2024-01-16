import { datas } from "../date/datas";
import ExamList from "./ExamList";
const Convenio = () => {
  return (
    <div>
      <ExamList initialData={datas} />
    </div>
  );
};

export default Convenio;
