import axios from 'axios';
import actionTypes from '../../action-types';

export default (email, password, password2) => ( dispatch ) => { 
    const url = `/api/users/login`;
    const body = {
        email,
        password,
        password2 
    };
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_LOGIN, payload: res.data});
        const login_data = res.data.token;
        localStorage.setItem('permission data', JSON.stringify(login_data));
    })
    .catch(err => console.log("TODO: Handle error case in Login page"));
};