import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} XAF</p>
      <Link href={`/products/${product._id}`}>
        <div className="create-product-link">
          Details produit
        </div>
      </Link>
    </div>
  )
}

export default ProductCard