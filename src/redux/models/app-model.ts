export type ResponseType = {
  type: string;
  payload: any;
};

export type Toggle = {
  isOpen: Boolean;
};
export type Filter = {
    search: string,
    category:string
  };

export type ProductsModel = {
  data: any;
  fetching: boolean;
  requestComplete: boolean;
  error: string;
};

export type CategoriesModel = {
  dropdown: any[];
  fetching: boolean;
  requestComplete: boolean;
  error: string;
};
