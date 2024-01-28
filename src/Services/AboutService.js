import http from "../http-common";


const getAll = () => {
  return http.get(`/abouts`);
};

const get = id => {
  return http.get(`/abouts/${id}`);
};

const create = data => {
  return http.post("/abouts", data);
};

const update = (id, data) => {
  return http.put(`/abouts/${id}`, data);
};

const remove = id => {
  return http.delete(`/abouts/${id}`);
};

const removeAll = () => {
  return http.delete(`/abouts`);
};

const findByTitle = searchTitle => {
  return http.get(`/about/${searchTitle}`);
};

const AboutDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default AboutDataService;