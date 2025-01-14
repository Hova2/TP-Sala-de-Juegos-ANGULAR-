import { MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSpinner, MatIconModule, MatInput } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { JuegoServiceService } from './servicios/juego-service.service';
import { JugadoresService } from './servicios/jugadores.service';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PaisesService } from './servicios/paises.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    MatSpinner,
    SexoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    JuegoServiceService,
    MiHttpService,
    PaisesService,
    ArchivosJugadoresService,
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
