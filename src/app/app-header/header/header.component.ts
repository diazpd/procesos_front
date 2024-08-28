import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario = "";
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuario=this.usuarioService.username;
   }

  goTo(menu: string) {
    const userId = parseInt(this.router.snapshot.params.userId)
    const token = this.router.snapshot.params.userToken
    if (menu === "logIn") {
      this.routerPath.navigate([`/`])
    }
    else if (menu === "carrera") {
      this.routerPath.navigate([`/carreras/${userId}/${token}`])
    }
    else {
      this.routerPath.navigate([`/apuestas/${userId}/${token}`])
    }
  }

}
