import * as BackendService from "./BackendService";
export const register = (data) => BackendService.post("auth/register", data);
export const login = (data) => BackendService.post("auth/login", data);
