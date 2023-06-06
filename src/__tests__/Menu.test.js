// Integration Testing for Add to Cart FLow

import {fireEvent, render, waitFor} from "@testing-library/react";
import Menu from "../pages/MenuPage";
import Header from "../components/Header";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import store from "../utils/store";
import {MENU_DATA} from "../utils/data";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MENU_DATA);
        }
    })
});
test("add items to cart",async()=>{
    const menu=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <Menu/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(menu.getByTestId('menu')));
    const addBtn=menu.getAllByTestId("addbtn");
    fireEvent.click(addBtn[0])
    const cart=menu.getByTestId("cart");
    expect(cart.innerHTML).toBe("cart 1 items")
})