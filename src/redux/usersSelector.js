import { createSelector } from "reselect";

export const usersDataSelector = (state) => {
    return state.usersPage.usersData;
}

export const usersDataSelectorSuper = createSelector(usersDataSelector, (usersData) => { // закидываем обычный селектор и дальше функцию с данными
    return usersData.filter(el => true); // которые потом будут создавать сложный селектор (тип state.usersPage.usersData.filter(el => true))
}); // реселект нужен чтобы не было перенагрузки (он кэширует данные и чекает, изменилось ли значение), нет лишней перерисовки

export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const totalUserCountSelector = (state) => {
    return state.usersPage.totalUserCount;
}