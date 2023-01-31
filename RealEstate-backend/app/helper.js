class MyHelper{
  static resHandler = (res,statusCode,apiStatus,data,message)=>{
    res.status(statusCode).send({
        apiStatus,
        data,
        message
    })
  }
}
module.exports=MyHelper
//api => send : status(200(true) or 500(error)) , data , message  api رد علي ال 