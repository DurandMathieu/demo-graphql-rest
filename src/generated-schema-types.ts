/* tslint:disable */
export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  ppvProduct: PpvProduct;
}

export interface PpvProduct {
  productCode: string;

  make: string;

  model: string;

  year: number;

  status: string;

  policy?: Maybe<Policy>;

  storages?: Maybe<(Maybe<Storage>)[]>;
}

export interface Policy {
  id: string;

  effectiveDate: string;

  expiryDate?: Maybe<string>;

  renewal?: Maybe<PolicyRenewal>;
}

export interface PolicyRenewal {
  effectiveDate: string;
}

export interface Storage {
  effectiveDate: string;

  expiryDate?: Maybe<string>;
}

export interface Role {
  type: string;

  person?: Maybe<Person>;

  attributes?: Maybe<Attribute[]>;
}

export interface Person {
  id: string;

  firstName: string;

  lastName: string;
}

export interface Attribute {
  key: string;

  value: string;
}

// ====================================================
// Arguments
// ====================================================

export interface PpvProductQueryArgs {
  id: string;
}

import { GraphQLResolveInfo } from "graphql";

import { IContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = IContext, TypeParent = {}> {
    ppvProduct?: PpvProductResolver<PpvProduct, TypeParent, Context>;
  }

  export type PpvProductResolver<
    R = PpvProduct,
    Parent = {},
    Context = IContext
  > = Resolver<R, Parent, Context, PpvProductArgs>;
  export interface PpvProductArgs {
    id: string;
  }
}

export namespace PpvProductResolvers {
  export interface Resolvers<Context = IContext, TypeParent = PpvProduct> {
    productCode?: ProductCodeResolver<string, TypeParent, Context>;

    make?: MakeResolver<string, TypeParent, Context>;

    model?: ModelResolver<string, TypeParent, Context>;

    year?: YearResolver<number, TypeParent, Context>;

    status?: StatusResolver<string, TypeParent, Context>;

    policy?: PolicyResolver<Maybe<Policy>, TypeParent, Context>;

    storages?: StoragesResolver<Maybe<(Maybe<Storage>)[]>, TypeParent, Context>;
  }

  export type ProductCodeResolver<
    R = string,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type MakeResolver<
    R = string,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type ModelResolver<
    R = string,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type YearResolver<
    R = number,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = string,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type PolicyResolver<
    R = Maybe<Policy>,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type StoragesResolver<
    R = Maybe<(Maybe<Storage>)[]>,
    Parent = PpvProduct,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace PolicyResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Policy> {
    id?: IdResolver<string, TypeParent, Context>;

    effectiveDate?: EffectiveDateResolver<string, TypeParent, Context>;

    expiryDate?: ExpiryDateResolver<Maybe<string>, TypeParent, Context>;

    renewal?: RenewalResolver<Maybe<PolicyRenewal>, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Policy,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type EffectiveDateResolver<
    R = string,
    Parent = Policy,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type ExpiryDateResolver<
    R = Maybe<string>,
    Parent = Policy,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type RenewalResolver<
    R = Maybe<PolicyRenewal>,
    Parent = Policy,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace PolicyRenewalResolvers {
  export interface Resolvers<Context = IContext, TypeParent = PolicyRenewal> {
    effectiveDate?: EffectiveDateResolver<string, TypeParent, Context>;
  }

  export type EffectiveDateResolver<
    R = string,
    Parent = PolicyRenewal,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace StorageResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Storage> {
    effectiveDate?: EffectiveDateResolver<string, TypeParent, Context>;

    expiryDate?: ExpiryDateResolver<Maybe<string>, TypeParent, Context>;
  }

  export type EffectiveDateResolver<
    R = string,
    Parent = Storage,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type ExpiryDateResolver<
    R = Maybe<string>,
    Parent = Storage,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace RoleResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Role> {
    type?: TypeResolver<string, TypeParent, Context>;

    person?: PersonResolver<Maybe<Person>, TypeParent, Context>;

    attributes?: AttributesResolver<Maybe<Attribute[]>, TypeParent, Context>;
  }

  export type TypeResolver<
    R = string,
    Parent = Role,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type PersonResolver<
    R = Maybe<Person>,
    Parent = Role,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type AttributesResolver<
    R = Maybe<Attribute[]>,
    Parent = Role,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace PersonResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Person> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Person,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string,
    Parent = Person,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string,
    Parent = Person,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace AttributeResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Attribute> {
    key?: KeyResolver<string, TypeParent, Context>;

    value?: ValueResolver<string, TypeParent, Context>;
  }

  export type KeyResolver<
    R = string,
    Parent = Attribute,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<
    R = string,
    Parent = Attribute,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  IContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  IContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  IContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<Context = IContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  PpvProduct?: PpvProductResolvers.Resolvers<Context>;
  Policy?: PolicyResolvers.Resolvers<Context>;
  PolicyRenewal?: PolicyRenewalResolvers.Resolvers<Context>;
  Storage?: StorageResolvers.Resolvers<Context>;
  Role?: RoleResolvers.Resolvers<Context>;
  Person?: PersonResolvers.Resolvers<Context>;
  Attribute?: AttributeResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
