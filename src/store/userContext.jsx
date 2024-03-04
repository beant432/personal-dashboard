import { createContext } from "react";
import profilePic from "../assets/profile.jpg";
import { profile_details } from "../utils/constant";

const UserContext = createContext({
  name: profile_details.name,
  email: profile_details.email,
  profile_pic: profilePic,
  linkedin: profile_details.linkedin,
});
export default UserContext;
