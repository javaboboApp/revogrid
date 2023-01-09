import { Component, h, Prop } from '@stencil/core';
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({ tag: 'date-picker', styleUrl: 'material.css' })
export class DatePickerPlugin {

    @Prop() placeHolder: string = ''

    @Prop() input_class: string

    @Prop() input_id: string

    @Prop() type: string

    // @Prop() onCalendarClicked: () => void;

    private datepicker: DatePicker

    constructor() {
        this.datepicker = new DatePicker({
            placeholder: this.placeHolder,
            cssClass: this.input_class
        });
    }


    componentDidRender(): void {
        this.datepicker.appendTo('#' + this.input_id)

    }

    render() {
         return (<input class={this.input_class}   id={this.input_id} type={this.type} onClick={() => { this.datepicker.show();  }} />);
    }

}