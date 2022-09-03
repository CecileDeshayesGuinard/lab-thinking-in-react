// src/components/SearchBar.js

function SearchBar () {
  
  return(
      <div>
        <form>
          <h2>Search</h2>
          <input className="seachInput" type="text"></input>
          <div className="prodStock">
            <input className="stockClick" type="checkbox"></input>
            <p>Only show product in stock</p>
          </div>

        </form>
      </div>    
  )
}

export default SearchBar;