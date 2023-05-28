import axiosClient from "@/pages/apiAxios/axios";

const productServices = {
  getProductApi: async (id: string, role: any) => {
    console.log("có")
    const response = await axiosClient.get(
      `api/v1/food?foodId=all`
    );
    return response;
  },
};

export default productServices;
