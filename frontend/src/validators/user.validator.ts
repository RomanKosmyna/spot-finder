import Joi from "joi";
import { constant } from "@/src/constants";

export const userValidator = Joi.object({
  username: Joi.string()
    .min(4)
    .max(10)
    .trim()
    .required()
    .regex(constant.username)
    .messages({
      "string.min": "•Must be at least 4 characters long",
      "string.empty": `This field is required`,
    }),
  password: Joi.string()
    .min(6)
    .max(14)
    .trim()
    .required()
    .regex(constant.password)
    .messages({
      "string.min": "Must be at least 6 characters long",
      "string.empty": `This field is required`,
    })
})