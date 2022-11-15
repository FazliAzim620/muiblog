import { Box, Stack,styled ,Typography} from '@mui/material';
import kidsImage from '../../assets/kids.jpg'
import menImage from '../../assets/men.jpg'
import womenImage from '../../assets/women.jpg'
const Category = () => {
    const StyledBox=styled(Box)({
        width:'100%',
        height:200,
        cursor:'pointer',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      
       
    })
    const StyledTypography=styled(Typography)({
        background:'white',
        opacity:'0.8',
        // margin:{md:'25% 50px 25% 50px',xs:'10% 50px 15% 50px',sm:'10% 50px 15% 50px'},
        
        
    })
  return (
    <Box>
  
<Stack direction={{sm:"column",md:'row'}} spacing={{xs:1,sm:2,md:4}} mt={{xs:1,sm:2,md:5}}>
<StyledBox sx={{backgroundImage:`url(${kidsImage})`}}>
    <StyledTypography variant="h4" align='center' sx={{margin:{md:'25% 50px 25% 50px',xs:'10% 50px 15% 50px',sm:'10% 50px 15% 50px'}}}>
Kids
    </StyledTypography>
</StyledBox>
<StyledBox sx={{backgroundImage:`url(${womenImage})`}}>
    <StyledTypography variant="h4" align='center' sx={{margin:{md:'25% 50px 25% 50px',xs:'10% 50px 15% 50px',sm:'10% 50px 15% 50px'}}}>
    Women
    </StyledTypography>
</StyledBox>
<StyledBox sx={{backgroundImage:`url(${menImage})`}}>
    <StyledTypography variant="h4" align='center' sx={{margin:{md:'25% 50px 25% 50px',xs:'10% 50px 15% 50px',sm:'10% 50px 15% 50px'}}}>
  Men
    </StyledTypography>
</StyledBox>
</Stack>

    
     
    </Box>
  )
}

export default Category
