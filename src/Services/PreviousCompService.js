import http from "../http-common";

const getAll = () => {
  return http.get("/previous");
};

const get = id => {
  return http.get(`/previous/${id}`);
};

const create = data => {
  return http.post("/previous", data);
};

const update = (id, data) => {
  return http.put(`/previous/${id}`, data);
};

const remove = id => {
  return http.delete(`/previous/${id}`);
};

const removeAll = () => {
  return http.delete(`/previous`);
};

const findByTitle = searchTitle => {
  return http.get(`/previous/${searchTitle}`);
};


export default {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

// export default TutorialService;