import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { CommonModule } from '@angular/common';
import { Directives } from './directives/directives';
import { StructutalDirective } from './structutal-directive/structutal-directive';
import { StructuraldiretiveNgforFor } from './structuraldiretive-ngfor-for/structuraldiretive-ngfor-for';
import { StructuraldirectiveNgswitchvsswitch } from './structuraldirective-ngswitchvsswitch/structuraldirective-ngswitchvsswitch';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { sign } from 'crypto';
import { Signals } from './signals/signals';
import { LinkedSignals } from './linked-signals/linked-signals';
import { Pagenotfound } from './pagenotfound/pagenotfound';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // User,
    // Databinding,
    // CommonModule,
    // Directives,
    // StructutalDirective,
    // StructuraldiretiveNgforFor,
    // StructuraldirectiveNgswitchvsswitch,
    // AttributeDirectives,
    // Signals,
    // LinkedSignals,
    // Pagenotfound,
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angularendtoend';
}
