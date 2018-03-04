import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Cat extends Model<Cat> {

    @Column name: string;

    @Column age: number;

}