import { Cancel, CheckCircle } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 15px;
  border: 1px solid #cccccc;
  margin: 1em auto 0.2em;
  min-width: 100%;
  border-radius: 0.5em;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 12px;
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px auto 5px;

  #red {
    color: red;
  }

  #green {
    color: green;
  }
`;

const ValidityItem = ({ item }) => {
  return (
    <ItemDiv>
      <div id={`${item.valid ? 'green' : 'red'}`}>
        {item.valid ? (
          <CheckCircle fontSize="small" />
        ) : (
          <Cancel fontSize="small" />
        )}
      </div>
      <div id={`${item.valid ? 'green' : 'red'}`}>{item.label}</div>
    </ItemDiv>
  );
};

function haveUpper(str) {
  return /[A-Z]/.test(str);
}

function haveLower(str) {
  return /[a-z]/.test(str);
}

function haveSpecial(str) {
  return /[#?!@$%^&*-+]/.test(str);
}

function haveNumbers(str) {
  return /[0-9]/.test(str);
}

function haveLength(str, val) {
  return str.length >= val;
}

const PasswordValidationSection = ({ password }) => {
  const [validationChecks, setValidationChecks] = useState([]);
  const { t } = useTranslation();

  const validationList = [
    {
      label: t('i18n.auth.UPPERCASE_CHARACTERS'),
      valid: false,
      id: 'upper',
      key: 0
    },
    {
      label: t('i18n.auth.LOWERCASE_CHARACTERS'),
      valid: false,
      id: 'lower',
      key: 1
    },
    {
      label: t('i18n.auth.SPECIAL_CHARACTERS'),
      valid: false,
      id: 'special',
      key: 3
    },
    { label: t('i18n.auth.NUMBERS'), valid: false, id: 'number', key: 4 },
    {
      label: t('i18n.auth.MIN_CHAR_LENGTH'),
      valid: false,
      id: 'length',
      key: 5
    }
  ];

  useEffect(() => {
    setValidationChecks(validationList);
  }, [t]);

  const changeControlLabels = (id, boolean) => {
    const validationCopy = [...validationChecks];
    if (validationCopy.length > 0) {
      const findIndex = validationChecks?.findIndex(valid => valid.id === id);
      validationCopy[findIndex].valid = boolean;
      setValidationChecks(validationCopy);
    }
  };

  const processPassword = () => {
    changeControlLabels('upper', haveUpper(password));
    changeControlLabels('lower', haveLower(password));
    changeControlLabels('special', haveSpecial(password));
    changeControlLabels('number', haveNumbers(password));
    changeControlLabels('length', haveLength(password, 8));
  };

  useEffect(() => {
    processPassword();
  }, [password]);

  return (
    <StyledDiv>
      <div>
        <b>{t('i18n.auth.PASSWORD_NEEDS_TO_BE')}</b>
      </div>
      {validationChecks?.map(item => (
        <ValidityItem key={item.key} {...{ item }} />
      ))}
    </StyledDiv>
  );
};

export default PasswordValidationSection;
