import { IResolvers } from "../generated-schema-types";

export default {
  PpvProduct: {
    policy(_parent: any, args: any) {
      return _parent.policy;
    }
  },
  Query: {
    ppvProduct(_parent: any, args: any) {
      console.log('ppvProduct', args);
      return Promise.resolve({
        productCode: 'ppv',
        make: 'Toyota',
        model: "Corolla",
        year: 2015,
        status: 'IN_STORAGE',
        policy: {
          id:'6423897',
          effectiveDate: "2019-01-01",
          renewal: {
            effectiveDate: "2020-01-01"
          }
        },
        storages: [
          { effectiveDate:"2019-06-01"}
        ]
      });
    },
  }
} as IResolvers;
