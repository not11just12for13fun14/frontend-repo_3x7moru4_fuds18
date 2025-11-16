import { motion } from 'framer-motion'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-fuchsia-200/50 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Timeless Artificial Flower Bouquets
          </motion.h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Elegant, long-lasting arrangements crafted to brighten homes, events, and special moments—without the upkeep.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button onClick={onShopClick} className="px-6 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition shadow">
              Shop Bouquets
            </button>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              Custom Order
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Free gift wrapping • Local delivery available • 7-day returns</div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur border border-rose-100 shadow-lg p-4 grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
