import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';


async function bootstrap() {

  try {
   
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api/');
    app.use(express.json({ limit: '100mb' }));
    app.use(express.urlencoded({ extended: true, limit: '100mb' }));
    // Habilitar CORS de manera específica
    app.enableCors({
      origin: ['http://web-artesanias.s3-website-us-east-1.amazonaws.com'], // Permitir el origen específico
      //origin: ['http://localhost:5173'], // Permitir el origen específico
      methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
      credentials: true, // Habilitar si necesitas enviar cookies o autenticación
    });    
    console.log(`Puerto: ${process.env.PORT }`);
    await app.listen(process.env.PORT);

  } catch (error) {
    console.log('EL ERROR MAS GRANDE');
    console.log(error);
  }

}
bootstrap();
