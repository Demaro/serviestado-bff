import axios from "axios";

const urlMS = process.env.URL_MS_REGISTRO_BILLER || "http://se-ms-convenios/ms/se-ms-registrobiller/v1";

export const sendRegistroBillerMS = (dataIn) => {
    const url = `${urlMS}/registro-biller`;
    console.log('url: ', url);
    return axios.post(url, data);
}

export const loginBillerMS = (dataIn) => {
    const url = `${urlMS}/login`;
    console.log('url: ', url);
    console.log("data: ", dataIn);
    return axios.post(url, dataIn);
}

export const changePasswordBillerMS = (dataIn) => {
    const url = `${urlMS}/login/cambio-contrasenia`;
    return axios.put(url, dataIn);
}