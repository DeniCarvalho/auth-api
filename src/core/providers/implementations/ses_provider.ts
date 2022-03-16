import { IEmailProvider, IObject } from "../email_provider";
import SES from "aws-sdk/clients/ses";

import { RequestError } from "af-utils-node";

export class SESProvider implements IEmailProvider {
  private _ses: SES;
  constructor() {
    this._ses = new SES({
      region: "sa-east-1",
      accessKeyId: process.env.AWS_SES_USER_ID,
      secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    });
  }
  async send(object: IObject): Promise<void> {
    try {
      const params = {
        Source: object.source,
        Destination: object.destination,
        Subject: object.subject,
        Body: object.body,
      };
      await this._ses
        .sendEmail({
          Source: params.Source,
          Destination: {
            ToAddresses: params.Destination,
          },
          Message: {
            Subject: {
              Data: params.Subject,
            },
            Body: {
              Text: {
                Data: params.Body,
                Charset: "UTF-8",
              },
              Html: {
                Data: params.Body,
                Charset: "UTF-8",
              },
            },
          },
          ConfigurationSetName: "jetConfig",
        })
        .promise();
    } catch (error) {
      throw new RequestError(error);
    }
  }
}
