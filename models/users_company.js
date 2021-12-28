module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("users_company", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true
    },
    taxCode: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    employeeId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    insuranceStatus: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });

  return Tutorial;
};