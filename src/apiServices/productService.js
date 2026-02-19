import httpRequest from "@/utils/httpRequest";
import { MOCK_PRODUCTS } from "@/MockData/MockData";

const getProduct = async (params) => {
  try {
    const res = await httpRequest.get("/product", {
      params,
    }); //params là key -> key này sẽ đẩy toàn bộ dữ liệu object param lên url làm query parameters
    return res;
  } catch (error) {
    // log error or handling custom logic here
    return MOCK_PRODUCTS;
  }
};

const getDetailProduct = async (id) => {
  const res = await httpRequest.get(`/product/${id}`);
  return res.data;
};

const getRelatedProducts = async (id) => {
  const res = await httpRequest.get(`/related-products/${id}`);
  return res.data.relatedProducts;
};

export { getProduct, getDetailProduct, getRelatedProducts };
