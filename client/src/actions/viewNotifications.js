import { GET_NOTIFICATIONS} from "./types";
import Axios from "axios";

export const getNotifications = () => async dispatch => {
    const res = await Axios.get(`/getnotification`);
    dispatch({
        type: GET_NOTIFICATIONS,
        payload: res.data
    });
};