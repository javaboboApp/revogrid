import { Component, h, Prop } from '@stencil/core';

import {easepick} from '@easepick/bundle'

@Component({ tag: 'date-picker', styleUrl: 'datapicker.style.css' })
export class DatePickerPlugin {

    @Prop() placeHolder: string = ''

    @Prop() input_class: string

    @Prop() input_id: string

    @Prop() type: string

    // @Prop() onCalendarClicked: () => void;


    componentDidRender(): void {
        new easepick.create({
            element: document.getElementById(this.input_id),
            zIndex :10,
            css: [
              'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css'
            ],
            
          });    
    }



    render() {
         return (<input class={this.input_class}   id={this.input_id} type={this.type}  placeholder={this.placeHolder}  />);
    }

}