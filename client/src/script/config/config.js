// Ini perlu diganti
const baseApiUrl = 'http://192.168.43.26:8000/';
const whatsappNumber = '+62xxxxxxxxxxx';

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
