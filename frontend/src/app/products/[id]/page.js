'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function ProductDetails({params}) {
  const [product, setProduct] = useState(null)
  // ici, l'ID du produit a afficher..
  const { id } = params

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.error('Erreur detail produit:', err))
    }
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div>
        <Link href="/">
          <div className="create-product-link">
            Retour
          </div>
        </Link>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.price} XAF</p>
        <p>{product.description}</p>
        <p>Categorie: {product.category}</p>
      </div>
    </div>
  )
}