import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={item.photo}
              alt={item.name}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <div className="d-flex justify-content-between">
                <Link to={`/update/${item.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
