// PORT
const port = 3001;
const httpsApiUrl = `https://us-central1-disenno-software-8bfbc.cloudfunctions.net/api`;

// STORE
export const getCatogue = `${httpsApiUrl}/getCatalogue`;
export const getProduct = `${httpsApiUrl}/getProduct`;
export const getProductByName = `${httpsApiUrl}/getProductByName`;
export const addProduct = `${httpsApiUrl}/addProduct`;
export const modifyProduct = `${httpsApiUrl}/updateProduct`;

// export const updateCart = `${httpsApiUrl}/updateCart`;
export const deleteProduct = `${httpsApiUrl}/deleteProduct`;

// FILTER
export const getCategories = `${httpsApiUrl}/getCategories`;

// GALLERY
export const getContent = `${httpsApiUrl}/getContent`;
export const getGallery = `${httpsApiUrl}/getAllContent`;
export const addContent = `${httpsApiUrl}/addContent`;
export const modifyContent = `${httpsApiUrl}/updateContent`;
export const deleteContent = `${httpsApiUrl}/deleteContent`;

// USER
export const getUserInfo = `${httpsApiUrl}/infoUser`;
export const getHistory = `${httpsApiUrl}/getPurchaseHistory`;
export const getCart = `${httpsApiUrl}/getCart`;
export const updateCart = `${httpsApiUrl}/updateCart`;
export const makePurchase = `${httpsApiUrl}/makePurchase`;
export const addUser = `${httpsApiUrl}/addUser`;
export const updatePurchaseState = `${httpsApiUrl}/updatePurchaseState`;
export const getNotifications = `${httpsApiUrl}/getNotifications`;
export const updateNotificationState = `${httpsApiUrl}/updateNotificationState`;
export const isUnread = `${httpsApiUrl}/isUnread`;

// CALENDAR
export const getCalendar = `${httpsApiUrl}/getCalendar`;
export const filterCalendar = `${httpsApiUrl}/filterCalendar`;
export const createEvent = `${httpsApiUrl}/createEvent`;
export const getEvent = `${httpsApiUrl}/getEvent`;
export const updateEvent = `${httpsApiUrl}/updateEvent`;
export const deleteEvent = `${httpsApiUrl}/deleteEvent`;
export const verifyOverlap = `${httpsApiUrl}/verifyOverlap`;

// USER ROUTES
