import { createHashRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Weather from "./pages/Weather";
import Body from "./pages/Body";
import "./App.scss";
import Todo from "./pages/ToDoList";
import appStore from "./store/appStore";
import { Provider } from "react-redux";

const reactRouter = createHashRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <UserProfile />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },

      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <RouterProvider router={reactRouter} />
      </Provider>
    </div>
  );
};

export default App;
