import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    findAllItems(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    createItem(item: Item): Promise<Item>;
    updateItem(id: string, item: Item): Promise<Item>;
    deleteItem(id: string): Promise<Item>;
}
