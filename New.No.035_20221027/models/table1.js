const Sequelize = require("sequelize");





// 뭐하는 놈임? : DB관련해서 연결해주는 애
module.exports = class Table1 extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            // 테이블에 넣은 친구들과 똑같이 설정해준다.
            idx : { 
                type : Sequelize.INTEGER, // INT
                primaryKey:true, 
                autoIncrement:true, // index값 자동 증가(중요)
                unique : true,
                allowNull : false // 빈값을 허용한다? 안한다.
            },
            name : {
                type : Sequelize.STRING(45),
                allowNull : true
            },
            id : {
                type : Sequelize.STRING(45),
                allowNull : true
            },
            pw : {
                type : Sequelize.STRING(256),
                allowNull : true
            }
            // password, id, create_at을 일단 삭제했다.(임시)
        }, {
            sequelize,
            timestamps : true, //false에서 true로 바꿈(임시)
            underscored : true,
            modelName : "NewTable",
            tableName : "new_table",
            paranoid : false,
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci"
        });
    }
    static associate(db){
        // db.NewTable // 위에서 만든 db이름
        // 관계를 맺는 내용을 적어준다.
    }
}