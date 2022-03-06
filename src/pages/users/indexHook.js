import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import axios from 'axios';
import formValidate from 'src/utils/formValidate';

const UserHook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { username } = useParams();
  const [confirmPwd, setConfirmPwd] = useState('');
  const [pwdValid, setPwdValid] = useState(false);
  const [values, setValues] = useState({
    name: "",
    crm: "",
    email: "",
    password: ""
  });

  const newUser = history.location.pathname.includes('new');

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const addUserRequest = () => {
    const data = {
      crm: values.crm,
      name: values.name,
      email: values.email,
      password: values.password
    }
    axios.post(`${process.env.REACT_APP_COGNITO_AUTH_URL}/signup`, data)
      .then(() => {
        enqueueSnackbar('Cadastro realizado! É necessário acessar o e-mail para validar o cadastro.', { variant: 'info', persist: true,});
        history.push('/users');
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data === 'This username already exists') {
            enqueueSnackbar('Este e-mail já existe no cadastro', { variant: 'error' });
          } else {
            enqueueSnackbar(error.response.data, { variant: 'error' });
          }
        } 
      });
  }

  const editUserRequest = async () => {
    const data = {
      username,
      name: values.name,
      crm: values.crm
    }
   try {
      const response = await api.post('/edit-user', data);
      enqueueSnackbar('Cadastro atualizado!', { variant: 'success' });
      history.push('/users');
    } catch {
      enqueueSnackbar('Não foi possível cadastrar o médico', { variant: 'error' });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser) {
      addUserRequest();
    } else {
      editUserRequest();
    }
  }

  const alertPwdDif = () => {
    if (confirmPwd !== values.password) {
      enqueueSnackbar('As senhas informadas diferem, verifique!', { variant: 'warning' })
    } 
  }

  const allFiledsFilled = () => {
    if (!newUser) {
      return (
        !formValidate.isEmpty(values.name) && 
        !formValidate.isEmpty(values.crm) 
      );
    } else {
      return (
        formValidate.isEmail(values.email) &&  
        !formValidate.isEmpty(values.name) && 
        !formValidate.isEmpty(values.crm) &&
        pwdValid &&
        (confirmPwd === values.password) 
      );
    }
  }

  useEffect(() => {
    if(!newUser){
      api.post('/list-users', {}).then((response) => {
        const user = response.data.find(el => el.username === username)
        setValues(user);
      })
    }
  }, [])

  return {
    values,
    handleChange,
    handleSubmit,
    alertPwdDif,
    allFiledsFilled,
    setConfirmPwd,
    confirmPwd,
    pwdValid,
    setPwdValid
  }

};

export default UserHook;
