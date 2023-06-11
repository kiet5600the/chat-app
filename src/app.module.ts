import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Chat } from 'entities/chat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '',
      database: 'chat',
      entities: [Chat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
