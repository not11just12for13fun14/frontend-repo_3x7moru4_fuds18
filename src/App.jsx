import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  const productsRef = useRef(null)
  const [quickItem, setQuickItem] = useState(null)

  const handleShopClick = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuickOrder = (item) => {
    setQuickItem(item)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Petal & Poise</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="#contact" className="hover:text-gray-900">Custom</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-700">Contact</a>
        </div>
      </header>

      <Hero onShopClick={handleShopClick} />
      <Products onQuickOrder={handleQuickOrder} ref={productsRef} />
      <Contact />

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Petal & Poise. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Shipping</a>
            <a href="#" className="hover:text-gray-900">Returns</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
