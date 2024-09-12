import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function LoginPage() {

  return (
    <Box  display='flex' justifyContent='center' alignItems='center' height='100vh'   >
      <Box sx={{background: 'green'}} width='300px' height='250px' display='flex' alignItems='center' flexDirection='column'>
      <Typography variant="h4" m='1rem 0 '>Login Page</Typography>
      <form method="post" style={{width: '85%', display: 'flex', flexDirection: 'column'}}>
        <Box className="container-group"  display='flex' justifyContent='space-between' alignItems='center'>
          <label htmlFor="Gmail">Gmail: </label>
          <TextField type="email" name="email" placeholder="email..." label="Outlined"/>
        </Box>
        <Box className="container-group" m='1rem 0' display='flex' justifyContent='space-between' alignItems='center'>
          <label htmlFor="Password">Password: </label>
          <TextField type="password" name="password" placeholder="password..."/>
        </Box>
        <Box>
          <p className="message">Not register  <Link to='/register' >Bạn chưa đăng kí tài khoản</Link></p>
        </Box>
        <button type="submit" style={{margin: '10px auto'}}>Đăng nhập</button>
      </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
