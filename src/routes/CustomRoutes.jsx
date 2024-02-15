import { Routes, Route } from "react-router-dom";
import SocialApp from "../components/SocialApp";
import UserDetails from "../components/UserDetails/UserDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:userId" element={<UserDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
