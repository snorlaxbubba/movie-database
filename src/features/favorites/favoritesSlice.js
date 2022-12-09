import { appStorageName } from "../../globals/globals";
import { createSlice } from '@reduxjs/toolkit';

function getFavorites() {
    let favoritesFromStorage = localStorage.getItem(appStorageName);

    if(favoritesFromStorage === null) {
        favoritesFromStorage = [];
    } else {
        favoritesFromStorage = JSON.parse(favoritesFromStorage);
    }

    return favoritesFromStorage;
}

const initialState = {
    items: getFavorites()
};

function getIndex (item, array) {
    return array.findIndex(arrayItem => arrayItem.id === item.id);
}

export const favoritesSlice = createSlice( { 
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const newFavorites = [...state.items, action.payload];
            localStorage.setItem(appStorageName, JSON.stringify(newFavorites));
            state.items = newFavorites;
        },
        deleteFavorite: (state, action) => {
            const itemsCopy = state.items;
            itemsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
            state.items = itemsCopy;
        }
    },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer;