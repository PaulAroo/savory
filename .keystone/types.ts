/* eslint-disable */

type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-6/core/types').JSONValue;
  readonly Decimal: import('@keystone-6/core/types').Decimal | string;
};

export type UserWhereUniqueInput = {
  readonly id?: Scalars['ID'] | null;
  readonly email?: Scalars['String'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput> | UserWhereInput | null;
  readonly OR?: ReadonlyArray<UserWhereInput> | UserWhereInput | null;
  readonly NOT?: ReadonlyArray<UserWhereInput> | UserWhereInput | null;
  readonly id?: IDFilter | null;
  readonly name?: StringFilter | null;
  readonly email?: StringFilter | null;
  readonly createdAt?: DateTimeNullableFilter | null;
};

export type IDFilter = {
  readonly equals?: Scalars['ID'] | null;
  readonly in?: ReadonlyArray<Scalars['ID']> | Scalars['ID'] | null;
  readonly notIn?: ReadonlyArray<Scalars['ID']> | Scalars['ID'] | null;
  readonly lt?: Scalars['ID'] | null;
  readonly lte?: Scalars['ID'] | null;
  readonly gt?: Scalars['ID'] | null;
  readonly gte?: Scalars['ID'] | null;
  readonly not?: IDFilter | null;
};

export type StringFilter = {
  readonly equals?: Scalars['String'] | null;
  readonly in?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly notIn?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly lt?: Scalars['String'] | null;
  readonly lte?: Scalars['String'] | null;
  readonly gt?: Scalars['String'] | null;
  readonly gte?: Scalars['String'] | null;
  readonly contains?: Scalars['String'] | null;
  readonly startsWith?: Scalars['String'] | null;
  readonly endsWith?: Scalars['String'] | null;
  readonly mode?: QueryMode | null;
  readonly not?: NestedStringFilter | null;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type NestedStringFilter = {
  readonly equals?: Scalars['String'] | null;
  readonly in?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly notIn?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly lt?: Scalars['String'] | null;
  readonly lte?: Scalars['String'] | null;
  readonly gt?: Scalars['String'] | null;
  readonly gte?: Scalars['String'] | null;
  readonly contains?: Scalars['String'] | null;
  readonly startsWith?: Scalars['String'] | null;
  readonly endsWith?: Scalars['String'] | null;
  readonly not?: NestedStringFilter | null;
};

export type DateTimeNullableFilter = {
  readonly equals?: any | null;
  readonly in?: ReadonlyArray<any> | any | null;
  readonly notIn?: ReadonlyArray<any> | any | null;
  readonly lt?: any | null;
  readonly lte?: any | null;
  readonly gt?: any | null;
  readonly gte?: any | null;
  readonly not?: DateTimeNullableFilter | null;
};

export type UserOrderByInput = {
  readonly id?: OrderDirection | null;
  readonly name?: OrderDirection | null;
  readonly email?: OrderDirection | null;
  readonly createdAt?: OrderDirection | null;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly createdAt?: any | null;
};

export type UserUpdateArgs = {
  readonly where: UserWhereUniqueInput;
  readonly data: UserUpdateInput;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly createdAt?: any | null;
};

export type ProductWhereUniqueInput = {
  readonly id?: Scalars['ID'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null;
  readonly OR?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null;
  readonly NOT?: ReadonlyArray<ProductWhereInput> | ProductWhereInput | null;
  readonly id?: IDFilter | null;
  readonly name?: StringFilter | null;
  readonly description?: StringFilter | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly status?: StringNullableFilter | null;
  readonly price?: IntNullableFilter | null;
};

export type StringNullableFilter = {
  readonly equals?: Scalars['String'] | null;
  readonly in?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly notIn?: ReadonlyArray<Scalars['String']> | Scalars['String'] | null;
  readonly lt?: Scalars['String'] | null;
  readonly lte?: Scalars['String'] | null;
  readonly gt?: Scalars['String'] | null;
  readonly gte?: Scalars['String'] | null;
  readonly contains?: Scalars['String'] | null;
  readonly startsWith?: Scalars['String'] | null;
  readonly endsWith?: Scalars['String'] | null;
  readonly mode?: QueryMode | null;
  readonly not?: StringNullableFilter | null;
};

export type IntNullableFilter = {
  readonly equals?: Scalars['Int'] | null;
  readonly in?: ReadonlyArray<Scalars['Int']> | Scalars['Int'] | null;
  readonly notIn?: ReadonlyArray<Scalars['Int']> | Scalars['Int'] | null;
  readonly lt?: Scalars['Int'] | null;
  readonly lte?: Scalars['Int'] | null;
  readonly gt?: Scalars['Int'] | null;
  readonly gte?: Scalars['Int'] | null;
  readonly not?: IntNullableFilter | null;
};

export type ProductOrderByInput = {
  readonly id?: OrderDirection | null;
  readonly name?: OrderDirection | null;
  readonly description?: OrderDirection | null;
  readonly status?: OrderDirection | null;
  readonly price?: OrderDirection | null;
};

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneForUpdateInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductImageRelateToOneForUpdateInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
  readonly disconnect?: Scalars['Boolean'] | null;
};

export type ProductUpdateArgs = {
  readonly where: ProductWhereUniqueInput;
  readonly data: ProductUpdateInput;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneForCreateInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductImageRelateToOneForCreateInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id?: Scalars['ID'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput> | ProductImageWhereInput | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput> | ProductImageWhereInput | null;
  readonly NOT?: ReadonlyArray<ProductImageWhereInput> | ProductImageWhereInput | null;
  readonly id?: IDFilter | null;
  readonly altText?: StringFilter | null;
  readonly product?: ProductWhereInput | null;
};

export type ProductImageOrderByInput = {
  readonly id?: OrderDirection | null;
  readonly altText?: OrderDirection | null;
};

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneForUpdateInput | null;
};

export type ProductRelateToOneForUpdateInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: Scalars['Boolean'] | null;
};

export type ProductImageUpdateArgs = {
  readonly where: ProductImageWhereUniqueInput;
  readonly data: ProductImageUpdateInput;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneForCreateInput | null;
};

export type ProductRelateToOneForCreateInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
};

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaIsNonNull =
  | 'read'
  | 'create'
  | 'update';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode =
  | 'edit'
  | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldPosition =
  | 'form'
  | 'sidebar';

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC';

