import { Component } from "@nestjs/common";
import { Sequelize } from 'sequelize-typescript';

import * as path from 'path'
import * as fs from 'fs'
import { databaseProviders } from './database.providers';
import { resolve, reject } from "bluebird";

@Component()
export class DatabaseService {
    constructor (databaseProviders) {
    }
    getStatus(): any {
        console.info('getStatus')
        databaseProviders.forEach(provider => {
            provider.authenticate().then(function(errors) { console.log(errors) });
        })
    }
    static async syncModels(sequelize: Sequelize): Promise<any> {
        const modelsDir = path.resolve(__dirname, '../../' ,'./models')
        return new Promise( (resolve, reject) => {
            fs.readdir(modelsDir, (error, files) => {
                if (error) {
                    console.error(error.message)
                    reject(error)
                } else {
                    const models = files.map(file => {
                        const cls = require(path.resolve(modelsDir, file)).default
                        return cls
                    })
                    if (models.length) {
                        sequelize.addModels(models)
                    }
                    resolve(models)
                }
            })
        })
    }
}