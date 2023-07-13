export const ApiRouteConstants = {
    Users:{
        GetAll: 'users'
    },
    Products:{
        GetAll:'products',
        GetCategories:'products/categories',
        GetAllByLimit: (id: Number) => `products?limit=${id}`,
        GetById: (id: Number) => `products/${id}`,
        GetByCategory : (category: String) => `products/category/${category}`
    }
}