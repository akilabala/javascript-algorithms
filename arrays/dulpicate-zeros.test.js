const {duplicateZeros} = require("./duplicate-zeros");

describe("duplicate-zeros", () => {
    it("should test array with partial zeros", () => {
        // given
        const arr = [1,0,2,3,0,4,5,0];

        // when
        duplicateZeros(arr);

        // then
        expect(arr.length).toBe(8);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(0);
        expect(arr[2]).toBe(0);
        expect(arr[3]).toBe(2);
        expect(arr[4]).toBe(3);
        expect(arr[5]).toBe(0);
        expect(arr[6]).toBe(0);
        expect(arr[7]).toBe(4);
    });

    it("should test array with only zeros", () => {
        // given
        const arr = [0,0,0];

        // when
        duplicateZeros(arr);

        // then
        expect(arr.length).toBe(3);
        expect(arr[0]).toBe(0);
        expect(arr[1]).toBe(0);
        expect(arr[2]).toBe(0);
    });

    it("should test array with no zeros", () => {
        // given
        const arr = [1,2,3];

        // when
        duplicateZeros(arr);

        // then
        expect(arr.length).toBe(3);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(2);
        expect(arr[2]).toBe(3);
    });

    it("should test array with a zero in the last index", () => {
        // given
        const arr = [1,2,0];

        // when
        duplicateZeros(arr);

        // then
        expect(arr.length).toBe(3);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(2);
        expect(arr[2]).toBe(0);
    });
});