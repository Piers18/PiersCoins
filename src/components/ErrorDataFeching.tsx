const ErroDataFeching = ({ errorBug }: { errorBug: string }) => {
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
      <p className="text-lg font-semibold text-red-700">Algo salió mal</p>
      <p className="text-sm text-red-500 mt-1">{errorBug}</p>
    </div>
  );
};

export default ErroDataFeching;
