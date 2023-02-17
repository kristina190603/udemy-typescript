import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import './auth.css'
import {useNavigate} from 'react-router-dom'


const ChooseRegister = () => {
    const navigate = useNavigate()
    return (
        <Grid sx={{display:'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
        <h1>Выберите статус</h1>

       <div className='block__btn__login'>
        <Button
        onClick={()=>navigate('/mentor-register')}
        >Ментор</Button>
        <Button
        onClick={()=>navigate('/user-register')}
        >Пользователь</Button>
        </div>
    </Grid>
    );
};

export default ChooseRegister;