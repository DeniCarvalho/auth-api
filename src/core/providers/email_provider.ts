export interface IObject {
  source: string;
  destination: string[];
  subject: string;
  body: string;
}

export interface IEmailProvider {
  send(object: IObject): Promise<void>;
}
