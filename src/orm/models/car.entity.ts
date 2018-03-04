import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Car extends Model<Car> {

    @Column name: string;

    @Column age: number;

}