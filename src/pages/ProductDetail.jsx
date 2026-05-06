import React from 'react'
import { useParams } from 'react-router-dom'
import { ProdData } from '../data/Data'


function ProductDetail() {
    const { title } = useParams()
    console.log("product=>", title);

    const product = ProdData.find((prod) => prod.title === title)
    console.log("product=>", product);

    //     return (
    //         <div>
    //             <h1>{product.title}</h1>
    //             <h2>Rs. {product.price}</h2>
    //             <p>{product.discription}</p>
    //             <img src={product.img} alt="shose image" />
    //         </div>
    //     )
    // }

    return (
        <div style={styles.container}>

            <div style={styles.left}>
                <img src={product.img} alt={product.name} style={styles.image} />
            </div>

            <div style={styles.right}>
                <h1 style={styles.title}>{product.title}</h1>
                <h2 style={styles.price}>Rs. {product.price}</h2>
                <p style={styles.description}>{product.discription}</p>
            </div>

        </div>
    )
};

const styles = {
    container: {
        display: "flex",
        gap: "40px",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "#f5f5f5",
        Height: "400px",
        width: "800px",
        margin: "120px auto",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        // border: "2px solid blue"
    },
    left: {
        flex: "0",
        display: "inline-block",
        margin: "15px 5px",
        justifyContent: "right",
        // border: "2px solid red"
    },

    image: {
        width: "350px",
        height: "350px",
        objectFit: "cover",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    },

    right: {
        flex: "1",
        maxWidth: "600px",
        margin: "15px 5px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        // border: "2px solid green"
    },

    title: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#222"
    },

    price: {
        fontSize: "22px",
        color: "#27ae60",
        marginBottom: "15px"
    },

    description: {
        fontSize: "16px",
        color: "#555",
        lineHeight: "1.6"
    }
};


export default ProductDetail
