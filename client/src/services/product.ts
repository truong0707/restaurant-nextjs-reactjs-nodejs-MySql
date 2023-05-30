import callApiWithToken from "@/pages/apiAxios/callApiWithToken";


const productServices = {
  getProductApi: async (token:string, id: string) => {
    const response = await callApiWithToken(token).get(
      `api/v1/food?foodId=${id}`
    );
    return response;
  },
};

export default productServices;
