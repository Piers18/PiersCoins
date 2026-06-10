const Loading = () => {
  return (
    <div className="flex items-center justify-center h-48 text-gray-500">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-400 rounded-full animate-spin mr-3" />
      Cargando...
    </div>
  );
};

export default Loading;
