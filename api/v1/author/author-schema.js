const Joi = require("joi");

const createAuthorsSchema = {
  payload: Joi.object({
    name: Joi.string().min(3).max(60).required(),
    biography: Joi.string().min(3).max(400).required(),
    birthDate: Joi.string().min(10).max(10).required()
  })
};

const getById = {
  params: Joi.object({
    id: Joi.string().max(40).required()
  })
}

const deleteById = {
  params: Joi.object({
    id: Joi.string().max(40).required()
  })
}

module.exports = {
  createAuthorsSchema,
  getById,
  deleteById
};