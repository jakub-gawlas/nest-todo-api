import { Component } from '@nestjs/common';

@Component()
export class YaasConfig {
  tenant: string = process.env.YAAS_TENANT;
  client: string = process.env.YAAS_CLIENT;
  clientId: string = process.env.YAAS_CLIENT_ID;
  clientSecret: string = process.env.YAAS_CLIENT_SECRET;
  scope = 'hybris.document_manage hybris.document_view';
  uris = {
    oauth2: 'https://api.stage.yaas.io/hybris/oauth2/v1',
    document: 'https://api.stage.yaas.io/hybris/document/v1',
  };
}
