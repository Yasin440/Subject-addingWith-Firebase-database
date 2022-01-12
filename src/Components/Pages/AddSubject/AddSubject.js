import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from 'react-toastify';
import { ref, push, set, onValue } from "firebase/database";
import database from '../../firebase.config';
import './AddSubject.css';

const initialState = {
    subject: '',
    topic: '',
    notice: ''
}
const AddSubject = () => {
    // const [data, setData] = useState({});
    const [state, setState] = useState(initialState);
    const { subject, topic, notice } = state;
    const navigate = useNavigate();
    const { _id } = useParams();

    const handleChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    //add new list function
    const addSubject = (props) => {
        const postListRef = ref(database, 'Subject');
        const newPostRef = push(postListRef);
        set(newPostRef, props);
    }
    //updated list function
    const updatedSubject = (props) => {
        const postListRef = ref(database, `Subject/${_id}`);
        set(postListRef, props);
    }
    //get single data
    useEffect(() => {
        const starCountRef = ref(database, 'Subject');
        onValue(starCountRef, (snapshot) => {
            let subjectList;
            const data = snapshot.val();
            for (let id in data) {
                if (id === _id) {
                    subjectList = { id, ...data[id] };
                    setState(subjectList);
                }
            }
        });
    }, [_id])
    //add new data
    const handleSubmit = e => {
        if (!subject || !topic || !notice) {
            toast.error('Please fill each field');
        }
        else {
            if (!_id) {
                addSubject(state);
                toast.success('Subject added successfully');
                navigate('/home');
            }
            else {
                updatedSubject(state);
                toast.success('Subject updated successfully');
                navigate('/home');
            }

        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <TextField
                    name="subject"
                    margin="dense"
                    fullWidth
                    select
                    label="Select Subject"
                    id="fullWidth"
                    value={subject || ""}
                    onChange={handleChange}>
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
                <TextField
                    name="topic"
                    margin="dense"
                    fullWidth
                    label="Topic"
                    id="fullWidth"
                    value={topic || ""}
                    onChange={handleChange} />
                <TextField
                    name="notice"
                    margin="dense"
                    multiline
                    fullWidth
                    label="Notice"
                    id="fullWidth"
                    value={notice || ""}
                    onChange={handleChange} />
                <div style={{ textAlign: 'center', margin: '2rem' }}>
                    <Button type="submit" style={{ align: 'center' }} variant="contained"><SaveIcon />{_id ? 'Update' : 'Save'}</Button>
                </div>
            </form>
        </div >
    );
};

export default AddSubject;