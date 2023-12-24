import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./input.css"

const SearchInput = ({ onSelectLocation }) => {
  // State to manage the input value and suggestions
  const [inputValue, setInputValue] = useState("")
  const [suggestions, setSuggestions] = useState([])
  let typingInterval

  // Event handler for input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    clearInterval(typingInterval)
    const { value } = event.target

    typingInterval = setInterval(() => {
      clearInterval(typingInterval)
      searchLocation(value)
    }, 500)
  }

  function searchLocation(keyword) {
    if (keyword) {
      // request to nominatim api
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${keyword}&format=json`
      )
        .then((response) => response.json())
        .then((json) => {
          // get response data from nominatim
          console.log("json", json)
          if (json.length > 0) {
            setSuggestions(json)
          } else {
            setSuggestions([])
          }
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error)
        })
    } else {
      setSuggestions([]) // Clear suggestions if input is empty
    }
  }

  const handleSuggestionClick = (lat, lon) => {
    console.log("Latitude:", lat)
    console.log("Longitude:", lon)
    // Call the callback function passed from the parent component
    const data = [lat, lon]
    onSelectLocation(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Perform any action on form submission if needed
  }

  return (
    <div className="search-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
        onSubmit={handleSubmit}
        className="glassmorphic outline-none"
      />
      <span className="search-icon">
        <FaSearch />
      </span>
      {suggestions.length > 0 && (
        <ul className="suggestion">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() =>
                handleSuggestionClick(suggestion.lat, suggestion.lon)
              }
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchInput
