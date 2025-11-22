import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-40 -right-12 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Step Into
              <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent"> Motion</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-white/80"
            >
              Premium sneakers designed for comfort and crafted to turn heads. Built with responsive foam and breathable knit for an all‑day glide.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#collection"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-400/20"
              >
                Explore Collection
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 backdrop-blur-xl"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotate: -8, y: 30, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-[2rem] bg-gradient-to-br from-slate-900/50 to-slate-800/40 p-6 ring-1 ring-white/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.25),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.25),transparent_45%)]" />
              <motion.img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Futuristic Sneaker"
                className="relative z-10 mx-auto -mt-8 w-[85%] drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 16 }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-6 py-2 text-sm text-white/80 ring-1 ring-white/10 backdrop-blur"
              >
                Hover to see the glow
              </motion.div>

              <motion.div
                whileHover={{ boxShadow: "0 0 120px 10px rgba(56,189,248,0.3)" }}
                className="pointer-events-none absolute inset-0 rounded-[2rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
