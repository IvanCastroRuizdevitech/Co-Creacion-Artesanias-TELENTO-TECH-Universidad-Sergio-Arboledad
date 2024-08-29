import { Injectable, Logger } from '@nestjs/common';
import { CreateArtesaniasProductoDto } from './dto/create-artesanias-producto.dto';
import { UpdateArtesaniasProductoDto } from './dto/update-artesanias-producto.dto';
import { allProductos } from '../common/query/artesanias-productos'
import { NeoPool } from '../pg.pool';

@Injectable()
export class ArtesaniasProductosService {

  private readonly logger = new Logger('ArtesaniasProductosService');

  constructor(
    private readonly neoPool: NeoPool,
  ) {

  }


  create(createArtesaniasProductoDto: CreateArtesaniasProductoDto) {
    return 'This action adds a new artesaniasProducto';
  }

  async findAll() {

    try {
      this.logger.debug(`Consultando Base de DATOS`);
      const { rows } = await this.neoPool.query(allProductos);
      this.logger.debug(`Respuesta: ${JSON.stringify(rows)}`);
      
      return {
        status: 'success',
        message: 'Productos recuperados exitosamente',
        data: rows,
      };
    } catch (error) {
      this.logger.error('Error consultando productos', error.stack);
      return {
        status: 'error',
        message: 'Error consultando productos',
        error: error.message,
        data: []
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} artesaniasProducto`;
  }

  update(id: number, updateArtesaniasProductoDto: UpdateArtesaniasProductoDto) {
    return `This action updates a #${id} artesaniasProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} artesaniasProducto`;
  }
}
