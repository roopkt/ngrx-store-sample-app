
import { createSelector } from 'reselect';
import { RouterState } from '@ngrx/router-store';

import * as fromTree from 'app/core/models/tree';
import * as fromTodos from 'app/core/models/todo';
import * as fromSave from 'app/core/models/common/save.state';


export interface State {
    todos: fromTodos.State;
    tree: fromTree.State;
    save: fromSave.State;
    router: RouterState;
}

export const initialState = {
    todos: fromTodos.initialState,
    tree: fromTree.initialState,
    save: fromSave.initialState
};

