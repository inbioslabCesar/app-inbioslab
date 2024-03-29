import ExamsListRows from "./ExamsListRows";
import ExamsListFilters from "./ExamsListFilters";
import { filterExamsByName, paginateExams } from "../lib/exams/filterExams";
import { useFilters } from "../lib/hooks/useFilters";
import { useState } from "react";
import ExamsListPaginate from "./ExamsListPaginate";
import "remixicon/fonts/remixicon.css";
import logo from "../images/inbioslab-logo.png";
import { Link } from "react-router-dom";
import { HOME } from "../routes/paths";
import ButtonWhatsApp from "./ButtonWhatsApp";
import yape from "../images/yape.png";

const ExamListPublic = ({
  initialExams,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const { search, ...setFilterFuntions } = useFilters();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const { exams } = getExams(initialExams, search, page, itemsPerPage);

  return (
    <div>
      <header>
        <nav className="w-[90%] mx-auto overflow-hidden max-w-screen-xl h-40 flex items-center justify-between">
          <Link
            to={HOME}
            className="flex justify-center items-center mb-10  w-1/3 xl:max-w-[140px] ">
            <img
              src={logo}
              alt="logo"
              className="absolute w-full max-w-[140px]"
            />
          </Link>

          <div className="bg-sky-400 text-vary-light-gray block w-max py-3 px-5 mx-4 rounded-full hover:scale-110">
            <Link to={HOME} className="">
              Inicio
            </Link>
          </div>
        </nav>
        <div className="flex justify-center items-center -mt-16 xl:-mt-5 m-5">
          <div className="flex flex-col xl:flex-row items-center font-bold text-center">
            <div className="flex flex-col xl:flex-row items-center">
              <i className="ri-map-pin-2-fill text-2xl text-sky-400"></i>
              <div className="flex flex-col xl:flex-row ml-2">
                <span>Jr. Calleria N°135 (Central)</span>
                <span className="ml-3">Jr. Agustin Cauper N°290 (Sede-1)</span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center ml-2">
              <i className="ri-phone-fill text-2xl text-sky-400"></i>
              <span className="ml-1 text-fuchsia-800">945241093-945241682</span>
              <img src={yape} alt="yape" className="w-10 h-10 m-1" />
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper flex flex-col justify-center max-w-lg m-auto p-5">
        <div className="flex justify-center">
          <ButtonWhatsApp />
        </div>
        <h1 className="text-2xl font-bold mb-1 mt-10">
          Cotiza con nosotros y accede a un 10% de descuento!!
        </h1>
        <ExamsListFilters search={search} {...setFilterFuntions} />

        <ExamsListRows
          exams={exams}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <ExamsListPaginate
          page={page}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
};

const getExams = (initialExams, search, page, itemsPerPage) => {
  let examsFiltered = filterExamsByName(initialExams, search);
  examsFiltered = paginateExams(examsFiltered, page, itemsPerPage);
  return { exams: examsFiltered };
};

export default ExamListPublic;
