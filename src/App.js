import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import Home from "./components/Home";
import ComingSoon from './components/ComingSoon'; // Import the ComingSoon component
import UpdateItem from "./components/UpdateItem";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Item One",
      description: "Description for Item One",
      quantity: 10,
      photo: "https://imgs.search.brave.com/8d2MBwrD8ycjbid-ZGanjee4sTg6yVAdPa1dX6_n98k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUzLzEzLzQ4/LzM2MF9GXzI1MzEz/NDgwNl9ZTmJrSk5n/eVpqejNjejdTR3kx/b0ZkWUIzTWFHWTZ3/dy5qcGc", // Placeholder image URL
    },
    {
      id: "2",
      name: "Item Two",
      description: "Description for Item Two",
      quantity: 5,
      photo: "https://as1.ftcdn.net/jpg/09/18/46/18/1000_F_918461853_IPfZcggIgieVGTYYr5fmoDLB9B47CRwM.jpg", // Placeholder image URL
    },
    {
      id: "3",
      name: "Item Three",
      description: "Description for Item Three",
      quantity: 8,
      photo: "https://imgs.search.brave.com/DB3disdmNGfuzdrds5gOJEIpTt1HfV3jBGdxTweTBGw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2N0dmNhbWVyYXBy/b3MuY29tL3YvTlZS/L0lQLWNhbWVyYS1O/VlIuanBn", // Placeholder image URL
    },
    {
      id: "4",
      name: "Item Four",
      description: "Description for Item Four",
      quantity: 12,
      photo: "https://imgs.search.brave.com/g1oSlFGtlrpV1av8yUgcntQCIFU7Z77ENLSDx0pmhL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2N0dmNhbWVyYXBy/b3MuY29tL3YvY2N0/di9IRC1TZWN1cml0/eS1DYW1lcmFzLmpw/Zw", // Placeholder image URL
    },
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleUpdate = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  };

  return (
    <Router>
      <Navbar /> {/* Add Navbar component */}

      <Routes> {/* Changed from Switch to Routes */}
        {/* Home page - List of items */}
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              onDelete={handleDelete}
            />
          }
        />
          {/* Add route for coming soon pages */}
          <Route path="/coming-soon/:id" element={<ComingSoon />} />
        {/* Update Item page */}
        <Route
          path="/update/:id"
          element={
            <UpdateItem
              items={items}
              onUpdate={handleUpdate}
            />
          }
        />
      </Routes>

      <Footer /> {/* Add Footer component */}

    </Router>
  );
}

export default App;
