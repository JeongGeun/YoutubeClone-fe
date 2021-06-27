import { rest } from 'msw';

export const handlers = [
  rest.get('/api/videos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: '넌 이미 죽어있다 LCK TI IS COMMING',
          contentUrl: '#',
          viewCount: 10,
          channelName: 'LCK',
          uploadDate: '17',
          thumbNailUrl:
            'https://i.ytimg.com/vi/uPeLND1VgYU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUxxzTPBXbLmJjNYkycAxk7unB_Q',
        },
      ]),
    );
  }),
];
