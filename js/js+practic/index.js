
import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line


const invertCase = (str) =>{

    for (let i = 0; i<length(str); i++){

        if (str[i] !== toUpperCase(str[i])){

            toUpperCase(str[i]);

        } else {
            toLowerCase(str[i]);
        }
    }

};


console.log(invertCase('asdA'));