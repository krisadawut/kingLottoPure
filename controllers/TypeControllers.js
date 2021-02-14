const models = require("../models/index");

exports.index = async function( req ,res ,next) {
    const sql = 'select * from tmtype';
    const data = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
      });
    res.status(200).json(data);

}

exports.AddType = async function(req, res, next){
    // const {description} = req.body;
    let typecode = req.param('typecode');
    let typename = req.param('typename');
    const sql = 'insert into kinglottodb.tmtype (typecode ,typename) values (?,?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [typecode ,typename]
    });

    res.status(200).json({
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
      });
}

exports.UpdateType = async function(req, res, next){
    // const {description} = req.body;
    let typeid = req.param('typeid');
    let typecode = req.param('typecode');
    let typename = req.param('typename');
    const sql = 'UPDATE kinglottodb.tmtype SET typecode = ? ,typename = ? WHERE (typeid = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [typecode,typename,typeid]
    });

    res.status(200).json({
        message: 'แก้ไขข้อมูลเรียบร้อยแล้ว'
      });
}

exports.DeleteType = async function(req, res, next){
    // const {description} = req.body;
    let typeid = req.param('typeid');
    const sql = 'DELETE FROM kinglottodb.tmtype WHERE (typeid = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [typeid]
    });

    res.status(200).json({
        message: 'ลบข้อมูลเรียบร้อยแล้ว'
      });
}