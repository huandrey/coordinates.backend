import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schools")
export class School {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    type: 'varchar',
    length: 100
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  city: string;

  @Column({
    type: 'char',
    length: 2
  })
  uf: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  latitude: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  longitude: string;
}