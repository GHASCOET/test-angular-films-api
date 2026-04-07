import { Component } from '@angular/core';
import { StatementComponent } from '@components/statement/statement.component';
import { ExerciseComponent } from '@components/exercise/exercise.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [StatementComponent, ExerciseComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
