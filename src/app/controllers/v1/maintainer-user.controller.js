import { registerNewUser, personalInformation } from "../../services/v1/maintainer-user.service";
import { mensajeSalida, CODE_MESSAGE_OK, CODE_RESP_OK, CODE_RESP_BAD_REQUEST, CODE_MESSAGE_ERROR, GET_DATA_USER } from "../../services/v1/mensaje-salida.service";
import Joi from '@hapi/joi';

const formSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    perfil: Joi.string().required(),
    contacto: Joi.string().required(),
    asignar: Joi.boolean().required()
})

export const RegisterNewUser = (req, res) => {
    new Promise((resolve, reject) => {
            let body = req.body;
            const { error, value } = formSchema.validate(body);
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }
        })
        .then(data => registerNewUser(data))
        .then(data => res.status(200).json({ ok: true, data }))
        .catch(err => res.status(400).json({ ok: false, error: err }));
}

export const PersonalInformation = (req, res) => {
    const body = req.body;
    personalInformation(body)
        .then(response =>
            res.status(CODE_RESP_OK)
            .json(mensajeSalida(CODE_MESSAGE_OK,
                GET_DATA_USER.SUCCESS, {...response.data })))
        .catch(err =>
            res.status(CODE_RESP_BAD_REQUEST)
            .json(mensajeSalida(CODE_MESSAGE_ERROR,
                GET_DATA_USER.ERROR, {...err.response.data })))
}