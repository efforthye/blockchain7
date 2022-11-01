const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
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
            modelName: "Comment",
            tableName: "comments",
            paranoid: true,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    // 댓글랑 유저랑 관계를 맺어줌(유저 안에 보드)
    // 보드 : 타겟키
    // 댓글이랑 게시물도..
    static associate(db) {

        // 코멘트들을 유저에 연결시킴
        db.Comment.belongsTo(db.User, {
            foreignKey : "user_id",
            targetKey : "id",
            as : ""
        });

        // 댓글들을 보드에 연결시킴
        db.Comment.belongsTo(db.Board, {
            foreignKey : "board_id",
            targetKey : "id",
            as : ""
        });

    }
}