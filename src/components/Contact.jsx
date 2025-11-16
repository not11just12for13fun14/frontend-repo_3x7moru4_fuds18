import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: form.name,
          email: form.email,
          phone: form.phone,
          quantity: 1,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Custom Orders & Inquiries</h2>
          <p className="mt-2 text-gray-600">Tell us about your dream bouquet—colors, style, budget—and we'll craft something perfect.</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Wedding and event arrangements</li>
            <li>• Home decor sets and vases</li>
            <li>• Personalized gift wrapping</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-white rounded-xl border border-rose-100 shadow-sm p-6">
          <div className="grid grid-cols-1 gap-4">
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required />
            <input className="w-full border rounded-lg px-3 py-2" type="email" placeholder="Email address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone (optional)" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
            <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Tell us about your bouquet" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} />
            <button disabled={status==='loading'} className="mt-2 px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-60">{status==='loading'?'Sending...':'Send Request'}</button>
            {status==='success' && <p className="text-green-600">Thanks! We'll get back to you shortly.</p>}
            {status==='error' && <p className="text-rose-600">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
