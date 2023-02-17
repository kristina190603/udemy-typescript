import React from 'react';
import { Route,Routes} from 'react-router-dom'
import ChooseLogin from '../pages/auth/ChooseLogin';
import ChooseRegister from '../pages/auth/ChooseRegister';
import ForgotPassword from '../pages/auth/ForgotPassword';
import MentorLogin from '../pages/auth/MentorLogin';
import MentorRegister from '../pages/auth/MentorRegister';
import NewPassword from '../pages/auth/NewPassword';
import OneQuestions from '../pages/auth/OneQuestions';
import TwoQuestions from '../pages/auth/TwoQuestions';
import UserLogin from '../pages/auth/UserLogin';
import UserRegister from '../pages/auth/UserRegister';
import LessonsPage from '../pages/LessonsPage';
import PageNotFound from '../pages/PageNotFound';
import ProfilePage from '../pages/ProfilePage';


const Routing = () => {
    return (
        <Routes>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='page-not-found' element={<PageNotFound/>}/>
            <Route path='new-password' element={<NewPassword/>}/>
            <Route path='questions-1' element={<OneQuestions/>}/>
            <Route path='questions-2' element={<TwoQuestions/>}/>
            <Route path='choose-login' element={<ChooseLogin/>}/>
            <Route path='choose-register' element={<ChooseRegister/>}/>
            <Route path='user-login' element={<UserLogin/>}/>
            <Route path='user-register' element={<UserRegister/>}/>
            <Route path='mentor-login' element={<MentorLogin/>}/>
            <Route path='mentor-register' element={<MentorRegister/>}/>
            <Route path='lesson' element={<LessonsPage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
        </Routes>
       
    );
};

export default Routing;