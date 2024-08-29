import { Module } from '@nestjs/common';
import { ArtesaniasProductosService } from './artesanias-productos.service';
import { ArtesaniasProductosController } from './artesanias-productos.controller';
import { NeoPool } from '../pg.pool';

@Module({
  controllers: [ArtesaniasProductosController],
  providers: [ArtesaniasProductosService, NeoPool],
})
export class ArtesaniasProductosModule {}
