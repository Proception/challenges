const responseHandler = (dispatch, response, action) => {
  const { data, code, messages, status } = response;
  switch (code) {
  case 201:
    dispatch(action(data));
    break;
  case 200:
    dispatch(action(data));
    break;
  case 400:
    throw `Bad Response Exception: ${messages}`;
  case 401:
    throw `Unauthorized Response Exception: ${messages}`;
  case 409:
    throw `Conflict Exception: ${messages}`;
  default:
    break;
  }
};

export default responseHandler;
