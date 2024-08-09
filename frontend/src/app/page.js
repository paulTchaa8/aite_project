'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?search=${search}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erreur liste produits:', error));
  }, [search])

  return (
    <div>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Link href="/products/new">
          <div className="create-product-link">
            Ajouter un Produit
          </div>
        </Link>
      </div>
      
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home