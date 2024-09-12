import { Box, TextField, Typography } from "@mui/material";
import {  useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "~/contexts/ContextProvider";
import axiosClient from "~/service/httpRequest";

function RegisterPage() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/register', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch((error) => {
            const response = error.response;
            if (response && response.status === 422) {
                console.log(response.data.error);
            }
        })
    }
    return (<Box display='flex' justifyContent='center' alignItems='center' height='100vh'   >
        <Box sx={{ background: 'green' }} width='300px' height='350px' display='flex' alignItems='center' flexDirection='column'>
            <Typography variant="h4" m='1rem 0 '>Login Page</Typography>
            <form onSubmit={handleSubmit} method="post" style={{ width: '85%', display: 'flex', flexDirection: 'column' }}>
                <Box className="container-group" display='flex' justifyContent='space-between' alignItems='center'>
                    <label htmlFor="username">Username: </label>
                    <TextField inputRef={nameRef} type="text" name="username" placeholder="username..." label="Username" autoComplete="username" />
                </Box>
                <Box className="container-group" m='0.5rem 0' display='flex' justifyContent='space-between' alignItems='center'>
                    <label htmlFor="Gmail">Gmail: </label>
                    <TextField inputRef={emailRef} type="email" name="email" placeholder="email..." label="Gmail" />
                </Box>
                <Box className="container-group" m='0.5rem 0' display='flex' justifyContent='space-between' alignItems='center'>
                    <label htmlFor="Password">Password: </label>
                    <TextField inputRef={passwordRef} type="password" name="password" placeholder="password..." label="Password" autoComplete="current-password" />
                </Box>
                <Box>
                    <p className="message">Already have an acoount?  <Link to='/login' >Login</Link></p>
                </Box>
                <button type="submit" style={{ margin: '10px auto' }}>Đăng nhập</button>
            </form>
        </Box>
    </Box>);
}

export default RegisterPage;