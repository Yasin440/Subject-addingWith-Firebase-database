import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from 'react-toastify';
import { ref, push, set } from "firebase/database";
import database from '../../firebase.config';
import './AddSubject.css';
const AddSubject = () => {
    const addSubject = (props) => {
        const postListRef = ref(database, 'Subject');
        const newPostRef = push(postListRef);
        set(newPostRef, props);
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (!data.subject || !data.topic || !data.notice) {
            toast.error('Please fill each field');
        }
        else {
            addSubject(data);
            toast.success('Subject added successfully');
            reset();
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("subject")} margin="dense" fullWidth select label="Select Subject" id="fullWidth">
                    <MenuItem value='Physics'>
                        Physics
                    </MenuItem>
                    <MenuItem value='Chemistry'>
                        Chemistry
                    </MenuItem>
                    <MenuItem value='Biology'>
                        Biology
                    </MenuItem>
                    <MenuItem value='Mathematics'>
                        Mathematics
                    </MenuItem>
                    <MenuItem value='English'>
                        English
                    </MenuItem>
                </TextField>
                <TextField {...register("topic")} margin="dense" fullWidth label="Topic" id="fullWidth" />
                <TextField {...register("notice")} margin="dense" multiline fullWidth label="Notice" id="fullWidth" />
                <div style={{ textAlign: 'center', margin: '2rem' }}>
                    <Button type="submit" style={{ align: 'center' }} variant="contained"><SaveIcon />Save</Button>
                </div>
            </form>
        </div >
    );
};

export default AddSubject;