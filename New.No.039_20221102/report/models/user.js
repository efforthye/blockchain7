const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{

    static init(sequelize){
        return super.init({
            userId : {
                type : Sequelize.STRING(50),
                unique : true
            },
            pw : {
                type : Sequelize.STRING(255),

            },
            nickname : {
                type : Sequelize.STRING(50),

            }

        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            modelName : "User",
            tableName : "user",
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci",
            underscored : true, // Javascript 상에서의 카멜 표기법을 DB에서 snake표기법으로 바꿔준다.(userId => user_id)
        });
    }
    static associate(db){
        // 채팅(n)과 유저(1) 연결
        db.User.hasMany(db.Chat, {
            foreignKey : "user_id",
            sourceKey : "id",
            as : "Chats",
        });



    }

}