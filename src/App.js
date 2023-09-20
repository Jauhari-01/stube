import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {NavBar, ChannelDetail , SearchFeed , Feed ,VideoDetail} from './components';

const App = ()=>{
    return(
        <BrowserRouter>
            <Box sx={{backgroundColor: '#000'}}>
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<VideoDetail />} />
                    <Route path="/channel/:id" exact element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;