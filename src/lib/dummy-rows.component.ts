import {
  Component,
  Input,
} from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-dummy-rows]',
  template: `
    <div class="super-table-dummy-rows">
      <tr [style.height]="rowStyleHeight()">
        <td
          [attr.colspan]="columnCount"
          [style.backgroundImage]="'url(' + BG_IMAGE_DATA + ')'"
          [style.backgroundSize]="backgroundSize()">
          </td>
      </tr>
    </div>
  `,
  styleUrls: ['../masterStyle.css']
})
export class DummyRowsComponent {

  @Input() rowHeight: number;
  @Input() rowCount: number;
  @Input() columnCount: number;

  BG_IMAGE_DATA: string = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAlCAYAAACDKIOp',
    'AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiuH',
    'v37n+G////MzAxAMHQIQACDAC7twbaN2nkgwAAAABJRU5ErkJggg=='
  ].join('');

  rowStyleHeight(): string {
    const height = this.rowHeight * this.rowCount;
    return `${height}px`;
  }

  backgroundSize(): string {
    return `auto ${this.rowHeight}px`;
  }

}
