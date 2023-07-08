import joi from "joi";

export const userValidation = async (req, res, next) => {
    const userSchema = joi.object({
      email: joi.string().required().messages({
        "any.required": "email required",
      }),
      name:joi.string().optional(),
      password: joi.string().min(8).required().messages({
        "any.required": "Password required",
        "string.min": "Password require 8 characters",
      }),
      confirm_password: joi.string().min(8).required().messages({
        "any.required": "Confrim password required",
        "string.min": "confirm password require 8 characters",
      }),
    });
    const value = await userSchema.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  };