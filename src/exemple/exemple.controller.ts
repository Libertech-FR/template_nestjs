import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExempleService } from './exemple.service';
import { CreateExempleDto } from './dto/create-exemple.dto';
import { UpdateExempleDto } from './dto/update-exemple.dto';

@Controller('exemple')
export class ExempleController {
  constructor(private readonly exempleService: ExempleService) {}

  @Post()
  create(@Body() createExempleDto: CreateExempleDto) {
    return this.exempleService.create(createExempleDto);
  }

  @Get()
  findAll() {
    return this.exempleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exempleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExempleDto: UpdateExempleDto) {
    return this.exempleService.update(+id, updateExempleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exempleService.remove(+id);
  }
}
