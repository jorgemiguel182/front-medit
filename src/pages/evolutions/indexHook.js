import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import moment from 'moment';

import api from '../../services/api';

const PacientHook = () => {

  const { id, evolution_id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState('');
  const [data, setData] = useState([]);
  const [symptomTable, setSymptomTable] = useState({});
  const [block, setBlock] = useState(false);
  const [values, setValues] = useState({
    name: '',
    date: moment().format('YYYY-MM-DD'),
    tel: '',
    register: '',
    register_date: moment().format('YYYY-MM-DD'),
    email: '',
    mobile: '',
    test_covid: 'no',
    result_test_covid: '',
    allergies: 'no',
    medication: '',
    health_issues: 'none',
    symptoms: 'none',
    symptoms_date: moment().format('YYYY-MM-DD'),
  });
  
  const handleOpen = (data) => {
    setSymptomTable(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeMultiple = (event, set) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    set(value);
  };

  const handleSearch = async () => {
    try{
      const response = await api.post("/filter-prontuarios", {id: id});
      if(response.data.status === 'OK'){
        enqueueSnackbar('Evoluções não encontradas.', { variant: 'error' });
      }else{
        const evolution = response.data[0].evolutions.filter((item) => {
          return item.evolution_id === evolution_id
        });
        setData(response.data);
        setValues ({...values, ...{name:response.data[0].name}, ...evolution[0]})
      }
    }catch{
      enqueueSnackbar('Evoluções não encontradas.', {variant: 'error'});
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id_prontuario: id,
      evolution_id,
      ...values
    }
    try{
      const response = await api.post('/new-medical-evolution', data);
      enqueueSnackbar('Evolução salva com sucesso', {variant: 'success'});
      setBlock(true);
    }catch{
      enqueueSnackbar('Não foi possível salvar a evolução', {variant: 'error'})
    }
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return {
    values,
    open,
    data,
    symptomTable,
    block,
    handleChange,
    handleSubmit,
    handleChangeMultiple,
    handleOpen,
    handleClose
  }

};

export default PacientHook;
