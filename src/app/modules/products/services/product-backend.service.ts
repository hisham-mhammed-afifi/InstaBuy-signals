import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EnvironmentConfigs } from '../../../../environments/environment';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductBackendService {
  private BaseURL = EnvironmentConfigs.BaseURL + 'products';

  constructor(private http: HttpClient) {}

  getAllProducts(options: any = {}): Observable<Product[]> {
    // return this.http.get<Product[]>(this.BaseURL, {
    //   params: {
    //     limit: options.limit + '',
    //     sort: options.sort + '',
    //   },
    // });

    return this.http
      .get<{ products: Product[] }>('assets/json/products.json')
      .pipe(map((res) => res.products));
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.BaseURL + '/' + id);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.BaseURL + '/categories');
  }

  getCategoryProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.BaseURL + '/category/' + name);
  }
}
