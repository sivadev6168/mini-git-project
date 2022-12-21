import React, { useEffect, memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/newsSlice'
import { Loading } from '../Loading';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const News = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const news = useSelector(state => state.news);
  console.log(news);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])
  console.log(news, 'News')
  return (
    <>
     <Typography sx={{ marginTop: "140px", textAlign:"center" }} variant="h2" gutterBottom>
        Tech News
      </Typography>
      {news.loading && <Loading />}
      {
        !news.loading && news.news.totalResults ? (
          <>
            <Box sx={{ flexGrow: 1 ,justifyContent:"center" }}>
              <Grid container  spacing={6} sx={{padding:'35px'}} columns={{md: 12 }}>
                {news.news.articles.map((newNews, i) => (

                  <Grid item xs={4} key={i} sx={{display: 'flex'}}>
                    <Card sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', padding:"10px", boxShadow :'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' }}>
                     
                        <CardMedia
                          component="img"
                          height="40%"
                          image={newNews.urlToImage}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {newNews.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                           {newNews.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="contained" endIcon={<DoubleArrowIcon />}
        onClick={() => openInNewTab(newNews.url)}
        size="small" sx={{backgroundColor:"#F87171"}}>
          Reade More
        </Button>
        </CardActions>
                    </Card>     
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : null
      }
    </>
  )
}

export default memo(News)