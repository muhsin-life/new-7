import { Store } from "@/types/cart";
import { Product } from "@/types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { STORE_DATA_INIT } from "@/config";
type CartState = {
  store: Store;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
        store:{...{
            user: {},
            auth: {
              busy: false,
              deliver: "",
              loggedIn: false,
              redirect: "/dashboard",
              strategy: "local",
              user: false,
            },
            geoLocation: {
              country: "ae",
              dismiss: true,
              label: "",
              language: "en",
              latitude: 25.095437,
              longitude: 55.152684,
              new_method: true,
              type: "default",
            },
            boostiny: {
              click_id: null,
              traffic_source: null,
            },
            cart: {
              cart: {},
              cartId: 0,
              data: [],
              deliveryAllTogether: false,
              deliveryFee: {
                express: false,
                instant: false,
              },
              gtmOrders: [],
            },
            clinic: {
              clinic: null,
              patient: null,
            },
            compare: {
              data: [],
            },
            demo: {
              campaign: 0,
              region: true,
              showNewsletter: true,
            },
            i18n: {
              routeParams: {},
            },
            queryId: null,
            utm: {
              campaign_id: null,
              expiry_date: null,
              referrer: null,
              utm_campaign: null,
              utm_medium: null,
              utm_source: null,
            },
            wishlist: {
              data: [],
            },
        }},
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "life-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
