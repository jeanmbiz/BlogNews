import { Navigate, Route, Routes } from "react-router-dom";
import CommentsPage from "../Pages/CommentsPage";
import MainPage from "../Pages/MainPage";
import UserPage from "../Pages/UserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts" element={<MainPage />} />
      <Route path="/posts/:id/comments" element={<CommentsPage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesMain;
