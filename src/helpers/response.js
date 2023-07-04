import httpStatus from 'http-status';

const sendResponse = (res, msg, data) => {
  res.status(httpStatus.OK).send({
    status: true,
    message: msg,
    data: data,
  });
};

const errorResponse = (res, msg) => {
  res.send({
    status: true,
    message: msg,
  });
};

const sendMessage = (res, msg) => {
  res.send({
    status: true,
    message: msg,
  });
};


export default  {sendResponse, errorResponse, sendMessage};
