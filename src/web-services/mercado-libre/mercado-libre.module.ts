import { Module } from '@nestjs/common';
import { MercadoLibreController } from './controllers/mercado-libre/mercado-libre.controller';

@Module({
  controllers: [MercadoLibreController]
})
export class MercadoLibreModule {}
