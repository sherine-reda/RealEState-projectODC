const PaymentModel = require("../../db/models/payment.model");
const myHelper = require("../../app/helper");

class Payment {
  static addPayment = async (req, res) => {
    try {
      const PaymentData = new PaymentModel(req.body);
      await PaymentData.save();
      myHelper.resHandler(
        res,
        200,
        true,
        PaymentData,
        "Payment added successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static singlePayment = async (req, res) => {
    try {
      const PaymentData = await PaymentModel.find({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        PaymentData,
        "singlePayment successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static deletePayment = async (req, res) => {
    try {
      const PaymentData = await PaymentModel.deleteOne({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        PaymentData,
        " delete Payment successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static editPayment = async (req, res) => {
    try {
      const Payment = await PaymentModel.updateOne(
        { _id: req.params.id },
        req.body
      );

      console.log(req.body);
      myHelper.resHandler(res, 200, true, Payment, " Payment is edited ");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static allPayment = async (req, res) => {
    try {
      const PaymentData = await PaymentModel.find();

      myHelper.resHandler(
        res,
        200,
        true,
        PaymentData,
        "all Payments.. successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
}
module.exports = Payment;
