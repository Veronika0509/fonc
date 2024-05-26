import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from "@mui/material/Button";

export default function createProduct() {
  return (
    <Container>
      <Typography variant="h4" className={'f_title'}>
        Добавьте свой собственный продукт!
        <form className='addForm'>
          <div>
            <TextField id="standard-basic" label="Название продукта" variant="outlined" sx={{width: 800}}/>
          </div>
          <TextField id="standard-basic" label="Калорийность" variant="outlined" sx={{width: 189}}
           InputProps={{
             startAdornment: <InputAdornment position="start">ккал</InputAdornment>,
           }}
          />
          <TextField id="standard-basic" label="Белки" variant="outlined" sx={{width: 189, marginLeft: '15px'}}
           InputProps={{
             startAdornment: <InputAdornment position="start">г</InputAdornment>,
           }}
          />
          <TextField id="standard-basic" label="Жиры" variant="outlined" sx={{width: 189, marginLeft: '15px'}}
           InputProps={{
             startAdornment: <InputAdornment position="start">г</InputAdornment>,
           }}
          />
          <TextField id="standard-basic" label="Углеводы" variant="outlined" sx={{width: 189, marginLeft: '15px'}}
           InputProps={{
             startAdornment: <InputAdornment position="start">г</InputAdornment>,
           }}
          />
          <div>
            <Button type='submit' variant='contained'>Создать продукт</Button>
          </div>
        </form>
      </Typography>
    </Container>
  )
}