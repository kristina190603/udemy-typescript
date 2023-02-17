import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Alert, Button, Container, TextField, Typography,} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'
import { useAuth } from '../../contexts/authContext';
import { emailT, passwordConfirmT, passwordT } from '../../hooks/type';

const NewPassword: React.FC = () => {
  const [email, setEmail]= useState<emailT>('')
  const [password, setPassword]= useState<passwordT>('')
  const [passwordConfirm, setPasswordConfirm]= useState<passwordConfirmT>('')
  const {forgotPasswordConfirm,error} = useAuth()
    const navigate = useNavigate()



    const handleSave = () => {
      if(!email.trim() || !password.trim() || !passwordConfirm.trim()){
        alert('Заполните поля')
      }
      let formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      formData.append('password_confirm', passwordConfirm)

      forgotPasswordConfirm(formData)
    }
    console.log(email,password,passwordConfirm);
    
    return (
        <Container component='main' maxWidth='xs' sx={{mt: 16}} >
        <Typography sx={{fontWeight: 700, fontSize: '23px', borderBottom: '1px solid black', paddingBottom: '15px', marginBottom: '40px'}}> Сбросить пароль</Typography>
        {error? (<Alert sx={{marginBottom: '25px'}} severity='error'>{error}</Alert>) : (null)}

        <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                  label="Адрес электронной почты"
                  type="text"
                  id="email"
                  className='mentor-reg__input'

                />      
        <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className='mentor-reg__input'
                  sx={{mt:2}}

                />      
        <TextField
                  required
                  fullWidth
                  value={passwordConfirm}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPasswordConfirm(e.target.value)}
                  name="password"
                  label="Потвердите пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  className='mentor-reg__input'
                  sx={{mt:2}}

                />      
                 <Button
              type="submit"
              fullWidth
              onClick={handleSave}
              variant="contained"
              className='mentor-reg__btn'
              sx={{ mt: 3, mb: 2, background: 'black', borderRadius: '20px'}}
            >
            Отправить
            </Button>
           
                </Container>
    );
};

export default NewPassword;