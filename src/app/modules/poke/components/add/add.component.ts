import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'poke-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnChanges {
  @Output() addPokemon: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      num: new FormControl(0, [Validators.required]),
      nom: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  submit(): boolean {

    if (!this.form.valid) {
      return false;
    }

    this.addPokemon.emit(this.form.value as Pokemon);
    return true;
  }

}
