import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const UserHook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { crm } = useParams();
  const [values, setValues] = useState({
    name: "",
    crm: "",
    email: "",
    password: "",
  });

  const newUser = history.location.pathname.includes('new');

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      crm: values.crm,
      name: values.name,
      email: values.email,
      password: values.password
    }
    console.log(data);
    // try {
    //   const response = await api.post('/new-user', data);
    //   enqueueSnackbar(response.data.msg, { variant: 'success' });
    // } catch {
    //   enqueueSnackbar('Não foi possível cadastrar o médico', { variant: 'error' });
    // }
  }

  useEffect(() => {
    if(!newUser){
      const filter = {
        cpf: "0"  //! MUDAR PARA CRM
      }
      api.post('/filter-researchs', filter).then((response) => {
        setValues(response.data[0]);
      })
    }
  }, [])

  return {
    crm,
    values,
    handleChange,
    handleSubmit
  }

};

export default UserHook;
