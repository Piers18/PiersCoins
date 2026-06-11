import type { CoinInterface } from "../interfaces/Coin";
import Coin from "./Coin";

const CoinTable = ({ coinsList }: { coinsList: CoinInterface[] }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider w-12">
            #
          </th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Name
          </th>
          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Price
          </th>
          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
            24h Change
          </th>
          <th className="px-4 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Favorite
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100">
        {coinsList.map((coin, index) => (
          <Coin
            key={coin.id}
            rank={index + 1}
            id={coin.id}
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