const RoleModel = require("../../db/models/role.model")
const myHelper =require("../../app/helper")
class Role{
    static addRole = async(req,res) => {
        try{
            const roleName = new RoleModel(req.body)
            await roleName.save()
            myHelper.resHandler(res, 200, true, roleName, "roleName added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static singleRole = async (req, res) => {
        try {
          const RoleData = await RoleModel.find({ _id: req.params.id });
    
          myHelper.resHandler(
            res,
            200,
            true,
            RoleData,
            "singleRole successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
    
      static deleteRole = async (req, res) => {
        try {
          const RoleData = await RoleModel.deleteOne({ _id: req.params.id });
    
          myHelper.resHandler(
            res,
            200,
            true,
            RoleData,
            " delete Role successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
      static editRole = async (req, res) => {
        try {
          const Role = await RoleModel.updateOne(
            { _id: req.params.id },
            req.body
          );
    
          console.log(req.body);
          myHelper.resHandler(res, 200, true, Role, " Role is edited ");
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
      static allRole = async (req, res) => {
        try {
          const RoleData = await RoleModel.find();
    
          myHelper.resHandler(
            res,
            200,
            true,
            RoleData,
            "all Roles.. successfully"
          );
        } catch (e) {
          myHelper.resHandler(res, 500, false, e, e.message);
        }
      };
}
module.exports = Role