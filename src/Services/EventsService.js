import http from "../http-common";

const getAll = () => {
  return http.get("/event");
};

const get = id => {
  return http.get(`/event/${id}`);
};

const create = data => {
  return http.post("/events", data);
};

const update = (id, data) => {
  return http.put(`/events/${id}`, data);
};

const remove = id => {
  return http.delete(`/events/${id}`);
};

const removeAll = () => {
  return http.delete(`/events`);
};

const findByTitle = searchTitle => {
  return http.get(`/events/${searchTitle}`);
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