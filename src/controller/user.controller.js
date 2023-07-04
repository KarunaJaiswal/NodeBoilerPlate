import helper from '../helpers/helper-functions.js';
import userModel from '../model/user.model.js';
import httpStatus from 'http-status';
import responseData from '../helpers/response.js';

const registerUser = async(req,res) => {
    try {
        const user = await userModel.registerUserModel(req.body);
        console.log('req.body :', req.body);
        console.log('user :', user);

        res.responseData.sendResponse(res, REGISTRATION_SUCCESS, user)
    } catch (error) {
        helper.logger.error(error)
    }
}

export default {registerUser}