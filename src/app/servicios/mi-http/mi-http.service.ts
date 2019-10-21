import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MiHttpService {
  constructor(public http: HttpClient) {}

  public httpGetP(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http.get(url).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  /*public httpGetO(url: string): Observable<HttpResponse<any>> {
    return this.http
      .get(url)
      .map((res: Response) => res.json())
      .catch((err: any) =>
        observableThrowError(err.json().error || 'Server error')
      );
  }*/

  private extractData(res: HttpResponse<any>) {
    // return res.json() || {};
  }

  private handleError(error: HttpResponse<any> | any) {
    return error;
  }
}
