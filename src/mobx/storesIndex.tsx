import { createContext } from "react";
import { configure } from "mobx";
import userStore from "./UserStore/UserStore";
import shopStore from "./ShopStore/ShopStore";

configure({
  enforceActions: "never",
});

const stores = {
  userStore,
  shopStore,
};

export type StoresType = typeof stores;

export const storesContext = createContext(stores);

export default stores;
