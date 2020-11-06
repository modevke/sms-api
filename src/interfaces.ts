export interface ConfigAttributes{
    sender_id: string,
    token: string,
    format: string,
    url: string,
}

export interface TextAttributes{
    environment: string;
    recipient: string;
    message: string;
}