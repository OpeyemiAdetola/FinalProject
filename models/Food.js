const Sequelize = require ('sequelize');
const config = require('./../config');
const Food= config.define('Food',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    food_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodtype_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false });
 
module.exports = Food;
