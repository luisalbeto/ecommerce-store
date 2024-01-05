export interface Billboard {
  id: string;
  name: string; 
  imageUrl: string;
};

export interface Category {
   id: string;
   name: string;
   billborad: Billboard;
};

