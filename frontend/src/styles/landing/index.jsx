import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../theme'

//CONTAINER

export const LandingContainer = styled(Box)(() => ({
  padding: '0 10%',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
}))

export const LandingBoxU = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  paddingTop: '40px',
  width: '50%',
}))

export const LandingBoxD = styled(Box)(() => ({
  padding: '40px 40px 65px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  backgroundColor: Colors.bgdivD,
  borderRadius: '0 100px 0 0',
  width: '50%',
}))

export const LandingBoxT = styled(Box)(() => ({
  padding: '20px 30px 35px 30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: Colors.bgdivT,
  borderRadius: '0 100px 0 0',
  width: '50%',
}))

export const LandingBoxQ = styled(Box)(() => ({
  padding: '20px ',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: Colors.bgdivQ,
  borderRadius: '0 100px 0 0',
  width: '50%',
}))

//TYPOGRAPHY

export const LandingTypographyTitle = styled(Typography)(() => ({
  fontSize: '30px',
  color: Colors.title,
  marginTop: '20px',
  fontWeight: '500',
}))

export const LandingTypographySubTitle = styled(Typography)(() => ({
  fontSize: '20px',
  color: Colors.title,
  fontWeight: '500',
}))

export const LandingTypographyUnderTitle = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: '500',
}))

export const LandingTypography = styled(Typography)(() => ({
  fontSize: '14px',
}))
export const LandingTypographyBold = styled('span')(() => ({
  fontSize: '14px',
  color: Colors.title,
}))

//IMG

export const LandingImg = styled('img')(() => ({
  position: 'relative',
  width: '-webkit-fill-available',
}))

export const LandingImg2 = styled('img')(() => ({
  position: 'relative',
}))

export const LandingPicto1 = styled('img')(() => ({
  position: 'absolute',
  width: '180px',
  right: '16%',
  top: '192%',
}))

export const LandingPicto2 = styled('img')(() => ({
  position: 'absolute',
  width: '65px',
  top: '105%',
  left: '47%',
}))
export const LandingPicto3 = styled('img')(() => ({
  position: 'absolute',
  width: '180px',
  right: '10%',
  top: '86%',
}))
