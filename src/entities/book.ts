import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '제목', nullable: true })
  public title?: string;

  @Column({ comment: '카테고리', nullable: true })
  public category?: string;

  @Column({ comment: '타입', nullable: true })
  public type?: string;

  @Column({ comment: '메모', nullable: true })
  public comment?: string;

  @Column({ comment: '상태', nullable: true })
  public status?: string;

  @Column({ comment: '저자', nullable: true })
  public author?: string;

  @Column({ comment: '출판사', nullable: true })
  public publisher?: string;

  @Column({ comment: '출판일', nullable: true })
  public pubdate?: string;

  @Column({ comment: '이미지 url', nullable: true })
  public image?: string;

  @Column({ comment: '설명', nullable: true })
  public description?: string;

  @Column({ comment: '최근 빌린 사람', nullable: true })
  public currentRenter?: string;

  @Column({ type: 'int', comment: '대여 내역 id', nullable: true })
  public currentHistoryId?: number;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일자' })
  public updateDate: Date;
}