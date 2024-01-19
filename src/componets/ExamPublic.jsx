import { datas } from "../date/datas"
import ExamListPublic from "./ExamListPublic"

const ExamPublic = () => {
  return (
    <div>
      <ExamListPublic initialExams={datas}/>
    </div>
  )
}

export default ExamPublic
