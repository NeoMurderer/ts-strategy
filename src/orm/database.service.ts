import { Component } from "@nestjs/common";
import { Sequelize } from 'sequelize-typescript';

import * as path from 'path'
import * as fs from 'fs'
import { databaseProviders } from './database.providers';

@Component()
export class DatabaseService {
    constructor (databaseProviders) {

    }
    getStatus(): any {
        databaseProviders.forEach(provider => {
            provider.authenticate().then(function(errors) { console.log(errors) });
        })
    }
    static syncModels(sequelize: Sequelize): void {
        const modelsDir = path.resolve(__dirname, './models')
        fs.readdir(modelsDir, (error, files) => {
            if (error) {
                console.error(error.message)
            } else {
                const models = files.map(file => {
                    const cls = require(path.resolve(modelsDir, file)).default
                    return cls
                })
                if (models.length) {
                    sequelize.addModels(models)
                }
            }
        })
    }
}