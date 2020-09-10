import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MercadoLibreService {
    private ApiUrl = 'https://api.mercadolibre.com';
    constructor(private readonly http: HttpService){
    }
    public async getCountries(): Promise<Observable<any>> {
        const result: any = await this.http.get(this.ApiUrl+'/classified_locations/countries').toPromise();
        console.log(result);
        return result;
    }
}
