import type { Status } from "../../models/Status";
import { request } from "./ApiService";

export const TestService = {
  getStatus: (): Promise<Status> => request.get("/status"),
};
