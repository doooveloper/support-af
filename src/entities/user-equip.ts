import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserEquip {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'id' })
  public id: number;

  @Column({ type: 'int', comment: 'user id' })
  public userNo: number;

  @Column({ type: 'int', comment: '장비 id' })
  public equipNo: number;

  @Column({ comment: '상태' })
  public status: string;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: number;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  public updateDate: number;
}