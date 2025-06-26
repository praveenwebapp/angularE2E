import { Routes } from '@angular/router';

import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { StructutalDirective } from './structutal-directive/structutal-directive';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { BuilInPipes } from './buil-in-pipes/buil-in-pipes';
import { TemplateDrivenForms } from './Forms/template-driven-forms/template-driven-forms';
import { ReactiveForm } from './Forms/reactive-form/reactive-form';
import { Profile } from './profile/profile';

export const routes: Routes = [
    // { path: '', component: UserComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: User },
    { path: 'profile', component: Profile },
    { path: 'data-binding', component: Databinding },
    { path: 'structural-directive', component: StructutalDirective },
    { path: 'attribute-directive', component: AttributeDirectives },
    { path: 'Builin-Pipes', component: BuilInPipes },
    { path: 'T-Form', component: TemplateDrivenForms },
    { path: 'R-Form', component: ReactiveForm },
    { path: '**', component:Pagenotfound }
];