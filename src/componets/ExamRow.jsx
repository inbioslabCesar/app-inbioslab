import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Modal } from "./Modal";

const ExamRow = ({
  exam,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const onAddProducts = (exam) => {
    if (allProducts.find((item) => item.id === exam.id)) {
      const products = allProducts.map((item) =>
        item.id === exam.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + exam.price * exam.quantity);
      setCountProducts(countProducts + exam.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + exam.price * exam.quantity);
    setCountProducts(countProducts + exam.quantity);
    setAllProducts([...allProducts, exam]);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center border p-3 rounded-lg uppercase font-medium mb-1">
        <div className="w-10">
          <span>00{exam.id}</span>
        </div>
        <button className="w-5 flex justify-center" onClick={() => onAddProducts(exam)}>
          <BsFillCartPlusFill className=""/>
        </button>
        <div className="w-1/2 text-sm font-normal">
          <span>{exam.exam}</span>
        </div>
        <div className="">
          <span>S/. {exam.price}.00</span>
        </div>
        <div className="">
          <button
            className="uppercase px-2 py-2  rounded-full text-sm"
            onClick={() => setShowModal(true)}>
            <FaExclamationCircle className="" />
          </button>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        exam={exam}
      />
    </div>
  );
};
export default ExamRow;
