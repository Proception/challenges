const options = (method, data) => {
  return {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  };
};

const postConsentApi = async (url, data) => {
  const response = await fetch(url, options('POST', data));
  return await response.json();
};


const updateConsentApi = async (url, data) => {
  const response = await fetch(url, options('PUT', data));
  return await response.json();
};

const getAllConsentsApi = async (url) => {
  const response = await fetch(url, options('GET'));
  return await response.json();
};

export {
  postConsentApi,
  getAllConsentsApi,
  updateConsentApi
};
