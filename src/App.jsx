import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Products from "./pages/Products";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Ürünler",
        element: <Products />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          { path: "hikaye", element: <Story /> },
          { path: "roman", element: <Novel /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/ürünler" element={<Products />} />
    //     <Route path="/category" element={<Category />}>
    //       <Route path="hikaye" index element={<Story />} />
    //       <Route path="roman" element={<Novel />} />
    //     </Route>
    //     <Route path="/detail/:id" element={<Detail />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
};

export default App;
