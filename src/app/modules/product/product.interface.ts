export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: "smartphone" | "Apple" | "iOS";
  variants: [Variant];
  inventory: Inventory;
};
