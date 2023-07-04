import userModel from '../model/user.model.js'
import jwt from 'jsonwebtoken';
import helper from '../helpers/helper-functions.js';
import responseData from '../helpers/response.js';

const verifyToken = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.USER_SECRET_KEY);
      req.user = await userModel.findOne({
        _id: decoded._id,
      });
      next();
    } else {
      helper.logger.error('Authorization failed');
      return responseData.errorResponse(res, 'Authorization failed');
    }
    if (!token) {
      helper.logger.error('Token not found');
      return responseData.errorResponse(res, 'Token not found');
    }
  } catch (error) {
    helper.logger.error(error);
    responseData.errorResponse(res, error);
  }
};

export default verifyToken;
