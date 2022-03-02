import axios from "axios";
import { IEnpoint, IRequestData } from "../interfaces/common";

export default async function AxiosData(api: IEnpoint, request?: IRequestData) {
  let response = await axios({
    method: api.method,
    url: api.url,
    data: request?.data,
  });

  return response;
}
