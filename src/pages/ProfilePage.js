import React, { useEffect, useState } from 'react'
import styles from '../styles/ProfilePage.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function ProfilePage() {
    const [editable, setEditable] = useState(false)
    const [message, setMessage] = useState(null);
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate();

    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3001',
    });

    useEffect(()=>{
        
    const profile = async () => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'http://localhost:3001',
        });
        instance.get('/user')
            .then(response => {
                setUserName(response.data.user.userName)
                setEmail(response.data.user.email)
                setMobile(response.data.user.mobile)
            })
            .catch(error => {
                setMessage(error.response.data.status)
            });
    };
    profile()
    },[])

    function handleEdit() {
        setMessage('')
        setEditable(true)
    }

    function handleSave() {
        setEditable(false)
        let data={}
        data.userName=userName
        data.mobile=mobile
        data.email=email
        instance.patch('user/updateMe',data)
        .then(response => {
            setMessage('Update successful')
        })
        .catch(error => {
            setMessage(error.response.data.status)
        });
    }

    const handleLogout = async () => {
        instance.get('/user/logout')
            .then(response => {

                setMessage('Logout successful')
                Cookies.remove('jwt')
                navigate('/login')
                // window.location.href = '/login';
            })
            .catch(error => {
                setMessage(error.response.data.status)
            });
    };

    return (
        <div className={styles.profilePageWrapper}>
            <div className={styles.profilePageInnerWrapper}>
                {/* <div>
                    <img src="delhi.jpg" alt="" />
                </div> */}
                <form action="">
                    <label htmlFor="userName"> User Name</label>
                    <input type="text" disabled={!editable}  defaultValue={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <label htmlFor="email" >Email</label>
                    <input type="email" disabled={!editable}  defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="mobile" >Mobile Number</label>
                    <input type="text" maxLength={10} disabled={!editable}  defaultValue={mobile} onChange={(e) => setMobile(e.target.value)}/>
                </form>
                {message && <p className="error">{message}</p>}

                {!editable && <button onClick={handleEdit} className={styles.editButton}>Edit</button>}
                {editable && <button onClick={handleSave} className={styles.saveButton}>Save</button>}
                <button onClick={handleLogout} className={styles.saveButton}>Logout</button>

                <Link to='/updatePassword'><button className={styles.updatepassword}>Update Password</button></Link>
                <Link to='/admin' ><button className={styles.dashoboardButton}>DashBoard</button></Link>

            </div>
        </div>
    )
}
