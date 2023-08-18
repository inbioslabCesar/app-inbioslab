import { useState } from "react";

export const useFilters = () => {
    const [filters, setFilters] = useState({ search: "" });
  
  const { search } = filters
  
    const setSearch = (search) =>
      setFilters({
        ...filters,
        search
      });
    return {search, setSearch}
  }
  