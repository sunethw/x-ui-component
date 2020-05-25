import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',

})

export class SearchComponent implements OnInit, OnChanges {


    @Input()
    public terms: any[];

    @Input()
    public parameters: any[];

    @Output()
    onFilter: EventEmitter<any>;

    term: string;
    matches: any[];

    selectedParameters: string[];


    constructor() {
        this.matches = this.terms;
        this.selectedParameters = [];
        this.onFilter = new EventEmitter<any>();
    }

    ngOnInit() {
        // this.parameters.forEach((element) => {
        //     console.log(element);
        //     element['status'] = true;
        //     this.selectedParameters.push(element['name']);
        // });
        this.selectedParameters = this.parameters;
        console.log(this.selectedParameters);
    }

    ngOnChanges(changes) {
        this.matches = this.terms;
    }

    search(term: string) {
        console.log(this.selectedParameters);
        if (term == '') {
            this.matches = this.terms;
            this.onFilter.emit(this.matches);
        } else {
            let arr: any[] = [];
            if (this.selectedParameters) {
                // iterate through the search parameters
                for (let i in this.selectedParameters) {
                    // search parameter toLowerCase
                    console.log(this.selectedParameters);
                    let text = this.selectedParameters[i]['name'].toLowerCase();
                    // filter from object
                    this.terms.filter((element) => {
                        // filter from object key
                        Object.getOwnPropertyNames(element).filter((match) => {
                            if ((match == text) && (element[match].toLowerCase().indexOf(term.toLowerCase()) > -1)) {
                                // push to array if search condition passes
                                arr.push(element);
                            }
                        });
                    });
                }
            }

            // remove duplicate records
            this.matches = arr.filter((elem, index, self) => {
                return index === self.indexOf(elem);
            });

            if (this.matches.length > 0) {
                this.onFilter.emit(this.matches);
            }
            if (this.matches.length === 0) {
                this.onFilter.emit('NDF');
            }
        }
    }

}
