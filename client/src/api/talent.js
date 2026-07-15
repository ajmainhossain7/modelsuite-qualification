import API from './axios';

export const fetchAvailableTasks = () => API.get('/talent/tasks/available');
export const fetchMyTasks = () => API.get('/talent/tasks/mine');
export const claimTask = (id) => API.put(`/talent/tasks/${id}/claim`);
