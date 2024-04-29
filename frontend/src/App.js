// frontend/src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    fetch(`/api/users?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UserList users={searchResults.length > 0 ? searchResults : null} />
    </div>
  );
}

export default App;
