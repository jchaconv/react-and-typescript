import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";


export const store = configureStore({

    reducer: {
        cart: cartSlice.reducer
    }

});

/* Para entender el typeOf. N sería string */
/*let name = 'Max';
type N = typeof name;*/

export type AppDispatch = typeof store.dispatch;

// para el selector. estamos interesados en el tipo de valor
// del retorno de getState. ReturnType es propio de Typescript.
export type RootState = ReturnType<typeof store.getState>;