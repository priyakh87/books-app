'use strict';

const { type } = require("@testing-library/user-event/dist/type");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    language: {
      type: DataTypes.STRING,
      allowNull:true
    }
  }, {});

  return Book;
};