import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "AeroFlow Runner",
    price: "$129",
    color: "Frost White / Neon Sky",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf9ce7432f1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pulse X Training",
    price: "$149",
    color: "Graphite / Laser Pink",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Nimbus Glide",
    price: "$139",
    color: "Deep Navy / Arctic Blue",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop",
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          New Arrivals
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="h-64 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{p.name}</p>
                    <p className="text-xs text-white/70">{p.color}</p>
                  </div>
                  <p className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-slate-900 shadow">{p.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full rounded-xl border border-white/20 px-4 py-2 font-semibold text-white/90 backdrop-blur-xl"
                >
                  Add to Bag
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
