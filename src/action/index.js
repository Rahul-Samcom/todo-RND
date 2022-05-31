export const addtodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.random(),
      data: data,
    },
  };
};

export const deletetodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
