import mysql = require('mysql');
import User from '../server/models/user';
export default class MySQL {

    private static _instance: MySQL;
    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'db_prueb',
            password: '123',
            database: 'test'
        });

        this.conectarDB();
    }

    public static get instance() {


        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: Function) {
        this.instance.cnn.query(query, (err, results: any[], fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                console.log('El registro solicitado no existe');
            } else {
                callback(null, results);
            }

        });
    }

    static ejecutarMutacion(query: string, callback: Function) {

        this.instance.cnn.query(query , (err, results, fields) => {
            console.log("aqui entra", query);
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            callback(null, results);

        });
    }
    
    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos Online');

        });
    }
}