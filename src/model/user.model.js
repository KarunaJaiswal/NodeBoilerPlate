import helper from '../helpers/helper-functions.js';
import userSchema from '../schema/user.schema.js'
import responseData from '../helpers/response.js';

const registerUserModel = (data) => {
    return new Promise(async(resolve, reject) => {
        console.log('data :', data);
try {
    
    const user = userSchema.create(data);
    user.save();
    if(err){
        resolve(user);
    }
} catch (error) {
    reject(err);
    helper.logger.error(error)
}
    })
}

export default {registerUserModel}