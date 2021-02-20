import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '유저명' })
  public name: string;

  @Column({ comment: '이메일' })
  public email: string;

  @Column({ type: 'boolean', comment: '삭제여부' })
  public deleted: boolean;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: number;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  public updateDate: number;

}