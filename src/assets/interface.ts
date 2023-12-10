interface IBenefit {
    massa: string,
    energy: string
}
interface IDetail {
    description: string,
    list: string[],
    benefits: IBenefit
}
interface IMedia {
    src: string,
    alt: string
}
interface IPrice {
    old: string,
    just: string
}

export interface IProductData {
    title: string,
    price: IPrice,
    image: IMedia,
    details: IDetail
}

