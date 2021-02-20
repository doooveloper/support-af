import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ comment: '로그인 id' })
  public loginId: string;

  @Column({ comment: '비밀번호' })
  public password: string;

  @Column({ comment: '닉네임' })
  public nickname: string;

  @CreateDateColumn({ type: 'timestamp', comment: '등록일' })
  public regDate: Date;
}