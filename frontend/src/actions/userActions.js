import Axios from "axios";
// import Cookies from "js-cookie";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";
// Nếu muốn lưu với Cookie (Server Side)
const Cookies = require('js-cookie');

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password} });
    try {
        const { data } = await Axios.post("/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookies.set("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

export { signin };
