 import http from "../http-common";

const getAll = () => {
  return http.get("/eventdetails");
};

const get = id => {
  return http.get(`/eventdetails/${id}`);
};

const create = data => {
  return http.post("/eventdetails", data);
};

const update = (id, data) => {
  return http.put(`/eventdetails/${id}`, data);
};

const remove = id => {
  return http.delete(`/eventdetails/${id}`);
};

const removeAll = () => {
  return http.delete(`/eventdetails`);
};

const findByTitle = searchTitle => {
  return http.get(`/eventdetails/${searchTitle}`);
};


const EventDetailsDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default EventDetailsDataService;