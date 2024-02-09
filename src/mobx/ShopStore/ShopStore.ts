import { action, makeObservable, observable } from "mobx";
import { ShopItems } from "./types";

export class ShopStoreClass {
  shopItems: ShopItems = [];
  page: number = 1;

  constructor() {
    makeObservable(this, {
      shopItems: observable,
      fetchShopItems: action,
    });
  }

  fetchShopItems = async () => {
    // Fetch shop items from server
  };
}

const shopStore = new ShopStoreClass();

export default shopStore;
