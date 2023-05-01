import { createContext } from "react";

interface ProductContextProps {
    dataFoodProducts: any
}

export const ProductContext = createContext<ProductContextProps>(null!);
