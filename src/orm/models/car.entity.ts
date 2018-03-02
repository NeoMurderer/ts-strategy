import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Car {

    @Column name: string;

    @Column age: number;

}