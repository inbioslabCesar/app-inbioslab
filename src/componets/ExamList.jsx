import ExamsListRows from "./ExamsListRows";
import ExamsListFilters from "./ExamsListFilters";
import { filterExamsByName, paginateExams } from "../lib/exams/filterExams";
import { useFilters } from "../lib/hooks/useFilters";
import { useState } from "react";
import ExamsListPaginate from "./ExamsListPaginate";

const ExamList = ({ initialExams, allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {   
  const { search, ...setFilterFuntions } = useFilters();
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const { exams } = getExams(initialExams, search, page, itemsPerPage);


  return (
    <div className="w-full max-w-lg m-auto p-4">
      <h1 className="lista text-2xl font-bold mb-1">
        Cotiza con Nosotros
      </h1>
      <ExamsListFilters search={search} {...setFilterFuntions} />

      <ExamsListRows exams={exams} allProducts={allProducts}
       setAllProducts={setAllProducts} total={total}
       setTotal={setTotal}
       countProducts={countProducts}
       setCountProducts={setCountProducts}/>
      <ExamsListPaginate page={page}  itemsPerPage={ itemsPerPage } setPage={setPage }  setItemsPerPage={setItemsPerPage}/> 
    </div>
  );
};



const getExams = (initialExams, search, page, itemsPerPage) => {
  let examsFiltered = filterExamsByName(initialExams, search);
  examsFiltered = paginateExams(examsFiltered, page, itemsPerPage);
  return { exams: examsFiltered }
  
}

export default ExamList;
