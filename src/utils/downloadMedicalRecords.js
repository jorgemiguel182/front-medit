import api from '../services/api';

const handleDownload = (date_ini, date_fim, id_prontuario = null) => {
  let postData = {};
  if (id_prontuario) {
    postData = {id_prontuario};
  } else {
    postData = {
      date_ini,
      date_fim
    };
  }
  api.post("/export-prontuarios", postData).then((response) => {
    console.log(response);
  }).catch(() => {});
}

export default { handleDownload }