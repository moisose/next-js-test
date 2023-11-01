// PORT
const port = 8080;
const url = "52.53.155.96";

// STORE
export const getCatogue = `${url}:${port}/getCatalogue`;
export const getProduct = `${url}:${port}/getProduct`;
export const getProductByName = `${url}:${port}/getProductByName`;
export const addProduct = `${url}:${port}/addProduct`;
export const modifyProduct = `${url}:${port}/updateProduct`;

// export const updateCart = `${url}:${port}/updateCart`;
export const deleteProduct = `${url}:${port}/deleteProduct`;

// FILTER
export const getCategories = `${url}:${port}/getCategories`;

// GALLERY
export const getContent = `${url}:${port}/getContent`;
export const getGallery = `${url}:${port}/getAllContent`;
export const addContent = `${url}:${port}/addContent`;
export const modifyContent = `${url}:${port}/updateContent`;
export const deleteContent = `${url}:${port}/deleteContent`;

// USER
export const getUserInfo = `${url}:${port}/infoUser`;
export const getHistory = `${url}:${port}/getPurchaseHistory`;
export const getCart = `${url}:${port}/getCart`;
export const updateCart = `${url}:${port}/updateCart`;
export const makePurchase = `${url}:${port}/makePurchase`;
export const addUser = `${url}:${port}/addUser`;
export const updatePurchaseState = `${url}:${port}/updatePurchaseState`;

// USER ROUTES
