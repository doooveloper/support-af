import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Software {
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '소프트웨어 타입' })
  public type: string;

  @Column({ comment: '이름' })
  public name: string;

  @Column({ comment: '시리얼키' })
  public serial: string;

  @Column({ comment: '상태', default: 'IDLE' })
  public status: string;
}