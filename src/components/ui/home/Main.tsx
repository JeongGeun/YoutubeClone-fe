import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../..';
import VideoItem from '../common/VideoItem';
import axios from 'axios';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

interface videoItemProps {
  title: string;
  viewCount: number;
  contentUrl: string;
  channelName: string;
  uploadDate: string;
  thumbNailUrl: string;
}

export default function Main() {
  const classes = useStyles();
  const open = useSelector((state: RootState) => state.Toggle.open);
  const [playLists, setplayLists] = useState<videoItemProps[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setplayLists(null);
        setLoading(true);
        const response = await axios.get('/api/videos');
        console.log(response);
        setplayLists(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!playLists) return null;
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />

      {playLists.map((item, index) => (
        <VideoItem
          key={index}
          thumbNailUrl={item.thumbNailUrl}
          contentUrl={item.contentUrl}
          title={item.title}
          viewCount={item.viewCount}
          uploadDate={item.uploadDate}
          channelName={item.channelName}
        ></VideoItem>
      ))}
    </main>
  );
}
