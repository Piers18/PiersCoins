import { Link } from "react-router-dom";

const NotFoudPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <p className="text-8xl font-bold text-blue-400">404</p>
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">Página no encontrada</h1>
      <p className="text-gray-500 mt-2">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="mt-6 px-5 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoudPage;