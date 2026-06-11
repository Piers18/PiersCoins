import { useEffect, useState } from "react";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import type { CoinInterface } from "../interfaces/Coin";
import ErroDataFeching from "./ErrorDataFeching";

const CoinInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState<CoinInterface | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `${URL_API}${URL_COINS}&x_dg_demo_api_key=${COINGECKO_API_KEY}&ids=${id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data[0]) {
          setError(`No se encontró la moneda "${id}"`);
          return;
        }
        setCoinData(data[0]);
      })
      .catch((e) => {
        console.log("Error en traer la moneda:", e);
        setError("Error al traer la moneda");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErroDataFeching errorBug={error} />;
  }

  if (!coinData) return null;

  const priceUp = coinData.price_change_24h >= 0;

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 mb-8">
        <img src={coinData.image} alt={coinData.name} className="w-14 h-14 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{coinData.name}</h1>
          <span className="text-xs text-gray-400 uppercase tracking-widest">{coinData.symbol}</span>
        </div>
      </div>

      <div className="flex items-end justify-between pb-6 border-b border-gray-100">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Precio actual</p>
          <p className="text-4xl font-bold text-gray-900">${coinData.current_price.toLocaleString()}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${priceUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
          {priceUp ? "▲" : "▼"} ${Math.abs(coinData.price_change_24h).toFixed(2)}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Cambio 24h</p>
        <p className={`text-lg font-semibold ${priceUp ? "text-green-500" : "text-red-500"}`}>
          {priceUp ? "+" : "-"}${Math.abs(coinData.price_change_24h).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CoinInfo;
