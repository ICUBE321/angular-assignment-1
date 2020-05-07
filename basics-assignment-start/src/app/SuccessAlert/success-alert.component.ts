import { Component } from '@angular/core';

@Component({
    selector: 'app-success',
    template: `
    <div class="alert alert-success" role="alert">
        Success!!!
    </div>`,
    styles: [`
    div {
        color: darkblue;
    }`]
})
export class SuccessAlertComponent {

}