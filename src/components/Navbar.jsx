import { Menu, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -12, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-400 shadow-lg shadow-fuchsia-500/30"
            >
              <ShoppingBag className="h-5 w-5 text-white" />
            </motion.div>
            <div className="text-white">
              <p className="text-lg font-bold leading-none">ShoeLabs</p>
              <p className="text-xs text-white/70">Feel the motion</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#collection" className="hover:text-white transition">Collection</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow-lg shadow-sky-400/20"
            >
              Shop Now
            </motion.button>
            <button className="md:hidden text-white/80">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
