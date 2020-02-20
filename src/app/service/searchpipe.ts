import {Pipe,PipeTransform} from '@angular/core';
import { Review } from '../model/review.model';


@Pipe(
    {name:"searchPipe1"}
)
export class SearchPipe1 implements PipeTransform
{
    transform(review:Review[],search1:any)
    {
        if(search1==undefined)
            return review;

        return review.filter(function(review:Review)
        {
            console.log("........"+review);
            return review.employee.empId.toLocaleString().includes(search1.toLocaleString());
        })
    }
}

@Pipe(
    {name:"searchPipe2"}
)
export class SearchPipe2 implements PipeTransform
{
    transform(review:Review[],search2:any)
    {
        if(search2==undefined)
            return review;

        return review.filter(function(review:Review)
        {
            console.log("........"+review);
            return review.cafe.cafeId.toLocaleString().includes(search2.toLocaleString());
        })
    }
}

@Pipe(
    {name:"searchPipe3"}
)
export class SearchPipe3 implements PipeTransform
{
    transform(review:Review[],search3:any)
    {
        if(search3==undefined)
            return review;

        return review.filter(function(review:Review)
        {
            console.log("........"+review);
            return review.cafe.name.toLocaleLowerCase().includes(search3.toLocaleLowerCase());
        })
    }
}


@Pipe(
    {name:"searchPipe4"}
)
export class SearchPipe4 implements PipeTransform
{
    transform(review:Review[],search4:any)
    {
        if(search4==undefined)
            return review;

        return review.filter(function(review:Review)
        {
            console.log("........"+review);
            return review.employee.name.toLocaleLowerCase().includes(search4.toLocaleLowerCase());
        })
    }
}


// @Pipe(
//     {name:"searchPipe"}
// )
// export class SearchPipe implements PipeTransform
// {
//     transform(review:Review[],search:any)
//     {
//         if(search==undefined)
//             return review;

//         return review.filter(function(review:Review)
//         {
//             console.log("........"+review);
//             return review.employee.empId.toLocaleString().includes(search.toLocaleString())||
//             review.employee.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
//             review.cafe.cafeId.toLocaleString().includes(search.toLocaleString())||
//             review.cafe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

//         })
//     }
// }











