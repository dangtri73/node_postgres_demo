module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    identity: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });

  return Tutorial;
};