import http from "../http-common";

const getAll = () => {
  return http.get("/testimony");
};

const get = id => {
  return http.get(`/about/${id}`);
};

const create = data => {
  return http.post("/testimonial", data);
};

const update = (id, data) => {
  return http.put(`/testimonial/${id}`, data);
};

const remove = id => {
  return http.delete(`/testimonial/${id}`);
};

const removeAll = () => {
  return http.delete(`/testimonial`);
};

const findByTitle = searchTitle => {
  return http.get(`/testimonial/${searchTitle}`);
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