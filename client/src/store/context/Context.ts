import { createContext } from "react";

interface ProductContextProps {
    dataFoodProducts: any
}
interface LocalStorageContext {
    local: any
}

export const ProductContext = createContext<ProductContextProps>(null!);
export const LocalStorageContext = createContext<LocalStorageContext>(null!);
