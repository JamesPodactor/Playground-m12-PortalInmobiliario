export const mapPropertyDetailApiToVm = (property, equipments) => ({
  mainImage: Array.isArray(property.images) ? property.images[0] : '',
  id: property.id,
  title: property.title,
  notes: `${property.notes}`,
  price: `${property.price.toLocaleString()} €`,
  city: property.city,
  squareMeter: `${property.squareMeter} m2`,
  rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
  bathrooms: `${property.bathrooms} ${getBathRoomWord(property.bathrooms)}`,
  locationUrl: property.locationUrl,
  mainFeatures: property.mainFeatures,
  equipments: getEquipmentName(property.equipmentIds, equipments),
  images: property.images,
});

const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');

const getBathRoomWord = (bathRooms) => (bathRooms > 1 ? 'baños' : 'baño');

const getEquipmentName = (equipmentsIds, equipments) => {
  return equipmentsIds.map(equipmentId => {
    const filteredEquipment = equipments.find(equipment => {
      return equipment.id === equipmentId
    })
    return filteredEquipment.name;
  });
};

export const mapContactVmToApi = contact => {
  return {
    email: contact.email,
    message: contact.message,
  }
};