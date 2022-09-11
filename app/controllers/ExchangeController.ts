import { Request, Response } from 'express';
import { config } from '../config/config';
import statusCode from '../constants/statusCode';
import { IExchange } from '../interface/IExchange';
import { Exchange } from '../schema/Exchange';
import { upload } from '../utils/upload';


class ExchangeController {
    static createExchange = async (req: Request, res: Response) => {
        upload(req, res, async err => {
            if (err) {
                return res.status(statusCode.serverError.code)
                            .json({
                                message: err.message ?? err.error,
                                error: statusCode.serverError.message
                            })
            }
    
            try {

                if (req.file) {

                    const imageUrl = `${config.hostUrl}:${config.port}/uploads/${req.file.filename}`;
                    const newData = new Exchange({...req.body, image: imageUrl});
                    const result = await newData.save();

                    return res.status(statusCode.success.code).send(result);
                } else {
                    return res.status(statusCode.badRequest.code)
                                .json({message: 'No image selected', error: statusCode.badRequest.message})
                }
                
            } catch (err: any) {
                let errorMessage = [];

                if (err.message.includes('is not a valid phone number!')) {
                    errorMessage.push('Entered phone number is not valid, please verify');
                }

                if (err.name == "ValidationError") {
                    const key = Object.keys(err.errors);
                    errorMessage.push(`${key} is required`);

                    return res.status(statusCode.badRequest.code)
                                .json({ message: errorMessage, error: statusCode.badRequest.message});
                }
                
                return res.status(statusCode.serverError.code)
                            .json({message: err, error: statusCode.serverError.message})
            }
            
        })
    }

    static getAllAvalaibleExchange = async (req: Request, res: Response) => {
        try {
            const {page} = req.query;
            const options = {
                page: page || 1,
                limit: 10,
            };
            
            const datas: IExchange[] | [] = await (Exchange as any).paginate({isAvalaible: true}, options, ['-__v']);
            return res.status(statusCode.success.code).send({...datas, status: statusCode.success.code});
        } catch (err: any) {
            return res.status(statusCode.serverError.code)
                        .json({message: err, error: statusCode.serverError.message});
        }
    }

    static desactivateExchange = async (req: Request, res: Response) => {
        const idParams: string = req.params.id
        
        try {

            await Exchange.updateOne(
                {_id: idParams},
                {
                    $set: {
                        isAvalaible: false,
                        updatedAt: Date.now()
                    }
                }
            );

            return res.status(statusCode.success.code)
                        .json({ message: 'Exchange desactivate with success'});
        } catch (err: any) {
            return res.status(statusCode.serverError.code)
                        .json({ message: err, error: statusCode.serverError.message });
        }
    }
}

export default ExchangeController;