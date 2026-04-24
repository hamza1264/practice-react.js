import React from 'react'
import { ProdData } from '../data/Data'
import ProductCard from '../components/Podectcard'
import { Link } from "react-router-dom"


function Product() {
  return (
    <div>
      <Link to={"/"}>
        <button>
          back to home
        </button>
      </Link>
      {
        ProdData.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.title}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}


export default Product

