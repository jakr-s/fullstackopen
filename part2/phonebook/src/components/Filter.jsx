const Filter = ({ searchFor, handleSearchFor }) => {
  return (
    <div>
      filter shown with <input value={searchFor} onChange={handleSearchFor} />
    </div>
  );
};

export default Filter;
