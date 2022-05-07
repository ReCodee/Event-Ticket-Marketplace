import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import './Event.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Event() {
  return (
      
    <Box id = 'boxx' width = '100%' >
        <Card id = 'cardd' borderRadius={50}>
            <CardMedia 
                component= 'img'
                height = '240px'
                image = 'https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png'
            />
                {/* <div className="card_content_root">
                    <div className="card_content_1">
                        <div className="card_content_1_left">
                            Astronaut
                            <Typography variant = 'body2' color = 'text.secondary' component = 'div'>
                                #0000000
                            </Typography>
                        </div>
                        <div className="card_content_1_right">
                            <FavoriteBorderIcon color="primary" style={{ fontSize: 40 }}/>
                        </div>
                    </div>
                    <CardActions>
                        <Button id = 'buttonn' size = 'large' >25000 FINS</Button>
                    </CardActions>
                    
                </div> */}

                <div className="card_content_root" >
                    <div className="card_content_1">
                        <div className="event_name_place_time">
                            <p><b>NFT.NYC 2022</b></p>
                            <p>New York City, NT = Wed, 02 Nov 2022</p>
                        </div>
                        <div className="event_price">
                            $500
                        </div>
                    </div>

                    <div className="card_content_2">
                        <div className="event_subject">
                            NFT.NYC brings the Non-Fungible Token community together in NYC for debates, talks and workshops
                        </div>
                        <div className="view_event">
                            View Event
                        </div>
                    </div>
                </div>

            
        </Card>
    </Box>
  )
}

export default Event;