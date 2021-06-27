import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 360,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface VideoItemProps {
  title: string;
  viewCount: number;
  contentUrl: string;
  channelName: string;
  uploadDate: string;
  thumbNailUrl: string;
}

export default function VideoItem({
  title,
  viewCount,
  contentUrl,
  channelName,
  uploadDate,
  thumbNailUrl,
}: VideoItemProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a href={contentUrl}>
        <CardMedia className={classes.media} image={thumbNailUrl} title="Paella dish" />
      </a>
      <CardHeader
        title={title}
        subheader={
          <>
            {channelName} <br /> 조회수 {viewCount}회 {uploadDate}분전
          </>
        }
      />
    </Card>
  );
}
