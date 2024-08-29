import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtesaniasProductosService } from './artesanias-productos.service';
import { CreateArtesaniasProductoDto } from './dto/create-artesanias-producto.dto';
import { UpdateArtesaniasProductoDto } from './dto/update-artesanias-producto.dto';

@Controller('artesanias-productos')
export class ArtesaniasProductosController {
  constructor(private readonly artesaniasProductosService: ArtesaniasProductosService) {}

  @Post()
  create(@Body() createArtesaniasProductoDto: CreateArtesaniasProductoDto) {
    return this.artesaniasProductosService.create(createArtesaniasProductoDto);
  }

  @Get()
  findAll() {
    return this.artesaniasProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artesaniasProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtesaniasProductoDto: UpdateArtesaniasProductoDto) {
    return this.artesaniasProductosService.update(+id, updateArtesaniasProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artesaniasProductosService.remove(+id);
  }
}
