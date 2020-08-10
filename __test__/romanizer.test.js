// import {transform} from '../src/romanizer'

// describe('transform', () => {
//     it('should return X when given 10', () => {
//         const result = transform(10);
//         expect(result).toEqual("X");
//     });

// });


import { transform } from '../src/romanizer.js'

describe('calculator', () => {
    fit('should return X when transform 10', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });

});