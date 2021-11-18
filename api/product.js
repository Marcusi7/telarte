import { BASE_PATH} from "../utils/constants";

export async function getLastProductsApi(limit) {
    try {
        const limitItems= `_limit=${limit}`;
        const sortItem = "_sort=createdAt:desc";
        const url = `${BASE_PATH}/products?${limitItems}&${sortItem}`;      //products es la conexión del strapi no de la carpeta
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProductsCategoriaApi(categoria, limit, start){
    try {
        const limitItems = `_limit=${limit}`;
        const sortItems = `_sort=createdAt:desc`;
        const startItems = `_start=${start}`;

        const url = `${BASE_PATH}/products?categoria.url=${categoria}&${limitItems}&${sortItems}&${startItems}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null; 
    }
}
export async function getTotalProductsCategoriaApi(categoria){
      try{
        const url=`${BASE_PATH}/products/count?categoria.url=${categoria}`;
        const response= await fetch(url);
        const result= await response.json();
        return result;
      }catch(error){
        console.log(error);
        return null;

      }
}


export async function getProductByUrlApi(path) {
try {
    const url = `${BASE_PATH}/products?url=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    return result[0];
} catch (error) {
    console.log(error);
    return null;
}
}
