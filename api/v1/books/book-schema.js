const Joi = require("joi");

const createSchema = {
  payload: Joi.object({
    title: Joi.string().required(),
    authorId: Joi.string().max(40).required(),
    publishedDate: Joi.string().min(10).max(10).required(),
    isbn: Joi.string().required(),
    summary: Joi.string().min(3).max(400).required()
  })
};

const getAll = {
  query: Joi.object({
    title: Joi.string(),
    authorName: Joi.string()
  })
}

const getById = {
  params: Joi.object({
    id: Joi.string().required()
  })
}


module.exports = {
  createSchema,
  getAll,
  getById
};