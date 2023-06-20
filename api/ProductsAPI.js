import { AxiosInstance } from "./AxiosInstance";

const ProductsAPI = {
  GetProductsList: () => {
    return AxiosInstance.get(`/products`)
  },
  GetById: (id) => {
    return AxiosInstance.get(`products/${id}`);
  },
};

export default ProductsAPI;