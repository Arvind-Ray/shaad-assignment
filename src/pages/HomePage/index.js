import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OntaskData, OngetTaskData, OntaskDelete} from '../../actions';
import Layout from '../../components/Layout';
import CustomTable from '../../components/Table';
import { Button, Grid, TextField } from '@material-ui/core';

function HomePage({OntaskData, OngetTaskData, getTaskData, OntaskDelete, taskData}) {
    const [task, setTask] = useState('');
    const [getData, setData] = useState(false);
    
    useEffect(() => {
        getData && OngetTaskData() || OngetTaskData();   
    },[getData, OngetTaskData]);

    const onChange = e => {
        setTask(e.target.value);
    };

    const onSubmit = () => {
        OntaskData(task);
        setTask('');
        setData(!getData);
    };

    const onDelete = () => {
        OntaskDelete();
        setData(!getData);
    };
    return(
        <Layout>
            <h1>Welcome to Shaadi.com below is the detail in table format!</h1>
            <Grid container 
                spacing={0}
                direction="row"
                alignItems="center"
                justify="space-between"
            >
                <Grid md={5}>
                <TextField 
                    value={task}
                    label="Add task" 
                    variant="outlined" 
                    fullWidth
                    onChange={onChange}
                />
                </Grid>
                <Grid md={2}>
                    <Button style={{left: 14}} onClick={onSubmit} variant="contained"  color="secondary">Add Task</Button>
                </Grid>

                <Grid md={4}>
                    <Button onClick={onDelete} variant="contained"  color="default">Delete All Tasks</Button>
                </Grid>

            </Grid>
            {
                getTaskData?.data &&
                <CustomTable 
                    data= {getTaskData.data}
                />
            }
        </Layout>
    )

}
HomePage.propTypes = {
    demo: PropTypes.object,
};

function mapStateToProps(state) {
    const { taskData, getTaskData, taskDelete } = state;
    return {
     taskData,
     getTaskData,
     taskDelete
    }
  };
  export default connect(mapStateToProps, {
   OntaskData,
   OngetTaskData,
   OntaskDelete
  })(React.memo(HomePage)); 