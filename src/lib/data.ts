import image1 from '../../public/img1.webp';
import image2 from '../../public/img2.webp';
import image3 from '../../public/img3.webp';
import image4 from '../../public/img4.webp';
import image5 from '../../public/img5.webp';
import image6 from '../../public/img6.webp';
import image7 from '../../public/img7.webp';
import image8 from '../../public/img8.webp';
import image9 from '../../public/img9.webp';
import image10 from '../../public/img10.webp';

export interface Producto {
    id: string;
    cant: string; 
    title: string;
    precio: string;
    description: string;
    image: ImageMetadata;
}

export const productos: Producto[] = [
    {
        id: '1',
        cant: 'Frasco 385g',
        title: "Pre entreno KL Shaaboom Pump",
        precio: "S/ 150.00",
        description: "Descripcion del producto 1",
        image: image1
    },
    {
        id: '2',
        cant: 'Frasco 1000g',
        title: "Ultimate Nutrition 100% Creatina monohidratada",
        precio: "S/ 100.00",
        description: "Descripcion del producto 2",
        image: image2
    },
    {
        id: '3',
        cant: 'Frasco 300g',
        title: "Ultimate Nutrition 100% Creatina monohidratada",
        precio: "S/ 50.00",
        description: "Descripcion del producto 3",
        image: image3
    },
    {
        id: '4',
        cant: 'Frasco 500g',
        title: "Kevin Levrone 100% Creatina monohidratada",
        precio: "S/ 80.00",
        description: "Kevin Levrone 100% Creatina monohidratada es una marca revolucionaria de suplementos deportivos . Lo que hace que Levrone Signature Series sea tan distintiva en un mercado saturado de lineas de suplementos , es la calidad optima y la ciencia rigurosa que se incluye en todos y cada uno de los productos de suplementos",
        image: image4
    },
    {
        id: '5',
        cant: 'Frasco 300g',
        title: "Kevin Levrone 100% Creatina monohidratada",
        precio: "S/ 50.00",
        description: "Descripcion del producto 5",
        image: image5
    },
    {
        id: '6',
        cant: 'Frasco 300g',
        title: "THE CREATINE",
        precio: "S/ 50.00",
        description: "Descripcion del producto 6",
        image: image6
    },
    {
        id: '7',
        cant: 'Frasco 3000g',
        title: "WHEY GOLD PRO 3000g",
        precio: "S/ 200.00",
        description: "Descripcion del producto 7",
        image: image7
    },
    {
        id: '8',
        cant: 'Frasco 2000g',
        title: "SHADOWHEY 2000G",
        precio: "S/ 150.00",
        description: "Descripcion del producto 8",
        image: image8
    },
    {
        id: '9',
        cant: 'Frasco 30g',
        title: "ISO WHEY 30g",
        precio: "S/ 20.00",
        description: "Descripcion del producto 9",
        image: image9
    },
    {
        id: '10',
        cant: 'Frasco 30g',
        title: "ISO WHEY 30G",
        precio: "S/ 20.00",
        description: "Descripcion del producto 10",
        image: image10
    },
];