import React, {useState} from 'react';
import theme from 'src/theme';
import moment from 'moment';
import {
  Card,
  Grid,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  filterCard: {
    marginBlock: '10px',
    borderRadius: '20px',
    height: '90px'
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
  const paciente = data[0];

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '100%', display: 'flex'}}>
        <CardContent style={{width: '100%'}}>
          <Grid container spacing={1} direction="column" >
            <Grid item container md={12}  spacing={8}>
                <Grid item md={1}>
                  <Typography className={classes.title}  align='left'>
                    Paciente:
                  </Typography>
                </Grid>
                <Grid item md={11}>
                  <Typography align='left' className={classes.content} >
                    {paciente?.name}
                  </Typography>
                </Grid>
            </Grid>
            <Grid item container md={12} justifyContent="flex-start" spacing={8} >
                <Grid item lg={1}>
                  <Typography className={classes.title} align='left'>
                    Telefone:
                  </Typography>
                </Grid>
                <Grid item lg={2}>
                  <Typography align='left' className={classes.content}>
                  {paciente?.phone}
                  </Typography>
                </Grid>
                <Grid item lg={1} style={{marginInlineStart: '-15px'}}>
                  <Typography className={classes.title} align='left'>
                    Idade:
                  </Typography>
                </Grid>
                <Grid item lg={2} style={{marginInlineStart: '-25px'}} >
                  <Typography align='left' className={classes.content} >
                    {paciente && Math.floor(moment(new Date()).diff(moment(paciente?.born_date,"YYYY-MM-DD"),'years',true))+" anos"}
                  </Typography>
                </Grid>
                
            </Grid>
            
          </Grid>
        </CardContent>
        
      </Card>
  );
}

export default HeaderPacient;