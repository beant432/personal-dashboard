import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Weather from "../pages/Weather";
import UserProfile from "../pages/UserProfile";

describe("User Profile component Test Cases", () => {
  it("Should load Profile component", () => {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );
    const profileData = screen.getByText("User Profile");

    expect(profileData).toBeInTheDocument();
  });

  it("Should load Name in Profile component", () => {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );
    const name = screen.getByText("Beant Kaur");

    expect(name).toBeInTheDocument();
  });
  it("Should load Email in Profile component", () => {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );
    const email = screen.getByText("beantkaur8898@gmail.com");

    expect(email).toBeInTheDocument();
  });
  it("Should load linkedin in Profile component", () => {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );
    const linkedin = screen.getByText(
      "https://www.linkedin.com/in/beantkaur-frontenddeveloper/"
    );

    expect(linkedin).toBeInTheDocument();
  });
  it("Should load image in Profile component", () => {
    render(
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    );
    const userProfile = screen.getByAltText("user-pic");

    expect(userProfile).toBeInTheDocument();
  });
});
