import { useEffect, useRef, useState } from "react";
import type { CoinInterface } from "../interfaces/Coin";
import CoinTable from "./CoinTable";
import CoinNotFound from "./CoinNotFound";
import Loading from "./Loading";
import ErroDataFeching from "./ErrorDataFeching";
import { URL_API, URL_COINS } from "../constants/api.ts"

const CoinContainer = () => {
  const [coinsList, setCoinsList] = useState<CoinInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorBug, setError] = useState<string | null>(null);
  const [coinsListOriginal, setCoinsListOriginal] = useState<CoinInterface[]>(
    [],
  );
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(
      `${URL_API}${URL_COINS}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCoinsListOriginal(data);
        setCoinsList(data);
      })
      .catch((error) => {
        console.log("Error al obtener los datos:", error);
        setError("Error al obtener los datos")
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const searchValue = searchInput.current?.value ?? "";
    const newCoinsList = coinsListOriginal.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    );
    setCoinsList(newCoinsList);
  };

  if (isLoading) {
    return <Loading />;
  }

  if(errorBug){
    return <ErroDataFeching errorBug={errorBug} />
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1>Lista de criptomonedas</h1>
      <div className="flex items-center justify-items-start mb-3">
        <input
          type="text"
          placeholder="Buscar criptomonedas"
          ref={searchInput}
          onChange={handleSearch}
          aria-label="Buscar criptomonedas"
          className="w-72 max-w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
        <CoinTable coinsList={coinsList}></CoinTable>
      </div>

      {coinsListOriginal.length > 0 && coinsList.length === 0 && (
        <CoinNotFound />
      )}
    </div>
  );
};

export default CoinContainer;
