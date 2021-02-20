import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class Equip {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '장비 코드' })
  public code: string;

  @Column({ comment: '코드 prefix' })
  public codePrefix: string;

  @Column({ comment: '코드 postfix' })
  public codePostfix: string;

  @Column({ comment: '장비 타입' })
  public type: 'PC' | 'MONITOR' | 'ETC' | 'MOBILE' | 'TV' | 'LAPTOP' | 'CONSUMES';

  @Column({ comment: '시리얼 넘버' })
  public serial: string;

  @Column({ comment: '장비 상태' })
  public status: 'IDLE' | 'ATTACHED' | 'WASTED' | 'RENT';

  @Column({ comment: 'pc vga', nullable: true })
  public vga: string;

  @Column({ comment: 'ssd 용량', nullable: true })
  public ssd?: number;

  @Column({ comment: '단축어', nullable: true })
  public alias?: string;

  @Column({ comment: 'pc cpu', nullable: true })
  public cpu?: string;
  
  @Column({ comment: 'pc hdd 용량', nullable: true })
  public hdd?: number;

  @Column({ comment: 'pc memory 크기', nullable: true })
  public mem?: number;

  @Column({ comment: '모델명', nullable: true })
  public model?: string;

  @Column({ comment: '메모', nullable: true })
  public memo?: string;

  @Column({ type: 'timestamp', comment: '구매일자', nullable: true })
  public purchaseDate?: Date;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일자' })
  public updateDate: Date;
}