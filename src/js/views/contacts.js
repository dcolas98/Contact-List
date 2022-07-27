import React, {useContext} from "react";
import {Context} from "../store/appContext"

export const Contact = () => {
    const {store, actions} = useContext(Context)
    console.log(store);
return <div>
    {store.data.map((item, index) => {
        return (
            <div key = {index}>{item.full_name}</div>
        )
    })}
</div>
}