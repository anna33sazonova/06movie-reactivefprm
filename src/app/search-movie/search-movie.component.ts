import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Movie } from '../movie.model';
import { isRequiredValidator } from '../titleid-validator';
import { rangeDateValidator } from '../year-validator';



@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  types = [
    { id: 1, name: "Film" },
    { id: 2, name: "Serie" },
    { id: 3, name: "Episode" },
  ];

  files = [
    { id: 1, name: "Full" },
    { id: 2, name: "Short" }
  ]

  searchMovieForm: FormGroup = this.formBuilder.group({

    movie: this.formBuilder.group({
      id: [''],
      title: ['']
    }, {validator: isRequiredValidator('id', 'title')}),
    type: [''],
    release: ['', [Validators.required, rangeDateValidator(1900, new Date().getFullYear())]],
    file: ['']

  })

  onSubmit(): void {
    console.log(this.searchMovieForm.value)
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {   
    this.patchFileValues()
  }

  patchFileValues() {

    this.searchMovieForm.get('file')?.patchValue('Short');
    console.log('patch')
  }

}
