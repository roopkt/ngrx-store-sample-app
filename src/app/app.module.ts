
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TodoListComponent } from 'app/todos/todo-list.component';
import { TodoComponent } from 'app/todos/todo.component';
import { NewTodoInputComponent } from 'app/todos/new-todo.component';
import { TodoContainerComponent } from 'app/todos/todo-container.component';

import { TreeNodeComponent } from 'app/tree/tree-node.component';
import { TreeNodeListComponent } from 'app/tree/tree-node-list.component';
import { TreeContainerComponent } from 'app/tree/tree-container.component';

import { MyErrorHandler } from './error-handler';
import { CoreModule } from 'app/core/core.module';
import { routes } from 'app/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NewTodoInputComponent,
    TodoComponent,
    TodoListComponent,
    TodoContainerComponent,
    TreeNodeComponent,
    TreeNodeListComponent,
    TreeContainerComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

