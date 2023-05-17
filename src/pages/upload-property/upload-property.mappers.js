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
        mainFeatures: prop.mainFeatures,
        equipmentIds: prop.equipments,
        images: prop.images,
    }
};