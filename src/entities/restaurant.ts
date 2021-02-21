import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Restaurant {
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '이름' })
  public name: string;

  @Column({ comment: '메모' })
  public memo: string;

  @Column({ comment: '전화번호' })
  public phome: string;

  @Column({ comment: '썸네일 이미지', nullable: true })
  public thumbnail?: string;

  @Column({ comment: 'url', nullable: true })
  public webUrl?: string;

  @Column({ comment: '태그', nullable: true })
  public tags: string;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  public updateDate: Date;
}