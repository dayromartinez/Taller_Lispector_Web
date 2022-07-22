import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }} className='loading-component'>
      <CircularProgress className='loading-child' />
    </Box>
  )
}
