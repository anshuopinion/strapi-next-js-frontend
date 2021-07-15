declare interface IImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      path: null;
      url: string;
    };
    small: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: 470;
      height: 500;
      size: 24.27;
      path: null;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: 26.27;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: Date;
  updated_at: Date;
}
declare interface IPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: {
    id: number;
    name: string;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
    avatar: IImage;
  };
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  cover: IImage;
}
