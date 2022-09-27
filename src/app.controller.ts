import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonaEntity } from './Persona.emtity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  findAll() {
    return this.appService.findAll();
  }

  @Post('registrar')
  registrar(@Body() body:any) {
    const newA:PersonaEntity={...body}
    return this.appService.create(newA);
  }

  @Get('/:id')
  findId(@Param('id') id:number) {
    return this.appService.findOne(id);
  }

  @Delete('/:id')
  eliminar(@Param('id') id:number) {
    return this.appService.remove(id);
  }
}
