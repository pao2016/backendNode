import { Request, Response } from "express";
import User from '../models/user';
import MySQL from '../../mysql/mysql';

export let users = (req: Request, res: Response) => {

    const query = ` 
    SELECT *
    FROM  usuarios`;
    MySQL.ejecutarQuery(query, (err: any, user: Object[]) => {

        if (err) {
            res.status(400).json({
                ok: false,
                error: err

            });
        } else {
            res.json({
                ok: true,
                user
            });
        }

    });


};

export let user = (req: Request, res: Response) => {

    const id = req.params.id;
    const escapeID = MySQL.instance.cnn.escape(id);
    const query = ` SELECT *
    FROM  usuarios wHERE 
    id = ${escapeID}`;

    MySQL.ejecutarQuery(query, (err: any, user: Object[]) => {

        if (err) {
            res.status(400).json({
                ok: false,
                error: err

            });
        } else {
            res.json({
                ok: true,
                user: user[0]
            });
        }

    });
};


export let create = (req: Request, res: Response) => {
var username = req.body.username;
var  name = req.body.name;
var email = req.body.email;
 
 const query = `INSERT INTO usuarios (username, name , email) VALUES ( '${username}', '${name}', '${email}') `;

 MySQL.ejecutarMutacion(query, (err: any, result: any) => {

    if (err) {
        res.status(400).json({
            ok: false,
            error: err,
        
            

        });
    } else {
        res.json({
            ok: true,
            result
        });
    }

});






};