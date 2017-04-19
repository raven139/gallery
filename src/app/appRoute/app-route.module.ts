import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockViewComponent } from './../blockView/block-view.component';
import { ImageUploadComponent } from './../imageUpload/image-upload.component';
import { MenuComponent } from './../menu/menu.component';
import { TableViewComponent } from './../tableView/table-view.component';

const routes: Routes = [
    { path: 'tableView', component: TableViewComponent },
    { path: 'blockView', component: BlockViewComponent },
    { path: 'imageUpload', component: ImageUploadComponent },
    { path: '', component: MenuComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },


    // { path: 'equipmentParam', component: EquipmentParamComponent },
    // { path: 'report', component: ReportComponent },
    // { path: 'search', component: SearchComponent },
    // { path: '', component: MenuComponent },
    // { path: '**', component: MenuComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {
}
