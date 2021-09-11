import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

const PacientHook = () => {

  const { cpf } = useParams();
  const [values, setValues] = useState({});
  const [open, setOpen] = useState('');

  const handleOpen = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  useEffect(() => {

    const filter = {
      cpf
    }
    
  }, [])

  return {
    cpf,
    values,
    open,
    handleChange,
    handleSubmit,
    handleChangeMultiple,
    handleOpen,
    handleClose
  }

};

export default PacientHook;
