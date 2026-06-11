import CoinContainer from "./components/CoinContainer";
import CoinInfo from "./components/CoinInfo";
import CoinTable from "./components/CoinTable";
import Layout from "./components/Layout";
import NotFoudPage from "./components/NotFoutPage";
import WatchlistContainer from "./components/WatchlistContainer";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CoinContainer/>}/>
          <Route path="watchlist" element={<WatchlistContainer/>}/>
          <Route path="coin/:id" element={<CoinInfo/>}/>
          <Route path="*" element={<NotFoudPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
