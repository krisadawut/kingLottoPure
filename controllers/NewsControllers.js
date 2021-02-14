const models = require("../models/index");

exports.index = async function( req ,res ,next) {
    const sql = 'select * from tdnews';
    const data = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
      });
    res.status(200).json(data);

}

exports.AddNews = async function(req, res, next){
    // const {description} = req.body;
    let news_detail = req.param('news_detail');
    const sql = 'insert into kinglottodb.tdnews (News_detail) values (?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [news_detail]
    });

    res.status(200).json({
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
      });
}

exports.UpdateNews = async function(req, res, next){
    // const {description} = req.body;
    let news_detail = req.param('news_detail');
    let newsid = req.param('newsid');
    const sql = 'UPDATE kinglottodb.tdnews SET News_Detail = ? WHERE (NewsID = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [news_detail,newsid]
    });

    res.status(200).json({
        message: 'แก้ไขข้อมูลเรียบร้อยแล้ว'
      });
}

exports.DeleteNews = async function(req, res, next){
    // const {description} = req.body;
    let newsid = req.param('newsid');
    const sql = 'DELETE FROM kinglottodb.tdnews WHERE (NewsID = ?)';
    const blog = await models.sequelize.query(sql, {
        replacements: [newsid]
    });

    res.status(200).json({
        message: 'ลบข้อมูลเรียบร้อยแล้ว'
      });
}