import { CreateItemDto } from './dto/createItem-dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemService;
    constructor(itemService: ItemsService);
    getAllItems(): Promise<Item[]>;
    getOneItem(id: any): Promise<Item>;
    addItem(item: CreateItemDto): Promise<Item>;
    updateItem(item: CreateItemDto, id: any): Promise<Item>;
    deleteItem(id: any): Promise<Item>;
}
