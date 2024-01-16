import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Modal } from "./Modal";

const ExamRow = ({
  data,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const onAddProducts = (data) => {
    if (allProducts.find((item) => item.id === data.id)) {
      const products = allProducts.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + data.price * data.quantity);
      setCountProducts(countProducts + data.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + data.price * data.quantity);
    setCountProducts(countProducts + data.quantity);
    setAllProducts([...allProducts, data]);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center border p-3 rounded-lg uppercase font-medium mb-1">
        <button className="w-5 flex justify-center" onClick={() => onAddProducts(data)}>
          <BsFillCartPlusFill className="text-4xl"/>
        </button>
        <div className="w-1/2 text-sm font-normal">
          <span>{data.exam}</span>
        </div>
        <div className="">
          <span>S/. {data.price}.00</span>
        </div>
        <div className="">
          <button
            className="uppercase px-2 py-2  rounded-full text-sm"
            onClick={() => setShowModal(true)}>
            <FaExclamationCircle className="text-xl" />
          </button>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        data={data}
      />
    </div>
  );
};
export default ExamRow;
