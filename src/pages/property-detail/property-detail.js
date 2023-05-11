import { getProperty, getEquipments } from "./property-detail.api";
import { mapPropertyDetailApiToVm } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';


let property = {
    images: '',
    title: '',
    city: '',
    rooms: '',
    squareMeter: '',
    bathrooms: '',
    notes: '',
    mainFeatures: '',
    equipmentIds: '',
    locationUrl: '',
};

const params = history.getParams();

Promise.all([getProperty(params.id), getEquipments()]).then(
    ([apiProperty, equipments]) => {
        console.log(apiProperty);
        const vMProperty = mapPropertyDetailApiToVm(apiProperty, equipments);
        setPropertyValues(vMProperty);
    }
)

// getProperty(params.id).then(apiProperty => {
//     property = mapPropertyDetailApiToVm(apiProperty[0]);
//     setPropertyValues(property);
// });

// let equipments = [];
// getEquipments().then(data => {
//     equipments = data.map(eq => eq.name);
// });

/*
Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
  ([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
  }
);
*/