import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class MiHttpService {
  constructor(public http: HttpClient) {}

  public httpGetPromise(url: string, objeto: any) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extraerDatos)
      .catch(this.handleError);
  }

  private extraerDatos(resp: HttpResponse<any>) {
    // return resp.json() || {};
  }
  private handleError(error: HttpResponse<any>) {
    return error;
  }
}
