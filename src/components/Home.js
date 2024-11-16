import React from "react";
import Searchbar from "./Searchbar";
import ItemList from "./ItemList";

const Home = ({ items, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ItemList items={filteredItems} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Home;
