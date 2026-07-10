const checkOddEven = require("./oddEven");

describe("Odd/Even", () => {
    let spy;

    beforeEach(() => {
        spy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        spy.mockRestore();
    });

    test("8 is Even", () => {
        checkOddEven(8);
        expect(spy).toHaveBeenCalledWith("Even");
    });

    test("5 is Odd", () => {
        checkOddEven(5);
        expect(spy).toHaveBeenCalledWith("Odd");
    });

    test("0 is Even", () => {
        checkOddEven(0);
        expect(spy).toHaveBeenCalledWith("Even");
    });

    test("-7 is Odd", () => {
        checkOddEven(-7);
        expect(spy).toHaveBeenCalledWith("Odd");
    });

    test("-10 is Even", () => {
        checkOddEven(-10);
        expect(spy).toHaveBeenCalledWith("Even");
    });

    test("101 is Odd", () => {
        checkOddEven(101);
        expect(spy).toHaveBeenCalledWith("Odd");
    });
});
