import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Cat {

    @Column name: string;

    @Column age: number;

}