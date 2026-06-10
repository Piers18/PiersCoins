import { useState } from "react";
import type { CoinInterface } from "../interfaces/Coin";

const Coin = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_24h,
}: CoinInterface) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <tr className="align-middle">
      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-700 align-middle text-left">{id}</td>

      <td className="px-3 py-3 whitespace-nowrap align-middle">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-6 h-6" />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{symbol}</div>
          </div>
        </div>
      </td>

      <td className="px-3 py-3 whitespace-nowrap text-left text-sm text-gray-700 align-middle">{current_price}</td>

      <td className="px-3 py-3 whitespace-nowrap text-left text-sm text-gray-700 align-middle">{price_change_24h}</td>

      <td className="px-3 py-3 whitespace-nowrap text-left align-middle">
        <button onClick={handleFavorites} className="text-xl leading-none hover:scale-110 transition-transform" title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}>
          {isFavorite ? "★" : "☆"}
        </button>
      </td>
    </tr>
  );
};

export default Coin;
