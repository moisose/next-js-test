// PORT
const port = 8080;
const urlAPI = "52.53.155.96";

// STORE
export const getCatogue = `${urlAPI}:${port}/getCatalogue`;
export const getProduct = `${urlAPI}:${port}/getProduct`;
export const getProductByName = `${urlAPI}:${port}/getProductByName`;
export const addProduct = `${urlAPI}:${port}/addProduct`;
export const modifyProduct = `${urlAPI}:${port}/updateProduct`;

// export const updateCart = `${urlAPI}:${port}/updateCart`;
export const deleteProduct = `${urlAPI}:${port}/deleteProduct`;

// FILTER
export const getCategories = `${urlAPI}:${port}/getCategories`;

// GALLERY
export const getContent = `${urlAPI}:${port}/getContent`;
export const getGallery = `${urlAPI}:${port}/getAllContent`;
export const addContent = `${urlAPI}:${port}/addContent`;
export const modifyContent = `${urlAPI}:${port}/updateContent`;
export const deleteContent = `${urlAPI}:${port}/deleteContent`;

// USER
export const getUserInfo = `${urlAPI}:${port}/infoUser`;
export const getHistory = `${urlAPI}:${port}/getPurchaseHistory`;
export const getCart = `${urlAPI}:${port}/getCart`;
export const updateCart = `${urlAPI}:${port}/updateCart`;
export const makePurchase = `${urlAPI}:${port}/makePurchase`;
export const addUser = `${urlAPI}:${port}/addUser`;
export const updatePurchaseState = `${urlAPI}:${port}/updatePurchaseState`;

// USER ROUTES
