import React, { useState } from 'react'
import { Container, Typography, Paper, Button } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'
import { useHistory } from 'react-router-dom'

const Profile = () => {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')) ? JSON.parse(localStorage.getItem('profile')) : null)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

  

    const handleLogout = () => {
        dispatch({ type: LOGOUT })
        history.push('/auth')
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                {
                    user ?
                        <>
                            <Typography variant="h5" gutterBottom>{`Email: ${user?.result?.email}`}</Typography>
                            <Typography variant="h5" gutterBottom>{`Mật khẩu: ${user?.result?.password}`}</Typography>
                            <Button onClick={handleLogout} color="secondary" variant="contained">
                                Đăng xuất
                            </Button>
                        </>

                        : <Button><Link to="/auth">Vui lòng xác thực</Link></Button>
                }
            </Paper>
        </Container>
    )
}

export default Profile