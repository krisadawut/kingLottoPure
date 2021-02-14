const models = require("../models/index");

exports.index = async function( req ,res ,next) {
    const sql = 'select * from tduser';
    const data = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
      });
    res.status(200).json(data);

}