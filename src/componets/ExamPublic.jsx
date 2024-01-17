import { datas } from "../date/datas"
import ExamList from "./ExamList"

const ExamPublic = () => {
  return (
    <div>
      <ExamList initialExams={datas}/>
    </div>
  )
}

export default ExamPublic
