const Header = () => (
  <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-2xl font-bold">
        <span className="text-blue-400">Crypto</span>
        <span className="text-white">Piers</span>
      </div>
      <nav className="flex gap-4">
        <a href="" className="hover::text-blue-400 transition-colors">
          Overview
        </a>
        <a href="" className="hover::text-blue-400 transition-colors">
          Watchlist
        </a>
      </nav>
    </div>
  </header>
);

export default Header
