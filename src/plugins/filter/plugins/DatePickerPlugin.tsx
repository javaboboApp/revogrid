import { Component, h, Host, Prop } from '@stencil/core';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

@Component({ tag: 'date-picker', styleUrl: 'material.css' })
export class DatePickerPlugin {

    @Prop() placeHolder: string = ''

    @Prop() input_class: string

    @Prop() input_id: string

    @Prop() type: string

    // @Prop() onCalendarClicked: () => void;

    private datepicker: DatePicker

    constructor() {
        enableRipple(true);
        this.datepicker = new DatePicker({
            placeholder: this.placeHolder,
        });
    }


    componentDidRender(): void {
        this.datepicker.appendTo('#' + this.input_id)
    }

    render() {
        return (<input class={this.input_class} id={this.input_id} type={this.type} onClick={(e) => { this.datepicker.show(); }} />);

    }

}