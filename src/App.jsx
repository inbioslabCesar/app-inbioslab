import ExamList from "./componets/ExamList";
import { exams } from "./date/users";


function App() {
  return (
    <>
      <ExamList exams={exams} />
    </>
  );
}

export default App;
