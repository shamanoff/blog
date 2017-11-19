import { BaseEntity } from './../../shared';

export class Post implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public author?: string,
        public body?: any,
    ) {
    }
}
