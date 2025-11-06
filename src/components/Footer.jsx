import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 bg-accent text-gray-300 py-6 shadow-smooth">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {year} <span className="text-gold font-semibold">Sprint4</span>. Todos os direitos reservados.
        </p>

        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-gold transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
