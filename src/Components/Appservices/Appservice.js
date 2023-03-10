import Axios from "axios";
import { URL } from "./API_URL";
import AuthHeader from "./auth-header";

const BaseURL = "bakeonline";

const GetList = (e) => {
  return Axios.get(`${URL}/${BaseURL}/${e}`, {
    headers: AuthHeader(),
  });
};

const GetDetails = (e, id) => {
  return Axios.get(`${URL}/${BaseURL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const Create = (e, data) => {
  return Axios.post(`${URL}/${BaseURL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Update = async (e, id, data) => {
  return await Axios.put(`${URL}/${e}/${id}`, data, {
    headers: AuthHeader(),
  });
};

const Delete = (e, id) => {
  return Axios.delete(`${URL}/${BaseURL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const AppService = {
  GetList,
  GetDetails,
  Create,
  Update,
  Delete,
};

export default AppService;
