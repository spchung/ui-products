import React, { useState } from "react";
import "./UserInput.css";

interface UserInputProps {
  onSearch: (query: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query); // Pass the data to the onSearch callback prop
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="user-input">
        <div className="input-search">
          <input style={{width: '70%'}} type="text" placeholder="Search for products..." value={query} onChange={handleChange} />
          <button type="submit">Search</button>
        </div>        
      </form>
    </div>  
  );
};

export default UserInput;
