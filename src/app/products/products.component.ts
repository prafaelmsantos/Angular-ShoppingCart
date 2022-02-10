import { Component, OnInit } from '@angular/core';
import { IComponents} from '../service/IComponents';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  components: IComponents[];

  public total:number = 0;
  public totalT:number = 0;

  public items: IComponents[] = [];

  public filtroList:IComponents[] = [];

  public exibirBtn = true;


  constructor() {

    const componentType = {
      processor: 'Processor',
      videocard: 'Video Card',
      motherboard: 'Motherboard',
      memory: 'Memory',
      storage: 'Storage'
    }

    this.components = [
      {
        id: '5bc2f07f-ea2f-4854-a20d-fa4da7af44fd',
        name: 'AMD Ryzen 7 3700X 3.6 GHz 8-Core',
        value: 289,
        type: componentType.processor,
        showBtn: true
    },
    {
        id: 'af8932d0-0280-4f5a-8fc1-ab5d994571a4',
        name: 'Intel Core i5-10600K 4.1 GHz 6-Core',
        value: 357,
        type: componentType.processor,
        showBtn: true
    },
    {
        id: '2f7cd77f-0983-4550-822e-20a936b008f7',
        name: 'AMD Ryzen 7 3700X 3.6 GHz 8-Core',
        value: 279,
        type: componentType.processor,
        showBtn: true
    },
    {
        id: '8e15f120-ccb3-4b17-9d1c-36da82c5c8fd',
        name: 'Zotac GeForce RTX 2080 SUPER 8 GB GAMING AMP',
        value: 1200,
        type: componentType.videocard,
        showBtn: true
    },
    {
        id: 'ea6fc26f-2297-4edd-9b9d-cbfe18302014',
        name: 'Gigabyte GeForce RTX 2070 SUPER 8 GB WINDFORCE OC 3X',
        value: 499,
        type: componentType.videocard,
        showBtn: true
    },
    {
        id: 'c7af8252-f2d9-4e03-9b5d-702247b7e54f',
        name: 'Asus Radeon RX 5700 8 GB STRIX Gaming OC',
        value: 459,
        type: componentType.videocard,
        showBtn: true
    },
    {
        id: '321e3210-ab68-4400-a5af-e3795a11cdbc',
        name: 'Gigabyte X570 I AORUS PRO WIFI Mini ITX AM4',
        value: 219,
        type: componentType.motherboard,
        showBtn: true
    },
    {
        id: '961bbee8-fd18-4999-9a5a-9a00ec6ccf82',
        name: 'MSI MAG Z490 TOMAHAWK ATX LGA1200',
        value: 159,
        type: componentType.motherboard,
        showBtn: true
    },
    {
        id: '46474692-3cc8-459b-87aa-0f729703fa12',
        name: 'Corsair Vengeance RGB Pro 32 GB (2 x 16 GB) DDR4-3200 CL16',
        value: 145,
        type: componentType.memory,
        showBtn: true
    },
    {
        id: '4ef505a5-6e42-45ce-a38e-ca6143c00c2f',
        name: ' G.Skill Aegis 32 GB (2 x 16 GB) DDR4-3000 CL16',
        value: 134,
        type: componentType.memory,
        showBtn: true
    },
    {
        id: 'e3cb3103-f8e9-41ea-9d32-70e473d2fbf5',
        name: 'Samsung 970 Evo Plus 500 GB M.2-2280 NVME SSD',
        value: 89,
        type: componentType.storage,
        showBtn: true
    },
    {
        id: '64347461-c9f9-42c3-8ee2-7bd3bb1e0979',
        name: 'Seagate Barracuda Compute 2 TB 3.5" 7200RPM HDD',
        value: 54,
        type: componentType.storage,
        showBtn: true
    },
    {
        id: '756a48b6-d94c-45ac-b3f4-d6ae2f42c366',
        name: 'ADATA XPG SX8200 Pro 1 TB M.2-2280 NVME SSD',
        value: 244,
        type: componentType.storage,
        showBtn: true
    },
    {
        id: '4533dd2e-9df9-410c-88a5-5c419d3b6440',
        name: 'Samsung 970 Evo Plus 1 TB M.2-2280 NVME SSD',
        value: 189,
        type: componentType.storage,
        showBtn: true
    }

    ];
   }

  ngOnInit() {
    this.precoTotal();
    this.taxaTotal();
  }



  precoTotal(){
    this.total = 0;
    for(var i=0;i<this.items.length;i++){
      this.total += (this.items[i].value);
    }
  }
  taxaTotal(){
    this.totalT = 0;
    for(var i=0;i<this.items.length;i++){
      this.totalT += (this.items[i].value *0.23);
    }
  }


  clearCart() {
    this.items = [];
    this.total =0;
    this.totalT =0;

    for(var i=0;i<this.components.length;i++){
      this.components[i].showBtn=true;
    }

  }

  addToCart(component: IComponents) {

    if(this.items.push(component)){
      this.precoTotal();
      this.taxaTotal();
      component.showBtn=false;
    }



  }

  delToCart(id: string, component: IComponents) {


    for(var i=0;i<this.items.length;i++){
      if(this.items[i].id === id)
      {
        this.items.splice(i,1);
      }
    }
    this.precoTotal();
    this.taxaTotal();
    component.showBtn=true;

  }


}
