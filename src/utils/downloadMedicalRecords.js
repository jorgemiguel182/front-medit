import api from '../services/api';

const handleDownload = (date_ini, date_fim, id_prontuario = null) => {
  date_ini = date_ini + "T00:00:00"
  date_fim = date_fim + "T23:59:59"
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


// const FileDownload = (marketPlace, mlClaimId, idIncidenteCNOVA) => {
//   const getFileFromUrl = (url, filename) => {
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = filename;
//     link.click();
//   };

//   const getFileBase64FromUrl = (hash, filename, fileType) => {
//     const link = document.createElement('a');
//     switch (fileType) {
//       case 'pdf':
//         link.href = `data:application/pdf;base64,${hash}`;
//         break;
//       default:
//         link.href = `data:application/pdf;base64,${hash}`;
//         break;
//     }
//     link.download = filename;
//     link.click();
//   };

//   const openLinkNewTab = links => {
//     links.forEach(link => {
//       const anchorElement = document.createElement('a');
//       anchorElement.href = link;
//       anchorElement.target = '_blank';
//       anchorElement.click();
//     });
//   };

//   const getFileBlob = (
//     purpose,
//     filename,
//     key,
//     originalFilename,
//     attachmentId
//   ) => {
//     let endpoint = '';
//     switch (purpose) {
//       case 'MLClaim':
//         endpoint = `/auth/ms-ticket/v1/tickets/mercadolivre/get-claim-attachs/${mlClaimId}/${filename}`;
//         break;
//       case 'mirakl':
//         endpoint = `/auth/ms-ticket/v1/tickets/mirakl/download/${marketPlace}/${key}`;
//         break;
//       case 'vivo':
//         endpoint = `/auth/ms-ticket/v1/tickets/neoassist/download/${marketPlace}/${key}?fileOrigin=${originalFilename}`;
//         break;
//       case 'cnova':
//         endpoint = `/auth/ms-ticket/v1/tickets/cnova/incident/${idIncidenteCNOVA}/attachment/${attachmentId}`;
//         break;
//       default:
//         return '';
//     }
//     API.get(endpoint, {
//       responseType: 'blob'
//     }).then(response => {
//       const downloadUrl = window.URL.createObjectURL(response.data);
//       const link = document.createElement('a');
//       link.href = downloadUrl;
//       link.setAttribute('download', `${originalFilename}`);
//       document.body.appendChild(link);
//       link.click();
//     });
//   };

//   const getFile = (filename, key, url, originalFilename, attachmentId) => {
//     if (url) {
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = filename;
//       return link.click();
//     }
//     if (mlClaimId) {
//       getFileBlob('MLClaim', filename, key, originalFilename, attachmentId);
//       return;
//     }
//     if (
//       [marketPlacesEnum.CARREFOUR, marketPlacesEnum.KABUM].includes(marketPlace)
//     ) {
//       getFileBlob('mirakl', filename, key, originalFilename, attachmentId);
//       return;
//     }
//     if (marketPlacesEnum.VIVO === marketPlace) {
//       getFileBlob('vivo', filename, key, originalFilename, attachmentId);
//       return;
//     }
//     if (idIncidenteCNOVA) {
//       getFileBlob('cnova', filename, key, originalFilename, attachmentId);
//       return;
//     }
//     API.get(`/auth/ms-ticket/v1/files/${key}`).then(response => {
//       const link = document.createElement('a');
//       link.href = `data:image/png;base64,${response.data.content}`;
//       link.download = filename;
//       link.click();
//     });
//   };
// };


