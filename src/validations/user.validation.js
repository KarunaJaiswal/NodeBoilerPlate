import Joi from 'joi'

const userValidation = {
    createUser : Joi.object().keys({
        user_name: Joi.string().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email:Joi.string().required().email(),
        contact_number:Joi.number().required().max(10)
    })
} 

export default {userValidation}

