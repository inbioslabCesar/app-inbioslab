import ExamList from "./componets/ExamList";
import { exams } from "./date/users";


function App() {
  return (
    <>
      <ExamList initialExams={exams} />
    </>
  );
}

export default App;
