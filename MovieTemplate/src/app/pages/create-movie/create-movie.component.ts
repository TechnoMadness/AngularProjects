import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryStruct } from 'src/app/models/category_struct';
import { MoviesListService } from 'src/app/services/list.movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  constructor(private movieService: MoviesListService,
    private router: Router,
    private _formBuilder: FormBuilder) { }



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  categories!: CategoryStruct[];

  

  ngOnInit(): void {
    this.movieService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any, year:any, imdb:any) {

    const movie = {
      id: 0,
      title: title.value,
      description:  description.value,
      imgsource: imageUrl.value,
      date: year.value,
      category: Number(categoryId.value),
      imdb: Number(imdb.value)
      
    };


    this.movieService.createMovie(movie).subscribe(data =>
      this.router.navigate(['/movies', data.id])
    );

  }
}
