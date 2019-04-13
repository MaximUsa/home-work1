import {cashBackCalc} from "../lib.js";

test('testing cash back calculator', () => {
    const normal = 100;
    const regular = 200;
    const maximal = 300;

    const expected = 101;

    const result = cashBackCalc(normal, regular, maximal);

    expect(result).toBe(expected);
});
