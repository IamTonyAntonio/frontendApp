import { Component } from '@angular/core';
import { AdminActivitiesService } from 'src/app/services/admin-activities.service';

@Component({
  selector: 'app-ver-agremiados',
  templateUrl: './ver-agremiados.component.html',
  styleUrls: ['./ver-agremiados.component.css']
})
export class VerAgremiadosComponent {

  constructor(private adminS: AdminActivitiesService) { }

  agremiados: any[] = [];

  ngOnInit(): void {
    this.obtenerAgremiados();
  }

  obtenerAgremiados() {
    this.adminS.getAgremiados().subscribe(
      (data) => {
        this.agremiados = data;
        console.log(this.agremiados);
      },
      (error) => {
        console.error('Error al obtener agremiados', error);
      }
    );
  }

}
