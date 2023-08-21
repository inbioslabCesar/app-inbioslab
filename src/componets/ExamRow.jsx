import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Modal } from "./Modal";

const ExamRow = ({ exam }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div >
      <div className="flex justify-between items-center border p-3 rounded-lg uppercase font-medium mb-1">
        <div className="">
          <span>00{exam.id}</span>
        </div>
        <div className="w-1/2 text-sm">
          <span>{exam.exam}</span>
        </div>
        <div className="">
          <span>S/. {exam.price}.00</span>
        </div>
        <div className="">
          <button
            className="uppercase px-2 py-2  rounded-full text-sm"
            onClick={() => setShowModal(true)}>
            <FaExclamationCircle className=""/>
          </button>
        </div>
      </div>
      <Modal
              isVisible={showModal}
              onClose={() => {
                  setShowModal(false);
              }}
              exam={ exam }
      />
    </div>
  );
};
export default ExamRow;
