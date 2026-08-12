"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateCartTotal } from "./pricing";
import { getProduct } from "./products";

export interface CartItem {
  slug: string;
  nameAr: string;
  qty: number;
  color: string;
}

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;
  isCheckoutOpen: boolean;
  isUpsellOpen: boolean;
  addItem: (slug: string, qty: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  openUpsell: () => void;
  closeUpsell: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  getSlugs: () => string[];
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      isCheckoutOpen: false,
      isUpsellOpen: false,

      addItem: (slug, qty) => {
        const product = getProduct(slug);
        if (!product) return;
        set((state) => {
          const existing = state.items.find((i) => i.slug === slug);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.slug === slug ? { ...i, qty: i.qty + qty } : i
              ),
              isDrawerOpen: true,
            };
          }
          return {
            items: [
              ...state.items,
              { slug, nameAr: product.nameAr, qty, color: product.color },
            ],
            isDrawerOpen: true,
          };
        });
      },

      removeItem: (slug) =>
        set((state) => ({
          items: state.items.filter((i) => i.slug !== slug),
        })),

      updateQty: (slug, qty) => {
        if (qty <= 0) {
          get().removeItem(slug);
          return;
        }
        set((state) => ({
          items: state.items.map((i) => (i.slug === slug ? { ...i, qty } : i)),
        }));
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      openCheckout: () => set({ isCheckoutOpen: true, isDrawerOpen: false }),
      closeCheckout: () => set({ isCheckoutOpen: false }),
      openUpsell: () => set({ isUpsellOpen: true, isCheckoutOpen: false }),
      closeUpsell: () => set({ isUpsellOpen: false }),

      getTotal: () => calculateCartTotal(get().items),
      getItemCount: () => get().items.reduce((s, i) => s + i.qty, 0),
      getSlugs: () => get().items.map((i) => i.slug),
    }),
    { name: "nurdakhil-cart-v1" }
  )
);
