import * as BackendService from "./BackendService";
export const getDiaries = () => BackendService.get("dairy");
export const getDiary = (id) => BackendService.get(`dairy/${id}`);
export const addDiary = (data) => BackendService.post("dairy", data);
