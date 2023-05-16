export const mapPropertyVmToApi = prop => {
    return {
        title: prop.title,
        notes: prop.notes,
        email: prop.email,
        phone: prop.phone,
        price: prop.price,
        saleTypes: prop.saleTypes,
        address: prop.address,
        city: prop.city,
        province: prop.province,
        squareMeter: prop.squareMeter,
        rooms: prop.rooms,
        bathrooms: prop.bathrooms,
        locationUrl: prop.locationUrl,
        newFeature: prop.newFeature,
        mainFeatures: prop.mainFeatures,
        equipmentIds: getEquipmentID(prop.equipments, equipments),
        images: prop.images,
    }
};

const getEquipmentID = (equipmentId, equipmentName) => {
    return equipmentId.map(apiEquipment => {
      const filteredEquipment = equipmentName.find(equipment => {
        return equipment.name === apiEquipment
      })
      return filteredEquipment.id;
    });
  };