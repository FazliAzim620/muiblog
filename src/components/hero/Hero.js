import {Box,Typography} from '@mui/material';
import HeroImage from '../../assets/HeroImage.jpg'

const Hero = () => {
  return (
    <Box>
      <Typography variant='h4' sx={{fontWeight:'900'}} textAlign='center'>
Fashion <b style={{color:'red'}}>Blog</b>
      </Typography>
      <Typography variant='body2' sx={{fontWeight:'100'}} textAlign='center'>
        We Make you look the better of You!
      </Typography>
      <Box sx={{
        backgroundImage:`url(${HeroImage})`,
        backgroundColor:'black',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        height:{md:'82vh',sm:'50vh',xs:'50vh'}

    
      }}>
<Box sx={{width:{xs:'100%',sm:'50%',md:'40%'},padding:{xs:2,sm:4,md:20}}}>
<Box sx={{background:'white',opacity:'0.8'}}>
    <Typography variant='h6' color='tomato' pt={5} align="center" >
        Trending Styles
    </Typography>
    <Typography variant='h4' color='black' align="center" >
        Life is boring without Fashion
    </Typography>
    <Typography variant='body1' color='black' pb={5} align="center" >
       we love to change your life
    </Typography>
</Box>
</Box>
      </Box>
    </Box>
  )
}

export default Hero
