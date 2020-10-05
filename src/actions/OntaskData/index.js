import axios from 'axios';
import actionTypes from '../../action-types';

export default (task) => ( dispatch ) => { 
    const url = `/api/tasks/newtask`;
    const body ={
        task
    }
    axios.post(url, body)
    .then(res => {
        dispatch({type: actionTypes.ON_TASK_DATA, payload: res.data});
    })
    .catch(err => console.log("TODO: Handle error case in task page"));
};