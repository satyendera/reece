import http from "../http-common";

interface Response {
  data: {
    tripSet: {
      heroImage: string;
      unitName: string;
      unitStyleName: string;
      checkInDate: string;
    }[];
  };
}

const getAll = () => {
  return http.get<Response>("/");
};

const TripService = {
  getAll,
};

export default TripService;
