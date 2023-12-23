import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./input.css"

const SearchInput = () => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState("")

  // Event handler for input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="search-input ">
      <input
        type="text"
        value={inputValue} // The value is controlled by the state
        onChange={handleInputChange} // Update the state on input changes
        placeholder="Search"
        onSubmit={handleSubmit}
        className="glassmorphic outline-none"
      />
      <span className="search-icon">
        <FaSearch />
      </span>
    </div>
  )
}

export default SearchInput
