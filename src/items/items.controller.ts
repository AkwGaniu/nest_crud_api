import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/createItem-dto'
import { Response, Request } from 'express';
import { Item } from './interfaces/item.interface'
import { ItemsService } from './items.service'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}
    @Get()
    async getAllItems(): Promise<Item[]> {
        return this.itemService.findAllItems()
    }

    @Get(':id')
    async getOneItem(@Param('id') id): Promise<Item> {
        return this.itemService.findOne(id)
    }
    
    // @Get()
    // getAllItems(@Req() req: Request, @Res() res: Response): Response {
    //     console.log(req.url)
    //     return res.json({
    //         Error: 0,
    //         Message: 'Some message'
    //     })
    // }

    @Post()
    async addItem(@Body() item: CreateItemDto): Promise<Item> {
        return this.itemService.createItem(item as Item)
    }

    @Put(':id')
    async updateItem(@Body() item: CreateItemDto, @Param('id') id): Promise<Item> {
        console.log(item)
        return await this.itemService.updateItem(id, item as Item)
    }

    @Delete(':id')
    async deleteItem(@Param('id') id): Promise<Item> {
        try {
            return await this.itemService.deleteItem(id)
        } catch (error) {
            console.log(error.toString())
        }
    }
}
