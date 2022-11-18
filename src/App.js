import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import React, { useState } from 'react';

function App() {
  let list = contacts.slice(0, 5)
  let anotherList = contacts.slice(5)

  const [contactsList, setContactList] = useState(list)

  const addRandom = () => {
    let randomCelebrities = anotherList[Math.floor(Math.random() * anotherList.length)]
    const celebrities = [...contactsList]
    celebrities.unshift(randomCelebrities)
    console.log(celebrities)
    setContactList(celebrities)
  }

  const sortPopularity = () => {
    const allCebs = [...contactsList]
    allCebs.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0
    })
    setContactList(allCebs)
  }

  const sortName = () => {
    const allCebs = [...contactsList]
    allCebs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0
    })
    setContactList(allCebs)
  }


  const deleteContact = (contactId) => {
    const newArr = contactsList.filter(contacts => {
      return contacts.id !== contactId
    })
    setContactList(newArr)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Random Celebrities</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
      <table>
        <tr>
          <th >Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contactsList.map((contact) => (
          <tr key={contact.id}>
            <td> <img className='contactImg' src={contact.pictureUrl}></img></td>
            <td> {contact.name} </td>
            <td> {contact.popularity.toFixed(2)}</td>
            <td> {contact.wonOscar ? "🏆" : ""}</td>
            <td> {contact.wonEmmy ? "🏆" : ""}</td>
            <td> <button onClick={() => deleteContact(contact.id)}> Delete </button> </td>
          </tr>
        )
        )}

      </table>
    </div>
  );
}

export default App;
