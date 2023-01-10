class ParentTestClass {
    #privateValue;

    constructor(value) {
        this.#privateValue = value;
        this.value = 1; // 이렇게 선언해줄 수도 있음
    }

    // 외부에서 값에 접근할 때 사용한다.(보안절차)
    get privateValue() {
        // 보통은 private 키를 가져올 때 사용한다.
        return this.#privateValue;
    }

    // set에는 매개변수를 꼭 적어줘야 한다.
    // 값을 세팅해 바꿔주고 싶을 때 사용한다.
    set privateValue(value) {
        this.#privateValue = value;
    }

    static add(a, b) {
        // TestClass.add(1,2)로 접근
        return a + b;
    }

    add() {
        // test.add() 로 접근
        return this.#privateValue + this.value;
    }

}

class TestClass extends ParentTestClass {
    constructor(value) {
        super(value);
        // console.log(this.#privateValue);
        console.log(this.privateValue);
    }

}



module.exports = TestClass;