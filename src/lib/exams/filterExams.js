export const filterExamsByName = (exams, search) => {
  if (!search) return [...exams];

    const lowerCasedSearch = search.toLowerCase();
  
    return exams.filter((ex) => ex.exam.toLowerCase().includes(lowerCasedSearch))
     
  };
  
   export const paginateExams = (exams, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return exams.slice(startIndex, endIndex)
  }