import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Education'},
    {id: 4, title: 'Free time'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Money'},
    {id: 8, title: 'Health'},
    {id: 9, title: 'Gadgets'},
    {id: 10, title: 'Car'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'LOW', color: '#3388FF'},
    {id: 2, title: 'MEDIUM', color: '#FFFC33'},
    {id: 3, title: 'HIGH', color: '#FF3333'},
    {id: 4, title: 'Urgently', color: '#f1128d'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Fill up the tank with gasoline',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-11-30')
    },
    {
      id: 2,
      title: 'Finished tasks',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-11-30')
    },
    {
      id: 3,
      title: 'Go to  nature',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2020-08-28')
    },
    {
      id: 4,
      title: 'Learn Angular',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2020-11-30')
    },
    {
      id: 5,
      title: 'Watch Vikings',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[3],
      date: new Date('2020-10-30')
    },
    {
      id: 6,
      title: 'Push up 100',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-11-30')
    },
    {
      id: 7,
      title: 'Cook steak',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[5],
      date: new Date('2020-10-28')
    },
    {
      id: 8,
      title: 'Buy gin',
      priority: TestData.priorities[4],
      completed: true,
      category: TestData.categories[6],
      date: new Date('2020-12-15')
    },
    {
      id: 9,
      title: 'Go to the doctor with niece',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[7],
      date: new Date('2020-09-01')
    },
    {
      id: 10,
      title: 'Buy  new headphones',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[8],
      date: new Date('2020-08-28')
    },
    {
      id: 11,
      title: 'Repair the car',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-12-15')
    },
    {
      id: 12,
      title: 'Abdominal exercises',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-12-16')
    },
    {
      id: 13,
      title: 'Do something',
      completed: false
    },
    {
      id: 14,
      title: 'Null pointer Exception',
      completed: true
    },
    {
      id: 15,
      title: 'No such Element Exception',
      completed: true
    },
  ];
}
