let initialState = {
    friends: [
        { id: 1, name: "Alim" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Khaibulla" },
        { id: 4, name: "Edem" },
        { id: 5, name: "Vlad" },
        { id: 6, name: "Ruslan" }
    ]
}

const asideReducer = (state = initialState, action) => {
    return state;
}

export default asideReducer;