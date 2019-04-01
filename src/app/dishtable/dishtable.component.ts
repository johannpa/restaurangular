import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DishtableDataSource } from './dishtable-datasource';

@Component({
  selector: 'app-dishtable',
  templateUrl: './dishtable.component.html',
  styleUrls: ['./dishtable.component.css']
})
export class DishtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DishtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'price'];

  ngOnInit() {
    this.dataSource = new DishtableDataSource(this.paginator, this.sort);
  }
}
