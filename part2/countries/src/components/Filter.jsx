const Filter = ({ searchFor, handleSearchFor }) => (
  <div>
    filter shown with <input value={searchFor} onChange={handleSearchFor} />
  </div>
)

export default Filter
