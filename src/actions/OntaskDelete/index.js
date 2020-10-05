import axios from 'axios';
import actionTypes from '../../action-types';

export default () => ( dispatch ) => { 
    const url = `/api/tasks/delete`;
    const body ={}
    axios.delete(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_DELETE_TASKS, payload: res.data});
    })
    .catch(err => console.log("TODO: Handle error case in delete page"));
};