import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold group">
        <span className="text-blue-400">Crypto</span>
        <span className="text-white group-hover:text-blue-400 transition-colors">Piers</span>
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-blue-400 transition-colors">
          Overview
        </Link>
        <Link to="/watchlist" className="hover:text-blue-400 transition-colors">
          Watchlist
        </Link>
      </nav>
    </div>
  </header>
);

export default Header
