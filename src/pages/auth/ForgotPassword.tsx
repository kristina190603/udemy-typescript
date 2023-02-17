import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import {Alert, Button, Container, TextField, Typography,} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'
import { useAuth } from '../../contexts/authContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { emailT } from '../../hooks/type';





const ForgotPassword: React.FC = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState<emailT>('')
    const {forgotPassword,error,success,setError,setSuccess} = useAuth()
    const [isRechapt, setIsRechapt] = useState<boolean>(false)

    const chapkey = '6LcVa4MkAAAAAGRZEt2zTBIumrqv5mgzAZsNrR4M'

  const handleSave = () =>{
      if(!email.trim()){
        alert('Заполните поля')
      }

      if(isRechapt){
        let formData = new FormData()
      formData.append('email',email)

      forgotPassword(formData)
      }else{
        setError('Пройдите проверку!')
      }
      
  }


  const reChapt = () =>{
    setIsRechapt(true)
  }

 useEffect(()=>{
  setError('')
  setSuccess('')
 },[])   
  
    return (
      <Container component='main' maxWidth='xs' sx={{mt: 16}} >
        <Typography sx={{fontWeight: 700, fontSize: '20px', borderBottom: '1px solid black', paddingBottom: '15px', marginBottom: '40px'}}>Забыли пароль?</Typography>
        {error? (<Alert severity='error'>{error}</Alert>) : (null)}
        {success? (<Alert>{success}</Alert>) : (null)}
       
        <TextField
                  required
                  fullWidth
                  sx={{marginTop: '20px'}}
                  value={email}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                  label="Адрес электронной почты"
                  type="text"
                  className='mentor-reg__input'

                />     
                 <ReCAPTCHA
                 style={{marginTop: '20px'}}
    sitekey={chapkey}
    onChange={reChapt}
  /> 
                
                 {success? (<Button
              type="submit"
              onClick={()=>navigate('/new-password')}
              fullWidth
              variant="contained"
              className='mentor-reg__btn'
              sx={{ mt: 3, mb: 2, background: 'black', borderRadius: '20px'}}
            >
            Сбросить пароль
            </Button>) : (<Button
              type="submit"
              onClick={()=>handleSave()}
              fullWidth
              variant="contained"
              className='mentor-reg__btn'
              sx={{ mt: 3, mb: 2, background: '#02516b', borderRadius: '20px'}}
            >
            Отправить запрос
            </Button>)}

            <Typography sx={{textAlign: 'center', fontSize:'17px', fontWeight: '600'}}>Или</Typography>
                 <Button
              type="submit"
              onClick={()=>navigate('/choose-login')}
              fullWidth
              variant="contained"
              className='forgot-password__btn'
              sx={{ mt: 3, mb: 2, borderRadius: '20px', background: "#02516b"}}
            >
            Войти
            </Button>
           
                </Container>
    );
};

export default ForgotPassword;