import { HttpModule, Module } from '@nestjs/common';
import { MercadoLibreController } from './controllers/mercado-libre/mercado-libre.controller';
import { MercadoLibreService } from './services/mercado-libre/mercado-libre.service';

@Module({
  imports: [HttpModule],
  controllers: [MercadoLibreController],
  providers: [MercadoLibreService]
})
export class MercadoLibreModule {}