type ResolvedUserCreateInput = {
  id?: import('@prisma/client').Prisma.UserCreateInput['id'];
  name?: import('@prisma/client').Prisma.UserCreateInput['name'];
  email?: import('@prisma/client').Prisma.UserCreateInput['email'];
  password?: import('@prisma/client').Prisma.UserCreateInput['password'];
  createdAt?: import('@prisma/client').Prisma.UserCreateInput['createdAt'];
};

type ResolvedUserUpdateInput = {
  id?: undefined;
  name?: import('@prisma/client').Prisma.UserUpdateInput['name'];
  email?: import('@prisma/client').Prisma.UserUpdateInput['email'];
  password?: import('@prisma/client').Prisma.UserUpdateInput['password'];
  createdAt?: import('@prisma/client').Prisma.UserUpdateInput['createdAt'];
};

type ResolvedProductCreateInput = {
  id?: import('@prisma/client').Prisma.ProductCreateInput['id'];
  name?: import('@prisma/client').Prisma.ProductCreateInput['name'];
  description?: import('@prisma/client').Prisma.ProductCreateInput['description'];
  photo?: import('@prisma/client').Prisma.ProductCreateInput['photo'];
  status?: import('@prisma/client').Prisma.ProductCreateInput['status'];
  price?: import('@prisma/client').Prisma.ProductCreateInput['price'];
};

type ResolvedProductUpdateInput = {
  id?: undefined;
  name?: import('@prisma/client').Prisma.ProductUpdateInput['name'];
  description?: import('@prisma/client').Prisma.ProductUpdateInput['description'];
  photo?: import('@prisma/client').Prisma.ProductUpdateInput['photo'];
  status?: import('@prisma/client').Prisma.ProductUpdateInput['status'];
  price?: import('@prisma/client').Prisma.ProductUpdateInput['price'];
};

