const TestClass = require("./class.js");

describe("Class Test", ()=>{
    it("private test", ()=>{
        const test = new TestClass(5);
        const temp = "#privateValue";
        test[temp] = 10;

        expect(test["#privateValue"]).toBe(10); // passed

        // test.#privateValue 으로는 사용할 수 없다.
        expect(test.privateValue).toBe(5); // passed, get의 값에 접근함

        expect(typeof test).toBe("object"); // passed

        // expect(test["#privateValue"]).toBe(10); // failed

        test.privateValue = 200 // set 사용
        expect(test.privateValue).toBe(200);

        expect(test.add()).toBe(201); // passed
        expect(TestClass.add(1,2)).toBe(3); // passed

    });
});