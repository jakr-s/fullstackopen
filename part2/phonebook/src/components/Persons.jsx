const Persons = ({ searchFor, persons }) => {
  const filteredPersons =
    searchFor !== ""
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(searchFor.toLowerCase())
        )
      : persons;

  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
