const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title : {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            text : {
                type : Sequelize.TEXT,
                allowNull : false
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: "Board",
            tableName: "board",
            paranoid: true,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    // 보드랑 유저랑 관계를 맺어줌(유저 안에 보드)
    // 보드 : 타겟키
    static associate(db) {
        // 보드들을 유저에 연결시킴
        db.Board.belongsTo(db.User, {
            foreignKey : "user_id",
            targetKey : "id", as : "User"
        });

        // 보드는 여러개의 코멘트를 가짐
        db.Board.hasMany(db.Comment, {
            foreignKey : "board_id",
            sourceKey : "id", as : "Comment"
        });

    }
}