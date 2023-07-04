const validation = (schema) => {

    return (req,res,next) => {

        const validate = schema.validate(req.body)

        if(validate.error){
            res.status(400).send({success:false,message:validate.error.message})
            // throw new Error(validate.error.message)
        }
        else{
            next();
        }
    }
}

export default validation;