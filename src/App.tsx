import './index.css'
import React, { useState } from 'react'
import Header from './components/Header'
import ItemScreen from './components/ItemScreen'
import { UserContextProvider } from './context/userContext'
import Footer from './components/Footer'
import { CheeseContext } from './context/cheeseContext'

const cheeses = [
  {
    name: "Babibel",
    photo: "../cheese.jpg",
  },
  {
    name: "Bleu",
    photo: "../cheese.jpg",
    isAdmin: true,
  },
  {
    name: "Gouda",
    photo: "../cheese.jpg",
  },
  {
    name: "Emmental",
    photo: "../cheese.jpg",
    isAdmin: true,
  },
]

function App() {
  const [isSelected, setIsSelected] = useState(false);

  const value = { cheeses, isSelected };

  return (
    <React.Fragment>
      <CheeseContext.Provider value={value}>
        <UserContextProvider>
          <div className="container">
            <Header/>
            <ItemScreen/>
          </div>
        </UserContextProvider>
        <Footer onClick={() => setIsSelected(true)} />
      </CheeseContext.Provider>
    </React.Fragment>
  )
}

export default App;
