import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEntity } from './Persona.emtity';

@Injectable()
export class AppService {


  constructor( @InjectRepository(PersonaEntity)
  private usersRepository: Repository<PersonaEntity>,){}

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<PersonaEntity[]> {
    return this.usersRepository.find();
  }

  create(newP:PersonaEntity): Promise<PersonaEntity> {
    return this.usersRepository.save(newP);
  }

  findOne(id: number): Promise<PersonaEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
