import "./App.css";
import Layout from "./component/Layout";
import Login from "./pages/Login/Login";
import Category from "./pages/Main/Category/Category";
import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />

        <Route
          path="/category/:categoryValue"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
