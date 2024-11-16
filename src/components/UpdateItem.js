import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Updated import

const UpdateItem = ({ items, onUpdate }) => {
  const { id } = useParams(); // Get the item ID from URL params
  const navigate = useNavigate(); // Replaces useHistory
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setUpdatedItem(itemToEdit);
    } else {
      // Redirect to Home if no item found
      navigate("/"); // Replaces history.push
    }
  }, [id, items, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedItem);
    navigate("/"); // Redirect to Home after update
  };

  return updatedItem ? (
    <div className="container mt-4">
      <h3>Update Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Photo URL</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            value={updatedItem.photo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedItem.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={updatedItem.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={updatedItem.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update Item
        </button>
      </form>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UpdateItem;
