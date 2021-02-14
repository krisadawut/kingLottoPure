const models = require("../models/index");

exports.index = async function( req ,res ,next) {
    const sql = 'select * from tmusertype';
    const data = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
      });
    res.status(200).json(data);

}

exports.AddUserType = async function(req, res, next){
    // const {description} = req.body;
    let UserTypeCode = req.param('UserTypeCode');
    let UserTypeName = req.param('UserTypeName');
    const sql = 'insert into kinglottodb.tmusertype (UserTypeCode ,UserTypeName) values (?,?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [UserTypeCode ,UserTypeName]
    });

    res.status(200).json({
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
      });
}

exports.UpdateUserType = async function(req, res, next){
    // const {description} = req.body;
    let UserTypeId = req.param('UserTypeId');
    let UserTypeCode = req.param('UserTypeCode');
    let UserTypeName = req.param('UserTypeName');
    const sql = 'UPDATE kinglottodb.tmusertype SET UserTypeCode = ? ,UserTypeName = ? WHERE (UserTypeId = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [UserTypeCode,UserTypeName,UserTypeId]
    });

    res.status(200).json({
        message: 'แก้ไขข้อมูลเรียบร้อยแล้ว'
      });
}

exports.DeleteUserType = async function(req, res, next){
    // const {description} = req.body;
    let UserTypeId = req.param('UserTypeId');
    const sql = 'DELETE FROM kinglottodb.tmusertype WHERE (UserTypeId = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [UserTypeId]
    });

    res.status(200).json({
        message: 'ลบข้อมูลเรียบร้อยแล้ว'
      });
}