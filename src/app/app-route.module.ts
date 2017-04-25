import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockViewComponent } from './home/blockView/block-view.component';
import { ImageUploadComponent } from './home/imageUpload/image-upload.component';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './home/tableView/table-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'imageUpload', pathMatch: 'full' },
            { path: 'tableView', component: TableViewComponent, canActivate: [AuthGuard] },
            { path: 'blockView', component: BlockViewComponent, canActivate: [AuthGuard] },
            { path: 'imageUpload', component: ImageUploadComponent, canActivate: [AuthGuard] },
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {
}
