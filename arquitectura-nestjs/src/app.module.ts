import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtesaniasProductosModule } from './artesanias-productos/artesanias-productos.module';
import { EnvConfiguration } from './config/app.config';
import { NeoPool } from './pg.pool';

@Module({
  imports: [
      ArtesaniasProductosModule,
      ConfigModule.forRoot(
        {
          load: [EnvConfiguration]
        }
      )
    ],
  controllers: [AppController],
  providers: [AppService, NeoPool],
})
export class AppModule {
  private readonly logger = new Logger('AppModule')

  constructor(
    
  ) {
    this.logger.debug(`Inicializando Backend Artesanias`);
  }
}
