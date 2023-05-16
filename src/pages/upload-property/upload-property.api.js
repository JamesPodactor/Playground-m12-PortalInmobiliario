import Axios from "axios";

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(({ data }) => data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(provinceListUrl).then(({ data }) => data);

const equipmentUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equipmentUrl).then(({ data }) => data);

const propertyUrl = `${process.env.BASE_API_URL}/properties`;

export const updateProperty = prop => Axios.post(`${propertyUrl}`, prop).then(({ data }) => data);