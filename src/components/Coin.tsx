import { useState } from "react";
import type { CoinInterface } from "../interfaces/Coin";
import { Link } from "react-router-dom";

const Coin = ({
  id,
  rank,
  image,
  name,
  symbol,
  current_price,
  price_change_24h,
}: CoinInterface & { rank: number }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const priceUp = price_change_24h >= 0;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 text-sm text-gray-400 text-left">
        {rank}
      </td>

      <td className="px-4 py-3">
        <Link to={`/coin/${id}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={image} alt={name} className="w-8 h-8 rounded-full" />
          <div>
            <div className="text-sm font-semibold text-gray-900">{name}</div>
            <div className="text-xs text-gray-400 uppercase">{symbol}</div>
          </div>
        </Link>
      </td>

      <td className="px-4 py-3 text-right text-sm font-medium text-gray-900">
        ${current_price.toLocaleString()}
      </td>

      <td className={`px-4 py-3 text-right text-sm font-medium ${priceUp ? "text-green-500" : "text-red-500"}`}>
        {priceUp ? "▲" : "▼"} {Math.abs(price_change_24h).toFixed(2)}
      </td>

      <td className="px-4 py-3 text-center">
        <button
          onClick={handleFavorites}
          className={`text-xl leading-none hover:scale-125 transition-transform ${isFavorite ? "text-yellow-400" : "text-gray-300"}`}
          title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          ★
        </button>
      </td>
    </tr>
  );
};

export default Coin;
