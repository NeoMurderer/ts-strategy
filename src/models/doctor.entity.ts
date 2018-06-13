import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Doctor extends Model<Doctor> {

    @Column name: string;

}