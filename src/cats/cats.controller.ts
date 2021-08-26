import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    public constructor(private catService: CatsService) {}

    @Get()
    public findAll(): Cat[] {
        return this.catService.findAll();
    }

    @Get(':id')
    public findById(@Param('id') id): Cat {
      const cat : Cat =  this.catService.findById(parseInt(id, 10));   
      if(!cat) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      return cat;
    }

}
