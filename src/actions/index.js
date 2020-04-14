export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = newItem => {
    console.log("Add item was fired");
    console.log(newItem);
    return{
        type: ADD_ITEM,
        payload: newItem
    }
}

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}