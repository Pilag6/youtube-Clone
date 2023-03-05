import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import DuoIcon from '@mui/icons-material/Duo';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DvrIcon from '@mui/icons-material/Dvr';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarRow icon={<HomeIcon/>} title="Home"/>
        <SidebarRow icon={<DuoIcon/>} title="Shorts"/>
        <SidebarRow icon={<SubscriptionsOutlinedIcon/>} title="Subscriptions"/>
        <hr />
        <SidebarRow icon={<VideoLibraryOutlinedIcon/>} title="Library"/>
        <SidebarRow icon={<HistoryIcon/>} title="History"/>
        <SidebarRow icon={<SlideshowIcon/>} title="Your videos"/>
        <SidebarRow icon={<ScheduleIcon/>} title="Watch Later"/>
        <SidebarRow icon={<ThumbUpOutlinedIcon/>} title="Liked videos"/>
        <SidebarRow icon={<DvrIcon/>} title="React"/>
        <SidebarRow icon={<ExpandMoreIcon/>} title="Show more"/>
        <hr />
        <SidebarRow icon={<WhatshotOutlinedIcon/>} title="Trending"/>
        <SidebarRow icon={<MusicNoteOutlinedIcon/>} title="Shorts"/>
        <SidebarRow icon={<SportsEsportsOutlinedIcon/>} title="Gaming"/>
        <hr />
        
    </div>
  )
}

export default Sidebar