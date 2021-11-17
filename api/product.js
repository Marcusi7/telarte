import { BASE_PATH} from "../utils/constants";

export async function getLastProductsApi(limit) {
    try {
        const limitItems= `_limit=${limit}`;
        const sortItem = "_sort=createAt:desc";
        const url = `${BASE_PATH}/products?${limitItems}&${sortItem}`;      //products es la conexión del strapi no de la carpeta
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}