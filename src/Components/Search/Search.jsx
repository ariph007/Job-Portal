import { LocationOnOutlined, SearchOutlined } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react'
import Buttons from '../Buttons/Buttons';
const Search = () => {
  const [datePosted, setDatePosted] = React.useState('');

  const handleChange = (event) => {
    setDatePosted(event.target.value);
  };

  return (
    <div>
      <div className="inputSearch bg-blue-600 mt-8 h-64 lg:h-20 flex items-center w-full rounded-md content-center">
        <form className='flex flex-col lg:flex-row flex-wrap gap-4 mx-4 lg:ml-0 lg:gap-0 w-full justify-around lg:content-center lg:items-center'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
            <SearchOutlined sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Job title, keyword or company" color="info" variant="standard" sx={{ input: { color: 'white' } }}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LocationOnOutlined sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Area, city or town" color="info"  variant="standard" sx={{ input: { color: 'white' } }}/>
          </Box>
          <Select
          value={datePosted}
          onChange={handleChange}
          displayEmpty
          autoWidth
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Any time
          </MenuItem>
          <MenuItem value={1} >Last 24 hours</MenuItem>
          <MenuItem value={3}>Last 3 days</MenuItem>
          <MenuItem value={7}>Last 7 days</MenuItem>
          <MenuItem value={14}>Last 14 days</MenuItem>
          <MenuItem value={30}>Last 30 days</MenuItem>
        </Select>
        <Buttons type='search' text='Search'/>
        </form>
      </div>
    </div>
  )
}

export default Search