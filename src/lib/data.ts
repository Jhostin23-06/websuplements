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
    title: string;
    description: string;
    image: ImageMetadata;
}

export const productos: Producto[] = [
    {
        id: '1',
        title: "SHAABOOM PUMP 385G",
        description: "Descripcion del producto 1",
        image: image1
    },
    {
        id: '2',
        title: "CREATINE MONOHYDRATE 1000G",
        description: "Descripcion del producto 2",
        image: image2
    },
    {
        id: '3',
        title: "CREATINE MONOHYDRATE 300G",
        description: "Descripcion del producto 3",
        image: image3
    },
    {
        id: '4',
        title: "CREATINE MONOHYDRATE 500G",
        description: "Descripcion del producto 4",
        image: image4
    },
    {
        id: '5',
        title: "CREATINE MONOHYDRATE 300G",
        description: "Descripcion del producto 5",
        image: image5
    },
    {
        id: '6',
        title: "THE CREATINE 300G",
        description: "Descripcion del producto 6",
        image: image6
    },
    {
        id: '7',
        title: "WHEY GOLD PRO 3000G",
        description: "Descripcion del producto 7",
        image: image7
    },
    {
        id: '8',
        title: "SHADOWHEY 2000G",
        description: "Descripcion del producto 8",
        image: image8
    },
    {
        id: '9',
        title: "ISO WHEY 30G",
        description: "Descripcion del producto 9",
        image: image9
    },
    {
        id: '10',
        title: "ISO WHEY 30G",
        description: "Descripcion del producto 10",
        image: image10
    },
];