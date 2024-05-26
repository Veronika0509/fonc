import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FindOut() {
  return (
    <Container>
      <Typography variant="h4" className={'f_title'}>
        Узнайте количество КБЖУ в любом продукте!
      </Typography>
      <form className='searchForm'>
        <TextField id="outlined-basic" label="Введите продукт" variant="outlined" sx={{ width: '51.5%' }}/>
        <Button variant="outlined" type='submit'>Найти</Button>
      </form>
      <Box>
        <Typography variant="h5" className={'f_productTitle'}>
          Банан (100г)
        </Typography>
        <Box>
          <Paper sx={{ width: '60%', overflow: 'hidden', margin: '25px auto 0 auto' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align='center'
                      className='f_tableHead'
                    >
                      Калории
                    </TableCell>
                    <TableCell
                      align='center'
                      className='f_tableHead'
                    >
                      Белки
                    </TableCell>
                    <TableCell
                      align='center'
                      className='f_tableHead'
                    >
                      Жиры
                    </TableCell>
                    <TableCell
                      align='center'
                      className='f_tableHead'
                    >
                      Углеводы
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow role="checkbox" tabIndex={-1}>
                    <TableCell align='center'>
                      96 ккал
                    </TableCell>
                    <TableCell align='center'>
                      1.5 г
                    </TableCell>
                    <TableCell align='center'>
                      0.5 г
                    </TableCell>
                    <TableCell align='center'>
                      21 г
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Container>
  )
}