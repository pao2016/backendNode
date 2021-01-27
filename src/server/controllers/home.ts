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
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    const query = `INSERT INTO usuarios (username, name , email, password) VALUES ( '${username}', '${name}', '${email}', '${password}') `;

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


}


export let createEstante = (req: Request, res: Response) => {
    var codigo = req.body.codigo;
    var descripcion = req.body.descripcion;
    var fila = req.body.fila;
    var columna = req.body.columna;

    const query = `INSERT INTO estantes(codigo, descripcion, fila, columna) VALUES ('${codigo}', '${descripcion}', '${fila}', '${columna}') `;

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

}




    export let listEstantes = (req: Request, res: Response) => {

        const query = ` 
        SELECT *
        FROM  estantes`;
        MySQL.ejecutarQuery(query, (err: any, estanerias: Object[]) => {
    
            if (err) {
                res.status(400).json({
                    ok: false,
                    error: err
    
                });
            } else {
                res.json({
                    ok: true,
                    estanerias
                });
            }
    
        });
    

    
    }; 



    export let estanteById = (req: Request, res: Response) => {

        const id = req.params.id;
        const escapeID = MySQL.instance.cnn.escape(id);
        const query = ` SELECT *
        FROM  estantes wHERE 
        id = ${escapeID}`;
    
        MySQL.ejecutarQuery(query, (err: any, estante: Object[]) => {
    
            if (err) {
                res.status(400).json({
                    ok: false,
                    error: err
    
                });
            } else {
                res.json({
                    ok: true,
                    estante: estante[0]
                });
            }
    
        });
    };
    

