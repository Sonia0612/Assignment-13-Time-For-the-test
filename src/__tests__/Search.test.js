// Integration Testing for Home Page 

import {fireEvent, render, waitFor} from "@testing-library/react";
import Body from "../components/Body";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import store from "../utils/store";
import {REST_DATA} from "../utils/data";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(REST_DATA);
        }
    })
});
test("Shimmer should load while rendering",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    const shimmer=body.getByTestId("shimmer");
    console.log(shimmer)
    expect(shimmer.children.length).toBe(10)
})

test("Rest should load on homepage",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId("search-btn")))
    const restlist=body.getByTestId("restlist");
    console.log(restlist)
    expect(restlist.children.length).toBe(15)
})

test("Search for string(food) on homepage",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId("search-btn")));
    const searchIn=body.getByTestId("search-inp")
    fireEvent.change(searchIn,{
        target:{
            value:"food"
        }
    })
    const searchBtn=body.getByTestId("search-btn");
    fireEvent.click(searchBtn)
    const restlist=body.getByTestId("restlist");
    console.log(restlist)
    expect(restlist.children.length).toBe(1)
})