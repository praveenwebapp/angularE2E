import { Routes } from '@angular/router';

import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { StructutalDirective } from './structutal-directive/structutal-directive';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { BuilInPipes } from './buil-in-pipes/buil-in-pipes';

export const routes: Routes = [
    // { path: '', component: UserComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: User },
    { path: 'data-binding', component: Databinding },
    { path: 'structural-directive', component: StructutalDirective },
    { path: 'attribute-directive', component: AttributeDirectives },
    { path: 'Builin-Pipes', component: BuilInPipes },
    { path: '**', component:Pagenotfound }
];