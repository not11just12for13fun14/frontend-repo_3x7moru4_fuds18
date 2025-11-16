import { useEffect, useState, useRef } from 'react'
import ProductCard from './ProductCard'

export default function Products({ onQuickOrder }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const listRef = useRef(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/bouquets`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const scrollToList = () => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // expose for parent
    if (typeof onQuickOrder === 'function') {
      // no-op
    }
  }, [onQuickOrder])

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Bouquets</h2>
            <p className="text-gray-600">Hand-picked bestsellers and seasonal arrangements</p>
          </div>
          <button onClick={scrollToList} className="px-4 py-2 rounded-full border text-gray-700 hover:bg-gray-50">View all</button>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 bg-rose-50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div ref={listRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((it) => (
              <ProductCard key={it.id} item={it} onSelect={onQuickOrder} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
