// 테스트 함수들을 실행하는데 묶어서 실행할 수 있다.
const { createMerkle, libMerkle } = require("./merkleTree.js");

// describe : 테스트의 묶음(그룹화 해주는 메서드)
describe("전체 테스트들의 묶음 단위의 내용 적어주기", ()=>{
    // 각각의 테스트들을 여기에 작성해주면 된다.
    // 테스트 단위
    it("테스트의 내용", ()=>{
        console.log("나 처음써봄");
    });
    it("a와 a비교", ()=>{
        // expect() : 함수로 비교 함수들을 사용할 수 있게 해준다.
        // 사용 방법 : expect의 매개변수로 비교할 값을 넣어주고
        // expect().toBe(), toBe()의 매개변수로 앞의 값과 비교할 값을 넣어준다.
        // 단순히 데이터 비교하는 것임. A와 B를 넣었다고 하면 A === B 가 같은지 비교 
        expect("a").toBe("a");
    });
    // it("a와 b비교", ()=>{
    //     expect("a").toBe("b");
    // });
    it("라이브러리로 만든 머클트리와 우리가 만든 머클트리가 같은지 확인", ()=>{
        const data = ["15131", "하이하이", "어머나", "cute~", "12323", "sdjfklsd", "ㅎㅎ"];
        expect(libMerkle(data)).toBe(createMerkle(data));
    });
});