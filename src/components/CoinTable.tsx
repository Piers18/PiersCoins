import type { CoinInterface } from "../interfaces/Coin";
import Coin from "./Coin";

const CoinTable = ({ coinsList }: { coinsList: CoinInterface[] }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-white">
        <tr>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
            Name
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            24h Change
          </th>
          <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Favorite
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100">
        {coinsList.map((coin, index) => (
          <Coin
            key={coin.id}
            id={index + 1}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change_24h={coin.price_change_24h}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable