import api from '../services/api';

const handleDownload = (setLoading, date_ini, date_fim, id_prontuario = null) => {
  date_ini = date_ini + "T00:00:00"
  date_fim = date_fim + "T23:59:59"
  let postData = {};
  let endpoint = '/export-prontuarios'
  if (id_prontuario) {
    postData = {id_prontuario};
    endpoint = '/export-prontuario'
  } else {
    postData = {
      date_ini,
      date_fim
    };
  }
  setLoading(true);
  api.post(endpoint, postData).then((response) => {
    const link = document.createElement('a');
    link.href = response.data;
    link.download = 'prontuario';
    link.click();
  }).catch(() => {}).finally(()=>setLoading(false));
}

export default { handleDownload }