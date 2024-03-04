import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Todo from "../pages/ToDoList";
import Weather from "../pages/Weather";

describe("Should render Header component", () => {
  it("Should load To Do component", () => {
    render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    );
  });

  it("Should load Weather component", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Weather />
        </BrowserRouter>
      </Provider>
    );
  });
});
