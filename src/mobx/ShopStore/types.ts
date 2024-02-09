// export type ShopGameType = GameTypes | 'Piano';

// type NewShopItem<TItem extends ShopItemTypes> =
// 	TItem extends ShopItemTypes.Option ? GameOption
// 	: TItem extends ShopItemTypes.Preset ? gamePresetInterface
// 	: TItem extends ShopItemTypes.Theme ? ThemeOption
// 	: TItem extends ShopItemTypes.Instrument ? InstrumentOption
// 	: TItem extends ShopItemTypes.Level ? gameLevelInterface
// 	: TItem extends ShopItemTypes.Game ? ShopGameType
// 	: never;

// export interface ShopItem<TItem extends ShopItemTypes> {
// 	id: string | number;
// 	title: string;
// 	price: number;
// 	shopItemId: string;
// 	shopItemType: ShopItemTypes; // OPTIONS / COLORS / PRESETS / ETC,
// 	item: NewShopItem<TItem>;
// 	testType?: TestTypes;
// 	gameType?: GameTypes;
// }

export type ShopItems = WoodCategory[];

export type Wood = {
  id: string;
  title: string;
  subTitle: string;
  price: number;
  width: number;
  size: [number, number];
  widthCuts: number[];
  lengthCuts: number[];
  cuts: [number] | [number, number] | [number, number, number];
  image?: string;
};

export type WoodCategory = {
  id: string;
  title: string;
  woods: Wood[];
};
