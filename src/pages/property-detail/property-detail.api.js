import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = id => Axios.get(`${url}/${id}`).then(({ data }) => data);

const equipmentUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equipmentUrl).then(({ data }) => data);

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const updateContact = contact => Axios.post(`${contactUrl}`, contact).then(({ data }) => data);