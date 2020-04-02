import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    public transform(value: any, filterString: string, propName: string): any {
        if (!filterString || filterString === '' || value.length === 0) {
            return value;
        }

        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }

        return resultArray;
    }
}
