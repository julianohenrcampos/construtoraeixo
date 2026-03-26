/// <reference types="vite/client" />

declare module "*.png?w=800&format=webp&quality=75" {
  const src: string;
  export default src;
}

declare module "*.jpg?w=800&format=webp&quality=75" {
  const src: string;
  export default src;
}

declare module "*.jpg?w=1920&format=webp&quality=75" {
  const src: string;
  export default src;
}

declare module "*.jpg?w=1440&format=webp&quality=60" {
  const src: string;
  export default src;
}

declare module "*&format=webp" {
  const src: string;
  export default src;
}

declare module "*?w=*" {
  const src: string;
  export default src;
}
