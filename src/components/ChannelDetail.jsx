import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(channelData?.items[0]);
      } catch (error) {
        console.error('Error fetching channel detail:', error);
      }
    };

    const fetchVideos = async () => {
      try {
        const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
        setVideos(videoData?.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchChannelDetail();
    fetchVideos();
  }, [id]);

  return (
    <div>
      <Box minHeight = "95vh">
        <Box>
        <div style={{
  background: 'linear-gradient(90deg, rgba(99,9,121,0.41595441595441596) 87%, rgba(0,212,255,1) 100%)',
  zIndex: 10, 
  height: '300px', 
}}/>
  <ChannelCard channelDetail = {channelDetail} marginTop = "-110px"/>


        </Box>
      <Box display = "Flex" p = "2">
        <Box sx = {{mr:{sm:'100px'}}}/>
          <Videos videos = {videos}/>


      </Box>

      </Box>

    </div>
  );
}

export default ChannelDetail;
