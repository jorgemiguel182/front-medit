import React, {useEffect, useState} from 'react';

import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  Select,
  option
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  selectInput: {
    fontSize: 'smaller'
  }
}));

const SearchPacient = ({setFilter}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  return (
    <Card
    style={{background: '#F3F6F4', marginBlock: '10px', borderRadius: '20px'}}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <TextField
              size="small"
              fullWidth
              label='Nome'
              onChange={event => setName(event.target.value)}
              value={name}
              variant="outlined"
            />
          </Grid>
          <Grid item lg={4}>
            <Select
              className={classes.selectInput}
              native
              size="small"
              variant='outlined'
              name="medicine_before_treatment"
              onChange={event => setStatus(event.target.value)}
              value={status}
            >
              <option value="">Selecione o status</option>
              <option value="paid">Pendente prontuário</option>
              <option value="answered">Pendente pagamento</option>
              <option value="done">Prontuário cadastrado</option>
            </Select>
          </Grid>
          <Grid item lg={2}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={()=>setFilter({
                name,
                status
              })}
              >
                Filtrar</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SearchPacient;