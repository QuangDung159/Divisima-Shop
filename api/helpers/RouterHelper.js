const Joi = require("@hapi/joi");

/**
 * validate body from request
 * @param {schema}   
 */
const validateBoby = (schema) => {
    return (req, res, next) => {
        // get validate result
        let validateResult = schema.validate(req.body);

        if (validateResult.error) {
            // validation fail
            res.status(400).json(validateResult.error);
        } else {
            // create datatValidated prod to assign data from validation
            if (!req.dataValidated) {
                req.dataValidated = {};
            }
            if (!req.dataValidated.body) {
                req.dataValidated.body = {};
            }
            req.dataValidated.body = req.body;
            // continue request
            next();
        }
    };
};

/**
 * validate param in url
 * @param {any} schema 
 * @param {string} paramName 
 */
const validateParam = (schema, paramName) => {
    return (req, res, next) => {
        let validateResult = schema.validate({
            param: req.params[paramName]
        });

        if (validateResult.error) {
            res.status(400).json(validateResult.error);
        } else {
            if (!req.dataValidated) {
                req.dataValidated = {};
            }
            if (!req.dataValidated.params) {
                req.dataValidated.params = {};
            }
            req.dataValidated.params[paramName] = req.params[paramName];
            next();
        }
    };
};

// list scheme using for validation
const listSchema = {
    idValidator: Joi.object().keys({
        param: Joi.number().min(1)
    }),
    albumBodyValidator: Joi.object().keys({
        album_name: Joi.string().min(10).max(255),
        album_desc: Joi.string().min(10).max(255),
    }),
    commentBodyValidator: Joi.object().keys({
        comment_content: Joi.string().min(4).max(255).required(),
        comment_created_by: Joi.string().email().required()
    })
};

module.exports = {
    validateParam,
    validateBoby,
    listSchema
};