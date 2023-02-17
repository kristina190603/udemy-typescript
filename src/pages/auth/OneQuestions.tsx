import React, {useState} from 'react';
import {Container,Grid,Button, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';


const OneQuestions: React.FC = () => {
    const {user,setUser}= useAuth()
    const navigate = useNavigate()
    console.log(user);



 
    
    return (
        <Container >
            <Grid sx={{display:'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>
            <h1>Поделитесь своими навыками</h1>
            <p style={{width: '50vw'}}>Курсы Lans2k - это обучение на основе видеоматериалов, которые помогают студентам преорести практические навыки. Вне вне зависимости от того, какой опыт преподавания у вас есть, мы поможем вам организовать ваши материалы в виде онлайн-курса, чтобы студентам было интересно и полезно их изучать. </p>

            <h2>Каким видом преподавания вы занимались раньше?</h2>
            
            <div className='questions-block'>
            <RadioGroup className='questions-block' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser({
            ...user, type: e.target.value
           })} >

<FormControlLabel className='questions-block__label' value={'individual not oficial'} control={<Radio/>} label={'Лично, частным образом'}/>
<FormControlLabel className='questions-block__label' value={'individual prof'} control={<Radio/>} label={'Лично, профессионально'}/>
<FormControlLabel className='questions-block__label' value={'online'} control={<Radio/>} label={'Онлайн'}/>
<FormControlLabel className='questions-block__label' value={'other'} control={<Radio/>} label={'Другое'}/>


</RadioGroup>

           {!user.type.trim()? ( <Button
            disabled
           >Дальше</Button>) : ( <Button
           onClick={()=>navigate('/questions-2')}
           >Дальше</Button>)}
         
          
            
            </div>
        </Grid>
        </Container>
    );
};

export default OneQuestions;