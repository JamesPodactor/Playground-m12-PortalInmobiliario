import { getProperty, getEquipments, updateContact } from "./property-detail.api";
import { mapPropertyDetailApiToVm, mapContactVmToApi } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from "../../common/helpers/element.helpers";
import { formValidation } from "./property-detail.validations";

const params = history.getParams();

Promise.all([getProperty(params.id), getEquipments()]).then(
    ([apiProperty, equipments]) => {
        const vMProperty = mapPropertyDetailApiToVm(apiProperty, equipments);
        setPropertyValues(vMProperty);
    }
)

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', event => {
  const value = event.target.value;
  contact = {
    ...contact, 
    email: value,
  };

  formValidation.validateField('email', contact.email).then(result => {
    onSetError('email', result);
  });
});

onUpdateField('message', event => {
  const value = event.target.value;
  contact = {
    ...contact,
    message: value,
  };
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then(result => {
    onSetFormErrors(result);
    if(result.succeeded) {
      const apiContact = mapContactVmToApi(contact);
      updateContact(apiContact).then(response => {
        alert("Mensaje enviado con éxito");
      })
    }
  });
});
