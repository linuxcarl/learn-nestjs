import { Controller, Get } from '@nestjs/common';
import { MercadoLibreService } from '../../services/mercado-libre/mercado-libre.service';

@Controller('mercado-libre')
export class MercadoLibreController {

    constructor(private readonly service: MercadoLibreService){
    }
    @Get('/countries')
    public async getCountries(): Promise<any>{
        try {
            const result: any =  await this.service.getCountries();
            return result.data;
        } catch (err) {
            throw new Error(err);
        }
    }
}
