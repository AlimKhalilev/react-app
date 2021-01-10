let initialState = {
    friends: [
        { id: 1, name: "Alim" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Khaibulla" },
        { id: 4, name: "Edem" }
    ]
}

const asideReducer = (state = initialState, action) => {
    return state;
}

export default asideReducer;