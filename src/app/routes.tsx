// PORT
const port = 3001;
const apiUrl =
  "https://us-central1-proyectodisenno-7d92d.cloudfunctions.net/api";

// STORE
export const getCatogue = `${apiUrl}/getCatalogue`;
export const getProduct = `${apiUrl}/getProduct`;
export const getProductByName = `${apiUrl}/getProductByName`;
export const addProduct = `${apiUrl}/addProduct`;
export const modifyProduct = `${apiUrl}/updateProduct`;

// export const updateCart = `${apiUrl}/updateCart`;
export const deleteProduct = `${apiUrl}/deleteProduct`;

// FILTER
export const getCategories = `${apiUrl}/getCategories`;

// GALLERY
export const getContent = `${apiUrl}/getContent`;
export const getGallery = `${apiUrl}/getAllContent`;
export const addContent = `${apiUrl}/addContent`;
export const modifyContent = `${apiUrl}/updateContent`;
export const deleteContent = `${apiUrl}/deleteContent`;

// USER
export const getUserInfo = `${apiUrl}/infoUser`;
export const getHistory = `${apiUrl}/getPurchaseHistory`;
export const getCart = `${apiUrl}/getCart`;
export const updateCart = `${apiUrl}/updateCart`;
export const makePurchase = `${apiUrl}/makePurchase`;
export const addUser = `${apiUrl}/addUser`;
export const updatePurchaseState = `${apiUrl}/updatePurchaseState`;

// USER ROUTES
