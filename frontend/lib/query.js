export const PRODUCT_QUERY = `query{
    products{
      data{
        attributes{
          description
          title
          slug
          price
          picture {
            data{
              attributes{
              formats
              }
            }
          }
        }
      }
    }
  }
  `;

export const GET_PRODUCT_QUERY = `
query getProducts($slug:String!){
  products(filters: {slug :{eq: $slug}}){
    data{
      attributes{
          description
          title
          slug
          price
        picture{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;
