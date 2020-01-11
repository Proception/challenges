

const preventDefault = {
  preventDefault: () => { },
};

const pageNumberEvent = {
  ...preventDefault,
  target: {
    getAttribute: () => 1
  }
};


export {
  preventDefault,
  pageNumberEvent
};
