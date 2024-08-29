import { PartialType } from '@nestjs/mapped-types';
import { CreateArtesaniasProductoDto } from './create-artesanias-producto.dto';

export class UpdateArtesaniasProductoDto extends PartialType(CreateArtesaniasProductoDto) {}
