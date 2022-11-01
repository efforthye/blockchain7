const Sequelize = require("sequelize");

// # db에 저장(Sequelize.Model:저장)한것을 수출함
// # class *** : ***라는 클래스 선언
// # extends : 상속, 오른쪽에 있는 것을 기본으로 왼쪽(지금 선언한) 클래스 생성
// 오른쪽에 있는 내용은 전부 왼쪽에도 있다.
// 기본적으로 Sequelize.모델인 애임.
module.exports = class Table1 extends Sequelize.Model{
    // 테이블 생성 메서드
    // static : 클래스 자체에서만 사용하는 함수
    // sequelize : 위에서 require된 것과는 상관없는 그냥 매개변수이다.
    static init(sequelize){
        // return super.init({}, {});
        //{1}// 컬럼들을 작성한다.
        return super.init({
            column1 : {
                // type을 적을 떄 Sequelize에서 가져오는 이유..
                // 자바스크립트에 숫자가 들어왔을 때 정수인지 실수인지 구분 못함
                // DB에서는 알아야 하기 때문임
                // DB에서 사용하는 자료형에 맞게 자바스크립트를 넣어주기 위해 사용
                // 자바스크립트의 자료형을 넣어주기 위해 Sequelize 라이브러리에서
                // 제공하는 자료형을 사용한다고 한다.
                type : Sequelize.STRING(10),
            },
            column2 : {
                // type : Sequelize.NUMBER
                // 위는 int가 아니라 숫자다. 즉 FLOAT / DOUBLE 중 하나
                // 위는 그래서 index로 사용하지 못한다.

                // unsigned : 언사인드, 무조건 0보다 크다는 뜻(음수없음, 0과양수로 이루어짐)
                // -21억~21억 -> 0~42억 : 용량은 그대로라서 숫자를 원하는만큼 더 사용가능하다.
                type : Sequelize.INTEGER.UNSIGNED,
                primaryKey : true, // 테이블당 한 컬럼만 가능, 검색에 용이하게 사용한다.(중요)
                unique : true, // 데이터가 중복될 수 없다. 
                autoIncrement : true, // 자동 증가
            }
        }, {
            // 테이블에 대한 기본 설정
            sequelize, // 기본으로 넣음
            timestamps : true, // created_at, updated_at을 자동으로 추가한다.
            underscored : true, // 카멜을 스네이크로 바꿀 것인가? true, 바꾼다.(createAt -> create_at)
            paranoid : false, // delete_at을 추가할 것인가? false, 안한다. (데이터 삭제했을때 DB에서 아예 없앨건지, 남길건지 정하는 것)
            modelName : "Table1", // 자바스크립트에서 사용하는 이름
            tableName : "table1", // db에 생성할 테이블 이름
            charset: "utf8mb4", // 데이터를 어떠한 형식으로 저장할 것인지 언어 포맷을 설정함
            collate: "utf8mb4_general_ci",
        });
    }

    // 관계를 위한 메서드
    static associate(db){

    }



}

// module.exports = Table1;