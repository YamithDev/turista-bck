import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [
        {
            id: 1,
            name: 'tom',
            age: 1,
            breed: 'Egypcian'
        },
        {
            id: 2,
            name: 'juan',
            age: 1,
            breed: 'Colombian'
        }
    ];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findById(id: number): Cat {
        return this.cats.find(cat => cat.id===id);
    }
}
