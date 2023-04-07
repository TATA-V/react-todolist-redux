export const CREATE = "create";
export const REMOVE = "remove";
export const TOGGLE = "toggle";
export const DOING_FILTER = "doingFilter";
export const COMPLE_FILTER = "compleFilter";
export const CHANGE_TEXT = "changeText";

export const create = (todo) => {
  return {
    type: CREATE,
    payload: todo, // 추가 리스트는 객체로 받아야 함
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};

export const toggle = (id) => {
  return {
    type: TOGGLE,
    payload: {
      id,
    },
  };
};

export const doingFilter = (done) => {
  return {
    type: DOING_FILTER,
    payload: done,
  };
};

export const compleFilter = (done) => {
  return {
    type: COMPLE_FILTER,
    payload: done,
  };
};

export const changeText = (id, text) => {
  return {
    type: CHANGE_TEXT,
    payload: {
      id,
      text,
    },
  };
};
