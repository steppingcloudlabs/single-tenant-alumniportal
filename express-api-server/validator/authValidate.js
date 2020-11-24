const joi = require("joi");
module.exports = {
  signupValidateBody: schema => {
    return (req, res, next) => {
      const result = joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },
  signupSchemas: {
    authSchema: joi.object().keys({
      EMAIL: joi
        .string()
        .email()
        .required(),
      PASSWORD: joi.string().required(),
      USERID: joi.string().required()

    })
  },
  signinValidateBody: schema => {
    return (req, res, next) => {
      const result = joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },
  signinSchemas: {
    authSchema: joi.object().keys({
      EMAIL: joi
        .string()
        .email()
        .required(),
      PASSWORD: joi.string().required()
    })
  },
}