import {create} from 'zustand';

export const useBooks = create((set) => ({
  wishlist: [],
  addToWishlist: (book) => set((state) => ({ wishlist: [...state.wishlist, book] })),

}));

