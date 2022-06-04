// Ini perlu diganti
const baseApiUrl = 'https://toko-hijrah.herokuapp.com/';
const whatsappNumber = '+6289685687033';

const config = {
  baseApiUrl,
  whatsappNumber,
  chatToWhatsappLink: (phoneNumber, message) =>
    `https://wa.me/${phoneNumber}?text=${message}`,

  apiUrl: {
    products: `${baseApiUrl}api/produks`,
    product: (productId = '') => `${baseApiUrl}api/produk/${productId}`,
    categories: `${baseApiUrl}api/kategoris`,
    category: (categoryId = '') => `${baseApiUrl}api/kategori/${categoryId}`,
    users: `${baseApiUrl}api/users`,
    user: (userId = '') => `${baseApiUrl}api/user/${userId}`,
    carts: `${baseApiUrl}api/carts`,
    cart: (cartId = '') => `${baseApiUrl}api/cart/${cartId}`,
    detailcarts: `${baseApiUrl}api/detailcarts`,
    detailcart: (detailcartId = '') =>
      `${baseApiUrl}api/detailcart/${detailcartId}`,
    admins: `${baseApiUrl}api/admins`,
    admin: (adminId = '') => `${baseApiUrl}api/admin/${adminId}`,
  },
  screen: {
    sm: '640',
    md: '768',
    lg: '1024',
    xl: '1280',
    '2xl': '1536',
  },
};

const { screen: screenConfig } = config;

export { screenConfig };
export default config;
