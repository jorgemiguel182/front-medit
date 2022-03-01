import React, {useState} from 'react';
import theme from 'src/theme';

import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  filterCard: {
    marginBlock: '10px',
    borderRadius: '20px',
    height: '60px'
  },
  content: {
    color: theme.palette.primary.main,
    fontSize: '1.2em !important',
    fontWeight: 'bold !important'
  },
  title: {
    fontSize: '1.2em !important'
  }
}));

const HeaderPacient = ({data}) => {
  const classes = useStyles();
  const [name, setName] = useState('');

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '100%', display: 'flex'}}>
        <CardContent style={{width: '100%'}}>
          <Grid container spacing={2}>
            <Grid item container justifyContent="flex-start" alignItems="center" lg={4} spacing={1}>
              <Grid item lg={2}>
                <Typography className={classes.title}  align='right'>
                  Paciente:
                </Typography>
              </Grid>
              <Grid item lg={9}>
                <Typography align='left' className={classes.content} >
                  {data[0]?.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-start" alignItems="center" lg={2} spacing={1}>
              <Grid item lg={6}>
                <Typography className={classes.title} align='right'>
                  Idade (anos):
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography align='left' className={classes.content} >
                  47
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-start" alignItems="center" lg={3} spacing={1}>
              <Grid item lg={2}>
                <Typography align='right' className={classes.title} >
                  CPF:
                </Typography>
              </Grid>
              <Grid item lg={10}>
                <Typography align='left' className={classes.content} >
                  045.319.137-10
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-start" alignItems="center" lg={3} spacing={1}>
              <Grid item lg={4}>
                <Typography className={classes.title} align='right'>
                  Telefone:
                </Typography>
              </Grid>
              <Grid item lg={8}>
                <Typography align='left' className={classes.content}>
                  (21) 97538-6001
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

export default HeaderPacient;