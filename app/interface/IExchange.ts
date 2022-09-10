export interface IExchange extends Document {
    _id: string;
    ownerName: string;
    phone: string;
    toysName: string;
    image: string;
    exchangeWith: string;
    isAvalaible: boolean;
    createdAt: Date;
    updatedAt: Date;
}