import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {ListItemButton} from "@mui/material";

export default function ListOfProducts() {
  return (
    <Container>
      <Typography variant="h4" className={'f_title'}>
        Список всех продуктов здесь!
      </Typography>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        <li>
          <ul>
            <ListSubheader>Category</ListSubheader>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 1`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 2`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 3`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 4`} />
              </ListItemButton>
            </ListItem>
            <ListSubheader>Category 2</ListSubheader>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 1`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 2`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 3`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Item 4`} />
              </ListItemButton>
            </ListItem>
          </ul>
        </li>
      </List>
    </Container>
  )
}