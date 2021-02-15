import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./components/ui/Header"
import EmployeeContainer from "./components/EmployeeContainer"
import Search from "./components/Search"
import "./App.css"

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        "https://randomuser.me/api/results?name=${query}"
      )
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  }, [query])

return (
  <div className="container">
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <EmployeeContainer isLoading={isLoading} items={items} />
  </div>
  )
}

export default App;