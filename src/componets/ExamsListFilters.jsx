import InputSearch from './InputSearch'
const ExamsListFilters = ({search, setSearch}) => {
  return (
    <form>
        <InputSearch
          {...{
            search,
            setSearch,
          }}
        />
      </form>
  )
}

export default ExamsListFilters