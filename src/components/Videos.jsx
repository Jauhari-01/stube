import React from "react";
import { Stack,Box } from "@mui/material";
import {ChannelCard , VideoCard} from './';

const Videos = ({videos})=>{
    return(
<Stack direction="row" flexWrap='wrap' justifyContent="space-between" gap={2} sx={{
            padding: '16px 82px 10px 38px',}}>

            {
                videos.map((item,index)=>(
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>
                ))
            }

        </Stack>
    );
}

export default Videos;