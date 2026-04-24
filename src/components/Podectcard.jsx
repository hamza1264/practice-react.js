import React from 'react';
// import { ProdData } from './data/Data';

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.img} alt={product.title} style={styles.image} />

      <div style={styles.content}>
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.price}>Rs. {product.price}</p>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "280px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  },
  content: {
    padding: "15px",
    textAlign: "center"
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333"
  },
  price: {
    fontSize: "16px",
    color: "#27ae60",
    marginBottom: "15px"
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
};



export default ProductCard;

