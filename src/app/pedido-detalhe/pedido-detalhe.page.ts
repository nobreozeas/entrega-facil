import { Component, OnInit } from '@angular/core';

import{ Plugins, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.page.html',
  styleUrls: ['./pedido-detalhe.page.scss'],
})
export class PedidoDetalhePage implements OnInit {

  image: any;

  constructor() { }

  ngOnInit() {
  }

  async takePhoto(){
    const capturedImage = await Plugins.Camera.getPhoto(
      {
        quality:90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType:CameraResultType.Uri
      }
    );

    this.image = capturedImage.webPath;
  }

}
