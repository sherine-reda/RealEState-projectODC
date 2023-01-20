const UrlModel = require("../../db/models/urls.model")
const myHelper = require("../../app/helper")

class Url{

    static addUrl = async(req,res) => {
        try{
            const url = new UrlModel(req.body)
            await url.save()
            myHelper.resHandler(res, 200, true, url, "user Url added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static singleUrl = async (req, res) => {
        try {
          const UrlData = await UrlModel.find({ _id: req.params.id });
    
          myHelper.resHandler(
            res,
            200,
            true,
            UrlData,
            "singleUrl successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
    
      static deleteUrl = async (req, res) => {
        try {
          const UrlData = await UrlModel.deleteOne({ _id: req.params.id });
    
          myHelper.resHandler(
            res,
            200,
            true,
            UrlData,
            " delete Url successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
      static editUrl = async (req, res) => {
        try {
          const Url = await UrlModel.updateOne(
            { _id: req.params.id },
            req.body
          );
    
          console.log(req.body);
          myHelper.resHandler(res, 200, true, Url, " Url is edited ");
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
      static allUrl = async (req, res) => {
        try {
          const UrlData = await UrlModel.find();
    
          myHelper.resHandler(
            res,
            200,
            true,
            UrlData,
            "all Urls.. successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
}

module.exports= Url