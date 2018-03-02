import { Component } from "@nestjs/common";
import { Sequelize } from 'sequelize-typescript';

import * as path from 'path'
import * as fs from 'fs'

@Component()
export class DatabaseService {
    static syncModels(sequelize: Sequelize): void {
        const modelsDir = path.resolve(__dirname, './models')
        fs.readdir(modelsDir, (error, files) => {
            if (error) {
                console.error(error.message)
            } else {
                const models = files.map(file => require(path.resolve(modelsDir, file)) )
                if (models.length) {
                    sequelize.addModels(models)
                }
            }
        })
    }
}