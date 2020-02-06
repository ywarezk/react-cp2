/**
 * api requests to the server user
 */

import axios from "axios";

class UserService {

    /**
     * @param: {{ email: string, password: string }} - loginData
     * @returns {Promise<string>} Promise<jwttoken>
     */
    login = async (loginData) => {
        const response = await axios.post("https://academeez-login-ex.herokuapp.com/api/users/login", loginData);
        // { token: 'jwttoken asfdasfdasd asdfasdf'}
        // return "hello";
        return response.data.token;
    }
}

export default new UserService();