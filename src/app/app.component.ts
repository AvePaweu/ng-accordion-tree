import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'accordion-tree';

  items = [
    {
      title: 'Group1', isOpen: true, children: [
        {
          title: 'Child1', isOpen: true, children: [
            { title: 'Child1' }
          ]
        },
        {
          title: 'Child2', isOpen: false, children: [
            { title: 'Child1' },
            { title: 'Child2' }
          ]
        }
      ]
    },
    {
      title: 'Group2', isOpen: false, children: [
        {
          title: 'Child1', isOpen: true, children: [
            { title: 'Child1' },
            { title: 'Child2' }
          ]
        },
        {
          title: 'Child2', isOpen: false, children: [
            { title: 'Child1' }
          ]
        },
        {
          title: 'Child3', isOpen: true, children: [
            { title: 'Child1' },
            { title: 'Child2' },
            { title: 'Child3' }

          ]
        }
      ]
    },
    {
      title: 'Group3', isOpen: false, children: [
        { title: 'Child1', isOpen: true, children: [] }
      ]
    }
  ];
}
