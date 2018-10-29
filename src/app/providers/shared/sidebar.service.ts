import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class SidebarService {
  menu: any = [
    {
      title: "PAGES",
      icon: "mdi mdi-gauge",
      submenu: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "ProgressBar", url: "/progress" },
        { title: "Charts", url: "/chart1" },
        { title: "Promises", url: "/promises" },
        { title: "Rxjs", url: "/rxjs" }
      ]
    },
    {
      title: "MAINTENANCE",
      icon: "mdi mdi-food-apple",
      submenu: [
        { title: "Users", url: "/users" },
        { title: "Hospitals", url: "/hospitals" },
        { title: "Doctors", url: "/doctors" }
      ]
    }
  ];

  constructor() {}
}
