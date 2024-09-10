import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../../interfaces';
import { categoryList } from 'src/app/data/categoryList.data';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categoryList = categoryList;

  constructor() {}

  ngOnInit() {}
}
