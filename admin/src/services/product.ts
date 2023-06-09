import axiosClient from "../api/axios";

const productServices = {
  getProductApi: async (id: string, role: any) => {
    const response = await axiosClient.get(
      `api/v1/food?foodId=all`
    );
    return response;
  },
};

export default productServices;