type ResolvedProductImageCreateInput = {
  id?: import('@prisma/client').Prisma.ProductImageCreateInput['id'];
  image?: import('@prisma/client').Prisma.ProductImageCreateInput['image'];
  altText?: import('@prisma/client').Prisma.ProductImageCreateInput['altText'];
  product?: import('@prisma/client').Prisma.ProductImageCreateInput['product'];
};

type ResolvedProductImageUpdateInput = {
  id?: undefined;
  image?: import('@prisma/client').Prisma.ProductImageUpdateInput['image'];
  altText?: import('@prisma/client').Prisma.ProductImageUpdateInput['altText'];
  product?: import('@prisma/client').Prisma.ProductImageUpdateInput['product'];
};

export declare namespace Lists {
  export type User<Session = any> = import('@keystone-6/core').ListConfig<Lists.User.TypeInfo<Session>>;
  namespace User {
    export type Item = import('@prisma/client').User;
    export type TypeInfo<Session = any> = {
      key: 'User';
      isSingleton: false;
      fields: 'id' | 'name' | 'email' | 'password' | 'createdAt'
      item: Item;
      inputs: {
        where: UserWhereInput;
        uniqueWhere: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
        orderBy: UserOrderByInput;
      };
      prisma: {
        create: ResolvedUserCreateInput;
        update: ResolvedUserUpdateInput;
      };
      all: __TypeInfo<Session>;
    };
  }
  export type Product<Session = any> = import('@keystone-6/core').ListConfig<Lists.Product.TypeInfo<Session>>;
  namespace Product {
    export type Item = import('@prisma/client').Product;
    export type TypeInfo<Session = any> = {
      key: 'Product';
      isSingleton: false;
      fields: 'id' | 'name' | 'description' | 'photo' | 'status' | 'price'
      item: Item;
      inputs: {
        where: ProductWhereInput;
        uniqueWhere: ProductWhereUniqueInput;
        create: ProductCreateInput;
        update: ProductUpdateInput;
        orderBy: ProductOrderByInput;
      };
      prisma: {
        create: ResolvedProductCreateInput;
        update: ResolvedProductUpdateInput;
      };
      all: __TypeInfo<Session>;
    };
  }
  export type ProductImage<Session = any> = import('@keystone-6/core').ListConfig<Lists.ProductImage.TypeInfo<Session>>;
  namespace ProductImage {
    export type Item = import('@prisma/client').ProductImage;
    export type TypeInfo<Session = any> = {
      key: 'ProductImage';
      isSingleton: false;
      fields: 'id' | 'image' | 'altText' | 'product'
      item: Item;
      inputs: {
        where: ProductImageWhereInput;
        uniqueWhere: ProductImageWhereUniqueInput;
        create: ProductImageCreateInput;
        update: ProductImageUpdateInput;
        orderBy: ProductImageOrderByInput;
      };
      prisma: {
        create: ResolvedProductImageCreateInput;
        update: ResolvedProductImageUpdateInput;
      };
      all: __TypeInfo<Session>;
    };
  }
}
export type Context<Session = any> = import('@keystone-6/core/types').KeystoneContext<TypeInfo<Session>>;
export type Config<Session = any> = import('@keystone-6/core/types').KeystoneConfig<TypeInfo<Session>>;

export type TypeInfo<Session = any> = {
  lists: {
    readonly User: Lists.User.TypeInfo<Session>;
    readonly Product: Lists.Product.TypeInfo<Session>;
    readonly ProductImage: Lists.ProductImage.TypeInfo<Session>;
  };
  prisma: import('@prisma/client').PrismaClient;
  session: Session;
};

type __TypeInfo<Session = any> = TypeInfo<Session>;

export type Lists<Session = any> = {
  [Key in keyof TypeInfo['lists']]?: import('@keystone-6/core').ListConfig<TypeInfo<Session>['lists'][Key]>
} & Record<string, import('@keystone-6/core').ListConfig<any>>;

export {}
