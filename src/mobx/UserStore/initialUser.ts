import { UserData } from "./types";

const initialUser: UserData = {
  id: "",
  name: "",
  email: "",
  language: "he",
  timestamp: new Date().valueOf().toString(), // TODO change into real time string
};

export default initialUser;
