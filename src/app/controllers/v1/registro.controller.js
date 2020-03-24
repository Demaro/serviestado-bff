import { sendRegistroBillerMS } from '../../services/v1/registro-biller-ms.services';
import Joi from '@hapi/joi';
import { mensajeSalida, CODE_RESP_OK, CODE_MESSAGE_ERROR, REGISTRO_BILLER_RESP, CODE_MESSAGE_OK } from '../../services/v1/mensaje-salida.service';

const formSchema = Joi.object({
    business_name: Joi.string().required(),
    rut: Joi.string().required(),
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    position: Joi.string().required()
})

export const registroBiller = (req,res) => {
    const dataIn = req.body;

    sendRegistroBillerMS(dataIn)
    .then( data => res.status(200).json( mensajeSalida(CODE_MESSAGE_OK,
                                                        REGISTRO_BILLER_RESP.SUCCESS,
                                                        {...data.data} )))
    .catch( err => res.status(400).json( mensajeSalida(CODE_MESSAGE_ERROR,
                                                        REGISTRO_BILLER_RESP.ERROR,
                                                        { ...err.response.data })) );
}

export const getBiller = (req,res) => {
    let id = req.params.id;
    console.log("ID: ", id);
    res.status(200).json({ ok: true, biller: id});
}



