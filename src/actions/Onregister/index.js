import axios from 'axios';
import actionTypes from '../../action-types';

export default (name, email, password, password2) => ( dispatch ) => { 

    const url = `/api/users/register`;
    const body = {
        name,
        email,
        password,
        password2 
    };
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_REGISTER, payload: res.data});
        // const reg_data = res.data;
        // console.log("hello data", reg_data);
        // localStorage.setItem('permission data', JSON.stringify(reg_data));
    })
    .catch(err => console.log("TODO: Handle error case in reg page"));
};