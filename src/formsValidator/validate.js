export const requiredField = (value) => { // возврат underfined, если все норм
    if (value) {
        return undefined;
    }
    else {
        return "Input required";
    }
}

export const maxLengthFieldCreator = (length) => { // замыкание для переменной разрешенной длины
    return (value) => {
        if (value && value.length > length) {
            return "Max value then " + length;
        }
        else {
            return undefined;
        }
    }
}

// export function maxLengthFieldCreator(length) { // ES 5
//     return function(value) {
//         if (value && value.length > length) {
//             return "Max value then " + length;
//         }
//         else {
//             return undefined;
//         }
//     }
// }