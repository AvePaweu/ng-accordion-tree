import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'accordion-tree';

  items = [
    {
      title: 'Group1', isOpen: true, checked: false, isIndeterminate: false, children: [
        {
          title: 'Item1', isOpen: true, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: true }
          ]
        },
        {
          title: 'Item2', isOpen: false, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: false },
            { title: 'Child2', checked: true }
          ]
        }
      ]
    },
    {
      title: 'Group2', isOpen: false, checked: false, isIndeterminate: false, children: [
        {
          title: 'Item1', isOpen: true, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: true },
            { title: 'Child2', checked: true }
          ]
        },
        {
          title: 'Item2', isOpen: false, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: false }
          ]
        },
        {
          title: 'Item3', isOpen: true, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: false },
            { title: 'Child2', checked: true },
            { title: 'Child3', checked: true }

          ]
        }
      ]
    },
    {
      title: 'Group3', isOpen: false, checked: false, isIndeterminate: false, children: [
        {
          title: 'Item1', isOpen: true, checked: false, isIndeterminate: false, children: [
            { title: 'Child1', checked: false },
            { title: 'Child2', checked: true },
            { title: 'Child3', checked: false },
            { title: 'Child4', checked: false }
          ]
        }
      ]
    }
  ];

  build(items) {
    items.forEach(group => {
      group.children.forEach(item => {
        const checkedChildren = item.children.filter(child => child.checked === true);
        item.checked = checkedChildren.length === item.children.length;
        item.isIndeterminate = checkedChildren.length > 0 && checkedChildren.length < item.children.length;
      });
      const checkedItems = group.children.filter(item => item.checked === true);
      const indeterminateItems = group.children.filter(item => item.isIndeterminate === true);
      group.checked = checkedItems.length === group.children.length;
      group.isIndeterminate = checkedItems.length > 0 && checkedItems.length < group.children.length ||
        indeterminateItems.length > 0;
    });
    return items;
  }

  checkItemsAndChildren(group) {
    group.children.forEach(item => {
      item.checked = group.checked;
      item.isIndeterminate = false;
      item.children.forEach(child => {
        child.checked = group.checked;
        child.isIndeterminate = false;
      });
    });
  }

  checkChildren(item) {
    item.children.forEach(child => {
      child.checked = item.checked;
      child.isIndeterminate = false;
    });
  }

  ngOnInit() {
    this.items = this.build(this.items);
  }
}
