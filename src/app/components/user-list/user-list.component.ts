import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from 'src/shared/services/users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'avatar'];
  totalRows = 0;
  currentPage = 0;
  pageSize = 2;
  pageSizeOptions: number[] = [2, 4, 5, 6];
  dataSource: any
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  userList: any;
  constructor(private _userService: UsersService) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    // Initially get first page //
    this.getUser(this.currentPage + 1, this.pageSize)

  }
  // Get Users List From Api //
  getUser(pagenumber: number, pageSize: any) {
    this._userService.getUsers(pagenumber, pageSize).subscribe((res: any) => {
      if (res) {
        this.userList = res.data
        this.dataSource = new MatTableDataSource<any>(this.userList);
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = res.total;
      }
      else {
        console.log("Something went wrong.");
      }
    }, (err) => {
      console.log("Error occured", err);
    });
  }
  // On page/size change fetch users according to size and page//
  pageChanged(event: any) {
    this.getUser(event.pageIndex + 1, event.pageSize)
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
