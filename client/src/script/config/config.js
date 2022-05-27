// Ini perlu diganti
const baseApiUrl = 'http://192.168.43.26:8000/';

const config = {
  baseApiUrl,
  apiUrl: {
    products: `${baseApiUrl}api/produks`,
    categories: `${baseApiUrl}api/kategoris`,
    category: `${baseApiUrl}api/kategori`,
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
