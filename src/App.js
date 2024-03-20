import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Feed />
        },
        {
          path: "/watch",
          element: <Watch />
        }
      ]
    }
  ])
  return (
    <div className="">
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
