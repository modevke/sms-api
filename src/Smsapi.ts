import { ConfigAttributes, TextAttributes } from './interfaces';
import reqmaker from './reqmaker';

export class Smsapi{

    private auth: string;
    private sender_id: string;
    private format: string;
    private url: string;

    constructor(configs: ConfigAttributes) {
        this.auth = configs.token;
        this.sender_id = configs.sender_id;
        this.format = configs.format;
        this.url = configs.url;
    }

    async send_sms(text: TextAttributes){

        let sms;
        try{
            sms = await reqmaker(this.url, 'POST', {
                from: this.sender_id,
                to: text.recipient,
                message: text.message,
                format: this.format,
                date: Math.round((new Date()).getTime() / 1000)
            }, {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.auth}`
            });
        }catch(e){
          return e;  
        }
        return sms;

    }

}