import { environment } from './../../../environments/environment.prod';

export const ApiUrlsConstants = {
    loginUrl: environment.apiUrl + 'login/',
    registerUrl: environment.apiUrl + 'register/',
    usersUrl: environment.apiUrl + 'users/'
};
