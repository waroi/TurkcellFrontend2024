"use client";
import React, { useState } from "react";
import "@/app/styles/components/AddReview.scss";

const AddReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const day = new Date().getDate();
    const month = "August";
    const year = new Date().getFullYear();
    const id = Math.floor(Math.random() * 1000) + 1;
    const star = parseInt(stars);
    const review = {
      id,
      name,
      comment: description,
      stars: star,
      day,
      month,
      year,
    };

    try {
      const response = await fetch("http://localhost:3001/Comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      closeModal();
      // Reset form fields
      setName("");
      setDescription("");
      setStars(0);
      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="add-review" onClick={openModal}>
        Write a review
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>Write a Review</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Your Description:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="stars">Stars:</label>
                <input
                  type="number"
                  id="stars"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;
