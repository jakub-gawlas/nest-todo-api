import { Component } from '@nestjs/common';
import { YaasConfig } from './yaas.config';
import { AuthService } from './auth.service';
import * as swaddle from 'swaddle';

@Component()
export class DocumentService {
  private api = null;

  constructor(
    private config: YaasConfig,
    private authSerivce: AuthService,
  ){
    this.api = swaddle(`${this.config.uris.document}/${this.config.tenant}/${this.config.client}`);
  }

  async getAll(type: string){
    const token = await this.authSerivce.getToken();
    const res = await this.api.data(type).get({
      headers: {
        'Authorization': token,
      },
    });
    return res;
  }

  async getById(type: string, id: string){
    const token = await this.authSerivce.getToken();
    const res = await this.api.data(type)(id).get({
      headers: {
        'Authorization': token,
      },
    });
    return res;
  }

  async create(type: string, data: object){
    const token = await this.authSerivce.getToken();
    const res = await this.api.data(type).post({
      body: data,
      headers: {
        'Authorization': token,
      },
    });
    return res;
  }

}
