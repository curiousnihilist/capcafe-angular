import { FoodItem } from './fooditem.model';
import { Review } from './review.model';

export class Cafe{

    public cafeId:number;
    public name:string;
    public location:string;
    public owner:string;
    public account:number;
    public avgRating:number;
    public avgPrice:number;
    public reviews:Review[];
    public menu:FoodItem[];
}