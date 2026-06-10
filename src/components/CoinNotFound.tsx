const CoinNotFound = () => {
  return (
    <div
      role="status"
      className="mt-4 p-4 text-center bg-gray-50 border border-gray-100 rounded-md"
    >
      <p className="text-lg font-semibold text-gray-800">
        No se encontraron monedas
      </p>
      <p className="text-sm text-gray-500">
        Prueba otra búsqueda o borra el campo de búsqueda para ver todas las
        monedas.
      </p>
    </div>
  );
};

export default CoinNotFound;
