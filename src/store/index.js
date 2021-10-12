import { configureStore } from "@reduxjs/toolkit";
import reduceItemList from "./starterList"

export default configureStore({
    reducer: {
        itemList: reduceItemList,
    }
})