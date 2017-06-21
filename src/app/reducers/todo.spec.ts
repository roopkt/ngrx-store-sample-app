import { reducer } from 'app/reducers/todo';
import * as fromActions from '../actions/todo';

describe('todo', () => {
    it('can add new todo', () => {
        const stateBefore = {
            todos: []
        };
        const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing' }));
        const stateAfter = {
            todos: [{ text: 'testing' }]
        };
        expect(result).toEqual(stateAfter);
    });
    describe('Immutable', () => {
        it('can add new todo if already one present', () => {
            const stateBefore = {
                todos: [{ text: 'testing' }]
            };
            const stateAfter = {
                todos: [{ text: 'testing' }, { text: 'testing1' }]
            };
            const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing1' }));
            expect(result).toEqual(stateAfter);

        });
        it('it does not mutate the initial todo', () => {
            const stateBefore = {
                todos: [{ text: 'testing' }]
            };
            const stateAfter = {
                todos: [{ text: 'testing' }, { text: 'testing1' }]
            };
            const result = reducer(stateBefore, fromActions.addTodo({ text: 'testing1' }));
            expect(stateBefore.todos[0] == result.todos[0]).toBeTruthy();
            expect(stateBefore.todos[0]).toEqual(result.todos[0]);
        });
    });
});