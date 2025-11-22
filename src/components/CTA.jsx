import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600 to-sky-500 p-8 sm:p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to feel the glide?</h3>
          <p className="mt-3 text-white/90">Free shipping and 30‑day returns on all orders this week only.</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg"
          >
            Get Yours Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
