import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaEntity } from './Persona.emtity';

@Module({
  imports: [
TypeOrmModule.forFeature([PersonaEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-3-229-165-146.compute-1.amazonaws.com',
      port: 5432,
      username: 'gsnbmvjmlhsvnl',
      password: 'a77def16c8131e37210c36d34ce9b4bd208ed57b9efaff29ac9bbe42124996dc',
      database: 'd989afduerunuk',
      entities: [PersonaEntity],
      synchronize: false,
      logging:true,
      ssl: {
        rejectUnauthorized: false,
    }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
