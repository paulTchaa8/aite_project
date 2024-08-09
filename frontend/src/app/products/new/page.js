'use client'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CreateProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const product = { name, price, description, category, image }
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, product)
      router.push('/')
    } catch (error) {
      console.error('erreur ajout =>', error)
    }
  }

  return (
      <div className="form-container">
        <Link href="/">
          <div className="create-product-link">
            Retour
          </div>
        </Link>
        <h1>Ajouter un produit</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom produit"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Categorie"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Lien Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
  )
}
