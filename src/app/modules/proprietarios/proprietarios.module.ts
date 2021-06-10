import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietariosComponent } from './proprietarios.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { ProprietarioService } from './services/proprietario.service';
import { CoreModule } from 'src/app/core/core.module';
import { StorageService } from 'src/app/shared/util/services/storage.service';


@NgModule({
  declarations: [
    ProprietariosComponent,
  ],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    HttpClientModule,
    TableModule,

    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    SkeletonModule,
    CoreModule

  ],
  providers:[ProprietarioService, StorageService]
})
export class ProprietariosModule { }
