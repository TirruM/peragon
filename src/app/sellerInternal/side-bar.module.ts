import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent],
})

export class SideBarModule { }