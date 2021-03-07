import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SoftwareHistory {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'int', comment: 'software id' })
  public softwareId: number;

  @Column({ comment: '소프트웨어 타입' })
  public type: string;

  @Column({ type: 'int', comment: '할당 받는 user id' })
  public toUserId: number;

  @Column({ type: 'int', comment: '사용 하던 user id' })
  public fromUserId: number;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: Date;
}