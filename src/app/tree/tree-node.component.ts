import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TreeEvents } from 'app/tree/tree-events';
@Component({
    selector: 'app-tree-node',
    template: `
    <div *ngIf="node" (click)="toggle(node)">
        <span *ngIf="showExpandButton">+</span>
        <span *ngIf="showCollapseButton">-</span>
        <span   [class.selected]="node.selected"
                role="treeitem"
                attr.aria-expanded="{{node.expanded}}"
                attr.aria-hidden="{{!node.expanded}}"
                attr.aria-selected="{{node.selected}}"
                attr.aria-label="{{node.title}}"
                attr.tabindex="{{node.tabIndex}}"
                attr.title="{{node.title}}">
            {{node.title}}
        </span>
   
        <app-tree-node-list role="group" [nodes]="allChildren" *ngIf="canShowChildren">
        </app-tree-node-list>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
    , styles: [`
        .selected {background-color:yellow}
        `]
})

export class TreeNodeComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() node;
    constructor(private treeEvents: TreeEvents) {
      //  console.log('constructor', 'TreeNodeComponent');
    }
    toggle(node) {
        this.treeEvents.toggle(node.path);
    }
    ngOnInit() {
      //  console.log(`ngOnInit ${this.node.title}`, this.node);
    }
    ngAfterViewInit() {
      //  console.log('ngAfterViewInit', `${this.node.title}`);
    }
    ngOnChanges() {
      //  console.log('ngOnChanges', `${this.node.title}`);
    }
    get treeNodes() {
        return Observable.of(this.node.nodes);
    }
    get expanded() {
        return this.node.expanded;
    }
    get hasChildren() {
      //  console.log(`${this.node.title} hasChildren: `, this.node.nodes.length > 0);
        return this.node.nodes.length > 0;
    }
    get showExpandButton() {
        return !this.node.expanded && this.hasChildren;
    }
    get showCollapseButton() {
        return this.node.expanded && this.hasChildren;
    }
    get canShowChildren() {
        return this.hasChildren && this.expanded;
    }
    get allChildren(){
        return this.node.nodes;
    }
}

