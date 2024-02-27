export const validCharacters = (objecting) => {
    let character = ''; 
    for (let i = 0; i < objecting.length; i++) {
        if (objecting[i].state === true) {
            character += objecting[i].info;
        }
    }
    return character;
}