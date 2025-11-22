import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_45%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Collection />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} ShoeLabs — Designed for motion.
        </p>
      </footer>
    </div>
  )
}

export default App
