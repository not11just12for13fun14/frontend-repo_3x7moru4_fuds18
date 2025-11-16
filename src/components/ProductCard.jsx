export default function ProductCard({ item, onSelect }) {
  return (
    <div className="group bg-white border border-rose-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-square bg-rose-50 flex items-center justify-center">
        {item.image_url ? (
          <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-rose-400">Bouquet</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{item.title}</h3>
          <span className="text-rose-600 font-bold">${item.price.toFixed(2)}</span>
        </div>
        {item.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">{t}</span>
            ))}
          </div>
        ) : null}
        <button onClick={() => onSelect(item)} className="mt-4 w-full py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
          Quick Order
        </button>
      </div>
    </div>
  )
}
