const Persons = ({ searchFor, persons, removePerson }) => {
  const filteredPersons =
    searchFor !== ''
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(searchFor.toLowerCase())
        )
      : persons

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => removePerson(person.id)}>remove</button>
        </p>
      ))}
    </div>
  )
}

export default Persons
