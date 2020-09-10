import { Controller, Get } from '@nestjs/common';

@Controller('mercado-libre')
export class MercadoLibreController {
    @Get()
    public async getCountries(): Promise<any>{
        return {countries: 'Jalpa'};
    }
}
