import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useSnackbar} from 'notistack';
import moment from 'moment';

import api from '../../../services/api';

const modalHook = () => {
  const history = useHistory();
  const { id, symptom_id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = useState({
    date_created:'',
    ageusa:'',
    anosmia:'',
    astralgia:'',
    caimbras:'',
    cefaleia_leve:'',
    cefaleia_forte:'',
    congestao_nasal:'',
    diarreia:'',
    dor_abdominal:'',
    dor_costas:'',
    dor_olhos:'',
    dor_torax_peito:'',
    edema:'',
    falta_ar_leve:'',
    falta_ar_media:'',
    formigamento:'',
    fraqueza_astemia:'',
    garganta:'',
    garganta_irritada:'',
    inapetencia:'',
    mialgia:'',
    nauseas:'',
    odinofagia:'',
    otalgia:'',
    pressao_olhos:'',
    prurido:'',
    sinusite:'',
    sudorese:'',
    tontura:'',
    vomitos:'',
    sat_oxigenio_m:'',
    sat_oxigenio_t:'',
    sat_oxigenio_n:'',
    sat_oxigenio_moderado_m:'',
    sat_oxigenio_moderado_t:'',
    sat_oxigenio_moderado_n:'',
    temperatura_m:'',
    temperatura_t:'',
    temperatura_n:'',
    temperatura_normal_m:'',
    temperatura_normal_t:'',
    temperatura_normal_n:'',
    temperatura_febre_m:'',
    temperatura_febre_t:'',
    temperatura_febre_n:'',
    temperatura_febre_alta_m:'',
    temperatura_febre_alta_t:'',
    temperatura_febre_alta_n:'',
    temperatura_hipertermia_m:'',
    temperatura_hipertermia_t:'',
    temperatura_hipertermia_n:'',
    temperatura_frio_calor_sudorese:'',
    fisiologia_respiratoria_m:'',
    fisiologia_respiratoria_t:'',
    pronar_m:'',
    pronar_t:'',
    pronar_n:'',
    ivermectina:'',
    azitromicina:'',
    vitamina_d:'',
    vitamina_c:'',
    zinco:'',
    curcuma:'',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    const data = {
      id,
      ...values
    }

    try{
      const response = await api.post('/new-symptom-table', data);
      enqueueSnackbar('Tabela de sintomas salva com sucesso', {variant: 'success'});
      history.push(`/evolutions/${id}`)
    }catch{
      enqueueSnackbar('Não foi possível salvar', {variant: 'error'});
    }
  }

  const handleSearch = async () => {
    try{
      let symptom = {};
      const response = await api.post("/filter-prontuarios", {id: id});
      if(response.data.status === 'OK'){
        enqueueSnackbar('Sintomas não encontrados.', { variant: 'error' });
      }else{
        symptom = response.data[0].symptom_table.find((item) => {
        return item.symptom_table_id === symptom_id
        });
        if (symptom) {
          symptom.date_created = moment(symptom.date_created.substr(0,10)).format("YYYY-MM-DD")
        }
        setValues ({...values, ...symptom})
      }
    }catch{
      enqueueSnackbar('Sintomas não encontradosXXXX', {variant: 'error'});
    }
  }

  useEffect(() => {
    handleSearch();
  }, [])

  return {
    values,
    setValues,
    handleChange,
    handleSubmit
  }

};

export default modalHook;
