import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { W4Component } from "./w4/w4.component";
import { I9Component } from "./i9/i9.component";
const routes: Routes = [
   
    {path: 'w4',component:W4Component},
    {path: 'i9',component:I9Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [W4Component,I9Component]