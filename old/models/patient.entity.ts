import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Patient extends Model<Patient> {

    @Column name: string;

}