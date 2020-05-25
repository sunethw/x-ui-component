
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formElementFilterPipe',
    pure: false
})
export class FormElementFilterPipe implements PipeTransform {
    transform(items: any[], callback: (item: any) => boolean): any {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item));
    }
}