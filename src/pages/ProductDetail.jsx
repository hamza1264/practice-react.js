import React from 'react'
import { useParams } from 'react-router-dom'
import { ProdData } from '../data/Data'


function ProductDetail() {
    const { title } = useParams()
    console.log("product=>", title);

    const product = ProdData.find((prod) => prod.title === title)
    console.log("product=>", product);

    return (
        <div>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <img src={product.img} alt="shose image" />
        </div>
    )
}

export default ProductDetail
