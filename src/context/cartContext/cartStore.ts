import { create } from "zustand";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
}

interface CartState {
    cart: Product[]
    addProduct: (product:Product) => void
    descreceProduct: (id:number) => void
    removeProduct: (id:number) => void
    clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addProduct: (product) => set((state) => {
        const productInCart = state.cart.find(p => p.id === product.id)
        if(productInCart){
            return {
                cart: state.cart.map((p) => p.id === product.id ? {...p, quantity:p.quantity + 1 } : p )
            }
        }

        return {cart: [...state.cart, product]}
    }),
    descreceProduct: (id) => set((state) => {
        const productInCart = state.cart.find(p => p.id === id)

        if(!productInCart) return { cart: [...state.cart] }

        

        return { cart: state.cart.map((p) => p.id === id ? {...p, quantity: p.quantity - 1} : p)}
    }),
    
    removeProduct: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
    clear: () => set({ cart:[] }),
}))