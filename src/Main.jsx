import { Box, Container } from '@material-ui/core';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
const Main = () => {
    return (
        <Container>
        <Box>
         <Switch>
             <Route path='/'exact component={Home}/>
             </Switch>   
        </Box>
        </Container>
    )
}

export default Main;
