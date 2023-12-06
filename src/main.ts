import { NestFactory } from '@nestjs/core';
import{MySocketModule}from './socket/socket.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { IoAdapter } from '@nestjs/platform-socket.io';

const port = process.env.REACT_APP_API_KEY
async function bootstrap2() {
    const app = await NestFactory.create(MySocketModule);
    const corsOptions: CorsOptions = {
      origin: "*", // Habilita todos os origens
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    };
    const ioAdapter = new IoAdapter(app);
    app.useWebSocketAdapter(ioAdapter);
    app.enableCors(corsOptions);
  
    await app.listen(3333);
  
  }
  
  bootstrap2();