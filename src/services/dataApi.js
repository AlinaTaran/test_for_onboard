import axios from "axios";

export const dataApiRequest = () => {
  return axios
    .get(`https://stage.onboardlms.io/notification/get/MAkTQaSNeZI6`)
    .then(({ data }) => data.notifications);
};
