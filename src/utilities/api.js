import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all users
  getUsers: function() {

    return axios.get("https://randomuser.RaviKnutson/api/?results=200&nat=us");
  }
};
