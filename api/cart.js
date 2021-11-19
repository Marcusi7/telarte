import { toast } from "react-toastify";
import { size, include, remove, includes } from "lodash-es";
import { BASE_PATH, CART } from "../utils/constants";
import { Item } from "semantic-ui-react";

export function getProductsCart() {     
    const cart = localStorage.getItem(CART);      //usamos localstorage para que guarde creo que por sesión
    

    if (!cart) {
        return null;
    } else {
        const products = cart.split(",");
        return products;
    }
}

export function addProductCart(product) {
    const cart = getProductsCart();

    if (!cart) {
        localStorage.setItem(CART, product);
        toast.success("Se ha añadido el producto al carrito");
    } else {
        const productFound = includes(cart, product);
        if (productFound) {
            toast.warning("Ya se encuentra añadido este producto al carrito");
        } else {
            cart.push(product);
            localStorage.setItem(CART, cart);
            toast.success("producto añadido al carrito");
        }
    }
}

export function countProductsCart() {
    const cart = getProductsCart();

    if (!cart) {
        return 0;
    } else {
        return size(cart);
    }
}

export function removeProductCart(product) {
    const cart = getProductsCart();

    remove(cart, (item) => {
        return item === product;
    });

    if(size(cart) > 0) {
        localStorage.setItem(CART, cart);
    } else {
        localStorage.removeItem(CART);
    }
}