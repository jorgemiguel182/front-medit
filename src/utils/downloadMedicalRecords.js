const handleDownload = (startDate, endDate, idPacient = null) => {
  if (idPacient) {
    console.log(idPacient);
  } else {
    console.log(`ENDPOINT DOWNLOAD PAYLOAD: ${startDate} & ${endDate}` )
  }
}

export default { handleDownload }