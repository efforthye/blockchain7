const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    // 테이블에 대한 설정
    static init(sequelize) {
        return super.init({
            // id는 넣을 필요 없다고 한다. 
            // (primaryKey를 따로 설정 안하면 기본 값으로 설정된다.)
            // id: {
            //     type: Sequelize.NUMBER.UNSIGNED,
            //     autoIncrement: true,
            //     primaryKey: true,
            //     unique: true,
            //     allowNull: false
            // },
            userId: {
                type: Sequelize.STRING(20),
                unique: true,
                allowNull: false
            },
            userPw: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            class: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: "User",
            tableName: "users",
            paranoid: true,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    
    // 보드랑 유저랑 관계를 맺어줌(유저 안에 보드)
    // 유저 : 소스키 db.User.hasMany(db.Board, {옵션})
    static associate(db) {
        // 보드들을 유저에 연결시킴
        db.User.hasMany(db.Board, {
            foreignKey : "user_id",
            sourceKey : "id", as : "Board"
        });
        
        // 댓글들을 유저에 연결시킴
        db.User.hasMany(db.Comment, {
            foreignKey : "user_id",
            sourceKey : "id", ad : "Comment"
        });

    }
}