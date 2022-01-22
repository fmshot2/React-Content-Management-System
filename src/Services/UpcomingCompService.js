import http from "../http-common";

const getAll = () => {
  return http.get("/upcomig");
};

const get = id => {
  return http.get(`/upcoming/${id}`);
};

const create = data => {
  return http.post("/upcoming", data);
};

const update = (id, data) => {
  return http.put(`/upcoming/${id}`, data);
};

const remove = id => {
  return http.delete(`/upcoming/${id}`);
};

const removeAll = () => {
  return http.delete(`/upcoming`);
};

const findByTitle = searchTitle => {
  return http.get(`/upcoming/${searchTitle}`);
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