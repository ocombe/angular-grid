/// <reference path="../constants.ts" />

module awk.grid {

    var constants = Constants;

    export class Column {

        static colIdSequence = 0;

        colDef: ColDef;
        actualWidth: any;
        visible: any;
        colId: any;
        pinned: boolean;
        index: number;
        aggFunc: string;
        pivotIndex: number;
        sort: string;
        sortedAt: number;

        eHeaderCell: HTMLElement;
        eSortAsc: HTMLElement;
        eSortDesc: HTMLElement;
        eSortNone: HTMLElement;
        eFilterIcon: HTMLElement;

        constructor(colDef: ColDef, actualWidth: any) {
            this.colDef = colDef;
            this.actualWidth = actualWidth;
            this.visible = !colDef.hide;
            // in the future, the colKey might be something other than the index
            if (colDef.colId) {
                this.colId = colDef.colId;
            } else if (colDef.field) {
                this.colId = colDef.field;
            } else {
                this.colId = '' + Column.colIdSequence++;
            }
        }

        public isGreaterThanMax(width: number): boolean {
            if (this.colDef.maxWidth >= constants.MIN_COL_WIDTH) {
                return width > this.colDef.maxWidth;
            } else {
                return false;
            }
        }

        public getMinimumWidth(): number {
            if (this.colDef.minWidth > constants.MIN_COL_WIDTH) {
                return this.colDef.minWidth;
            } else {
                return constants.MIN_COL_WIDTH;
            }
        }

        public setMinimum(): void {
            this.actualWidth = this.getMinimumWidth();
        }
    }

}