import React from 'react';
// import { ProdData } from './data/Data';

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.img} alt={product.title} style={styles.image} />

      <div style={styles.content}>
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.description}>{product.discription}</p>
        <h3 style={styles.price}>Rs. {product.price}</h3>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}



const styles = {
  card: {
    width: "270px",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    display: "inline-block",
    margin: "15px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    

  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "transform 0.3s ease"
  },

  content: {
    padding: "15px",
    textAlign: "center"
  },

  title: {
    fontSize: "25px",
    fontWeight: "700",
    color: "#222",
    margin: "10px",
    textTransform: "capitalize"
  },

  description: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "10px",
    lineHeight: "1.4",
    height: "40px",
    overflow: "hidden",
    textTransform: "capitalize",
    textAlign: "center",
    margin: "0 10px"
  },

  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: "10px"
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    margin: "10px" 
  }
};

export default ProductCard;

