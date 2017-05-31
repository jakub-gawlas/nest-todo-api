import { Component } from '@nestjs/common';
import { YaasConfig } from './yaas.config';
import * as swaddle from 'swaddle';

@Component()
export class AuthService {
  private token: string = null;
  private expireAt: number = null;
  private api = null;

  constructor(
    private config: YaasConfig,
  ){
    this.api = swaddle(this.config.uris.oauth2);
    this.refreshToken();
  }

  private async refreshToken(){
    const response = await this.api.token.post({
      body: {
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        grant_type: 'client_credentials',
        scope: this.config.scope,
      },
      form: true,
      json: false,
    });
    const token = JSON.parse(response);
    this.token = `${token.token_type} ${token.access_token}`;
    this.expireAt = new Date(Date.now() + token.expires_in * 1000).getTime();
  }

  async getToken(){
    if(!this.token || Date.now() > this.expireAt){
      await this.refreshToken();
    }
    return this.token;
  }

}
