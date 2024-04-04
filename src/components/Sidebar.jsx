import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <div>
    <Stack direction="row" sx={{
      overflow: "auto",
      height: { xs: 'auto', md: '95%' },
      flexDirection: { xs: 'row', md: 'column' }
    }}>
      {categories.map(category => (
        <button
          key={category.name}
          className="category-btn"
          onClick = {()=>setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'transparent', 
            color: 'white'
          }}
      
        >
          <span style = {{color:category.name === selectedCategory?'white':'red',marginRight:'15px'}}>{category.icon}</span>
          <span style = {{opacity: category.name === selectedCategory? '1':'0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  </div>
);

export default Sidebar;
