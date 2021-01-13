import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {


  usuario = {
    nombre: 'Cristopher',
    apellido: 'Ollero',
    correo: 'collero@gmail.com',
    pais: 'CRI',
    genero: ''
  }

  constructor(private paisService: PaisService) { }

  paises: any[] = [];

  ngOnInit(): void {

    this.paisService.getPaises().subscribe(data => {
      this.paises = data;

      this.paises.unshift({
        nombre: '[ Seleccione un país ]',
        codigo: ''
      })

      console.log(this.paises);
    });

  }


  guardar(forma: NgForm) {

    if (forma.invalid) {

      Object.values(forma.controls).forEach(control => {
        if (control.invalid) {
          control.markAllAsTouched();
        }
      });

      return;
    }

    console.log(forma);
    console.log(forma.value);

  }
}
