import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

const PacientHook = () => {

  const { cpf } = useParams();
  const [values, setValues] = useState({
    name: "",
    cpf: "",
    tel: "",
    born_state: "",
    born_city: "",
    height: "",
    weight: "",
    blood_type: "",
    responsible_name: "",
    mother_name: "",
    took_it_on_its_own_days: "",
    indication_person: "",
    postal_code: "",
    atual_address_street: "",
    atual_address_number: "",
    atual_address_complement: "",
    atual_address_district: "",
    atual_address_state: "",
    atual_address_city: "",
    born_date: "1111-11-11",
    first_symptom_date_covid: "1111-11-11",
    vaccine_first_date: "1111-11-11",
    vaccine_second_date: "1111-11-11",
    start_date_symptoms: "1111-11-11",
    treatment: "",
    alergy_medication: "no",
    alergy_medication_other: "",
    deficiency_other: "",
    bald: "none",
    pregnant: "none",
    breastfeeding: "none",
    baby_age: "",
    polycystic_ovary: "no",
    any_covid: "no",
    got_vaccinated_covid: "no",
    symptom_covid_now: "no",
    many_days_symptons: "",
    average_temp_if_have_fever: "not_measured",
    oxygen_saturation: "not_measured",
    pre_treatment: "no",
    pre_treatment_yes: "",
    pre_treatment_hospitalized: "no",
    pre_treatment_yes_hospitalized: "",
    days_hospitalized: "",
    test_before_treatment_result: "negative",
    study_for_prophylaxis: "no",
    many_days_medicines: "",
    took_it_on_its_own: "no",
    took_it_on_its_own_days: "",
    took_it_on_its_own_medicines_other: "",
    have_any_deseases_others: "",
    daily_medication: "no",
    daily_medication_yes: "",
    drugs: "no",
    drugs_yes: "",
    indication_person: "",
    term_accept_1: "",
    term_accept_2: "",
    term_accept_3: "",
  });

  const [deficiency, set_deficiency] = useState([])
  const [any_desease, set_any_desease] = useState([])
  const [symptons_now, set_symptons_now] = useState([])
  const [test_before_treatment, set_test_before_treatment] = useState([])
  const [why_not_tested, set_why_not_tested] = useState([])
  const [medicine_before_treatment, set_medicine_before_treatment] = useState([])
  const [took_it_on_its_own_medicines, set_took_it_on_its_own_medicines] = useState([])
  const [have_any_deseases, set_have_any_deseases] = useState([])
  const [smoker, set_smoker] = useState([])
  const [alcohool, set_alcohool] = useState([])

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
    
    values.deficiency = deficiency;
    values.any_desease = any_desease;
    values.symptons_now = symptons_now;
    values.test_before_treatment = test_before_treatment;
    values.why_not_tested = why_not_tested;
    values.medicine_before_treatment = medicine_before_treatment;
    values.took_it_on_its_own_medicines = took_it_on_its_own_medicines;
    values.have_any_deseases = have_any_deseases;
    values.smoker = smoker;
    values.alcohool = alcohool;

    console.log(values)
  }

  useEffect(() => {

    const filter = {
      cpf
    }

    api.post('/filter-researchs', filter).then((response) => {
      setValues(response.data[0]);

      set_deficiency(response.data[0].deficiency);
      set_any_desease(response.data[0].any_desease);
      set_symptons_now(response.data[0].symptons_now);
      set_test_before_treatment(response.data[0].test_before_treatment);
      set_why_not_tested(response.data[0].why_not_tested);
      set_medicine_before_treatment(response.data[0].medicine_before_treatment);
      set_took_it_on_its_own_medicines(response.data[0].took_it_on_its_own_medicines);
      set_have_any_deseases(response.data[0].have_any_deseases);
      set_smoker(response.data[0].smoker);
      set_alcohool(response.data[0].alcohool);
      console.log("RETURNNNNNNNNNN >>>> ", response)

    })
  }, [])

  return {
    cpf,
    values,
    deficiency,
    any_desease,
    symptons_now,
    test_before_treatment,
    why_not_tested,
    medicine_before_treatment,
    took_it_on_its_own_medicines,
    have_any_deseases,
    smoker,
    alcohool,
    set_deficiency,
    set_any_desease,
    set_symptons_now,
    set_test_before_treatment,
    set_why_not_tested,
    set_medicine_before_treatment,
    set_took_it_on_its_own_medicines,
    set_have_any_deseases,
    set_smoker,
    set_alcohool,
    setValues,
    handleChange,
    handleSubmit,
    handleChangeMultiple
  }

};

export default PacientHook;
