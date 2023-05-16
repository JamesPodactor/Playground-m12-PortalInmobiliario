import { getSaleTypeList, getProvinceList, getEquipments, updateProperty } from "./upload-property.api";
import {
    formatCheckboxId,
    setCheckboxList,
    setOptionList,
    formatDeleteFeatureButtonId,
    onAddFeature,
    onRemoveFeature,
    onAddImage,
} from "./upload-property.helpers";
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from "../../common/helpers";
import { formValidation } from "./upload-property.validations";
import { mapPropertyVmToApi } from "./upload-property.mappers";

let newProperty = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    newFeature: '',
    mainFeatures: [],
    equipments: [],
    images: '',
};

Promise.all([getSaleTypeList(), getProvinceList(), getEquipments()]).then(
    ([saleTypeList, provinceList, equipmentList]) => {
        setCheckboxList(saleTypeList, 'saleTypes');
        setSalesEvents(saleTypeList);
        setOptionList(provinceList, 'province');
        setCheckboxList(equipmentList, 'equipments');
        setEquipmentEvents(equipmentList);
    }
);

const addSaleType = value => {
    newProperty = {
        ...newProperty,
        saleTypes: [...newProperty.saleTypes, value]
    };
};

const removeSaleType = value => {
    const idElement = newProperty.saleTypes.indexOf(value);
    newProperty = newProperty.saleTypes.filter(element => {
        element !== idElement
    });
};

const addEquipment = value => {
    newProperty = {
        ...newProperty,
        equipments: [...newProperty.equipments, value]
    };
};

const removeEquipment = value => {
    const idCheckbox = newProperty.equipment.indexOf(value);
    newProperty = newProperty.equipment.filter(element => {
        element !== idCheckbox
    });
};

// DATOS GENERALES ________________________________________________________

onUpdateField('title', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, title: value };

    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, notes: value };

    formValidation.validateField('notes', newProperty.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, email: value };

    formValidation.validateField('email', newProperty.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('phone', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, phone: value };

    formValidation.validateField('phone', newProperty.phone).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('price', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, price: value };

    formValidation.validateField('price', newProperty.price).then(result => {
        onSetError('price', result);
    });
});

const setSalesEvents = list => {
    list.forEach(element => {
        const id = formatCheckboxId(element)
        onUpdateField(id, event => {
            const value = event.target.value;
            event.target.checked ? addSaleType(value) : removeSaleType(value);
        })
    })
};

// DATOS DE LA VIVIENDA ___________________________________________________

onUpdateField('address', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, address: value };

    formValidation.validateField('address', newProperty.address).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, city: value };

    formValidation.validateField('city', newProperty.city).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, province: value };

    formValidation.validateField('province', newProperty.province).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, squareMeter: value };

    formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, rooms: value };

    formValidation.validateField('rooms', newProperty.rooms).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, bathrooms: value };

    formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, locationUrl: value };

    formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});

onSubmitForm('insert-feature-button', event => {
    const value = event.target.value;
    newProperty = { 
        ...newProperty, 
        newFeature: [...newProperty.newFeature, value]
    };
    onAddFeature(value);

    const featureId = formatDeleteFeatureButtonId(value);
    onSubmitForm(featureId, event => {
        onRemoveFeature(value);
        const id = newProperty.newFeature.indexOf(value);
        newProperty = newProperty.newFeature.filter(element => {
            element !== id
        });
    })
});

const setEquipmentEvents = list => {
    list.forEach(element => {
        const id = formatCheckboxId(element)
        onUpdateField(id, event => {
            const value = event.target.value;
            event.target.checked ? addEquipment(value) : removeEquipment(value);
        })
    })
};

// SUBIR FOTOS_____________________________________________________________

const setImage = image => {
    const id = onAddImage(image);
    onUpdateField(id, event => {
        event.target.value;
    })
}


onUpdateField('images', event => {
    const value = event.target.value;
    newProperty = { ...newProperty, images: value };

});

onSubmitForm('save-button', () => {
    console.log(newProperty)
    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
          const apiNewProperty = mapPropertyVmToApi(newProperty);
          updateProperty(apiNewProperty).then(response => {
            alert("Nueva propiedad creada con éxito");
          })
        }
      });    
});
