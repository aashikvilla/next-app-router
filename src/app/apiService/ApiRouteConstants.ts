const FAKEAPI_URL = process.env.NEXT_PUBLIC_FAKEAPI_BASE_URL;
const NOTESAPP_URL = process.env.NEXT_PUBLIC_NOTESAPP_BASE_URL;
export const ApiRouteConstants = {
  Users: {
    GetAll: FAKEAPI_URL + "/users",
  },
  Products: {
    GetAll: FAKEAPI_URL + "/products",
    GetCategories: FAKEAPI_URL + "/products/categories",
    GetAllByLimit: (id: Number) => `${FAKEAPI_URL}/products?limit=${id}`,
    GetById: (id: Number) => `${FAKEAPI_URL}/products/${id}`,
    GetByCategory: (category: String) =>
      `${FAKEAPI_URL}/products/category/${category}`,
  },
  Notes: {
    GetAll: (
      userId: String,
      pageNumber: Number,
      pageSize: Number,
      searchTerm: String
    ) =>
      `${NOTESAPP_URL}/Note/GetNotesForUserWithPagination/${userId}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchTerm=${searchTerm}`,
  },
};
