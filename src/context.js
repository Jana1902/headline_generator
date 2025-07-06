import { create } from "zustand";
import { axiosInstance } from "./axio";
import toast from "react-hot-toast";

export const dataContext = create((set, get) => ({
  businessInfo: null,
  businessData: null,
  isLoading: false,
  regenerationLoading: false,
  getBusinessData: async (data) => {
    set({ isLoading: true });
    try {
      set({businessInfo: data})
      const res = await axiosInstance.post("/business-data", data);
      set({ businessData: res.data.businessData });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
  regenerateHeadline: async () => {
    set({ regenerationLoading: true });
    try {
      const {name, location} = get().businessInfo;
      const res = await axiosInstance.get(`/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`);
      const updatedData = get().businessData;
      const newData = { ...updatedData, headline: res.data.headline };
      set({ businessData: newData });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ regenerationLoading: false });
    }
  },
}));
