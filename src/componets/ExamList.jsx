import ExamsListRows from "./ExamsListRows";
import ExamsListFilters from "./ExamsListFilters";
import { filterExamsByName, paginateExams } from "../lib/exams/filterExams";
import { useFilters } from "../lib/hooks/useFilters";
import { useState } from "react";
import ExamsListPaginate from "./ExamsListPaginate";
import "remixicon/fonts/remixicon.css";
import logo from "../images/inbioslab-logo.png";
import { Link } from "react-router-dom";
import { HOME, LOGOUT } from "../routes/paths";

const ExamList = ({
  initialData,
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

  const { datas } = getExams(initialData, search, page, itemsPerPage);

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
              <Link to={HOME} className="">Inicio</Link>      
            
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
              <span className="ml-1 text-fuchsia-800">
                945241093-945241682(Yape)
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper flex flex-col justify-center max-w-lg m-auto mt-20">
        <h1 className="text-2xl font-bold mb-1">PRECIO PÚBLICO CON UN 10% DE DESCUENTO</h1>
        <ExamsListFilters search={search} {...setFilterFuntions} />

        <ExamsListRows
          datas={datas}
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

const getExams = (initialdata, search, page, itemsPerPage) => {
  let examsFiltered = filterExamsByName(initialdata, search);
  examsFiltered = paginateExams(examsFiltered, page, itemsPerPage);
  return { datas: examsFiltered };
};

export default ExamList;
