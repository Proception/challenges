
const okResponse = (payload) => {
  return {
    status: 200,
    response: {
      code: 200,
      status: 'ok',
      messages: 'Consents successfully retrieved',
      data: payload
    }
  };
};

const unauthorizedResponse = (payload) => {
  return {
    status: 401,
    response: {
      code: 401,
      status: 'ok',
      messages: 'You do not have access to consents',
      data: payload
    }
  };
};

const createdResponse = (payload) => {
  return {
    status: 201,
    response: {
      code: 201,
      status: 'Created',
      messages: 'Consent has been sucessfully saved',
      data: payload
    }
  };
};


const conflictResponse = (payload) => {
  return {
    status: 409,
    response: {
      code: 409,
      status: 'Conflict',
      messages: 'Consent already exist fro this email address',
      data: payload
    }
  };
};

const badRequestResponse = (payload) => {
  return {
    status: 400,
    response: {
      code: 400,
      status: 'Bad Request',
      messages: 'Invalid credentials',
      data: payload
    }
  };
};

const mockResponse = {
  200: okResponse,
  201: createdResponse,
  401: unauthorizedResponse,
  400: badRequestResponse,
  409: conflictResponse
};


export default mockResponse;
