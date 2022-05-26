import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import ProfileEditPage from "pages/ProfileEditPage";
import DonatePage from "pages/DonatePage";
import MarketPage from "pages/MarketPage";
import RankingPage from "pages/RankingPage";
import ItemDetail from "pages/ItemDetailpage";
import SalesRegist from "pages/SalesRegistPage";

export default function routes(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profileEdit" element={<ProfileEditPage />} />
      <Route path="/donate" element={<DonatePage props={props} />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/market/:itemId" element={<ItemDetail props={props} />} />
      <Route path="/profile/:itemId" element={<SalesRegist props={props} />} />
    </Routes>
  );
}
