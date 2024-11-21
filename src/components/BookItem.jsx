import React from 'react'
import '../../src/index.css'

export default function BookItem({ title, description }) {
  return (
    <div className="book-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}