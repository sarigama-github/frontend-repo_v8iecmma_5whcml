import { motion } from "framer-motion"
import { Sparkles, Wind, Gauge, Shield } from "lucide-react"

const features = [
  { icon: Sparkles, title: "Premium Knit", desc: "Adaptive upper that flexes with your stride for a custom fit." },
  { icon: Wind, title: "AirFlow Mesh", desc: "Breathable micro‑venting keeps feet cool and dry." },
  { icon: Gauge, title: "Reactive Foam", desc: "Energy return midsole cushions every step you take." },
  { icon: Shield, title: "GripGuard", desc: "All‑terrain outsole grips on wet and dry surfaces." },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Engineered for Everyday Motion
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-sky-400 text-white shadow-lg shadow-fuchsia-500/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
