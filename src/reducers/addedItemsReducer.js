import {ADD_ITEM, REMOVE_ITEM } from '../actions';

export const initialState = {
    addedItems: [], // The objects will be stored in this array that get added
    additionalItems: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ], // by default
    additionalPrice: 0
}

export const addedItemsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            console.log("added items", state.addedItems);
            // Logic to find item to remove from the other array
            /* const itemIndexToRemove = additionalItems.indexOf(action.payload.id);
            additionalItemsCopy.splice(itemIndexToRemove, 1); */
            let newPriceAfterAdd = state.additionalPrice + action.payload.price;
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload],
                additionalPrice: newPriceAfterAdd
                /*additionalItems: additionalItemsCopy*/
            }
        case REMOVE_ITEM:
            let addedItemsCopy = [...state.addedItems];
            addedItemsCopy.splice(action.payload, 1);
            let newPriceAfterSub = state.additionalPrice - action.payload.price;
            return{
                ...state,
                addedItems: addedItemsCopy,
                additionalPrice: newPriceAfterSub
            }
        default: 
            return state;
    }
}