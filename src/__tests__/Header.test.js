// UNIT test for header
//To test- logo, cart-0 items,online status

import {render} from "@testing-library/react";
import Header from "../components/Header";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import store from "../utils/store";

test("logo should load on rendering Header",()=>{
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const logo=header.getByTestId('logo');
    // console.log(logo)
    expect(logo.src).toBe("https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg");
})

test("Cart should have 0 items on rendering Header",()=>{
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const cart=header.getByTestId('cart');
    // console.log(cart)
    expect(cart.innerHTML).toBe("cart 0 items");
})

test("Status should be online on rendering Header",()=>{
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const status=header.getByTestId('status');
    // console.log(cart)
    expect(status.innerHTML).toBe('🟢');
})