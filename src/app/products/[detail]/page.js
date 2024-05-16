import React from 'react'

const ProductDetail = ({params}) => {
    console.log(params)
    console.log(params.detail)
  return (
    <div>ProductDetail Page {params.detail}</div>
  )
}

export default ProductDetail