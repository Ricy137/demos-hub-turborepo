const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'bmp', 'webp', 'ico'];

export const getFileName = (url: string) => {
  return url.split('/').pop();
};

export const isImage = (fileName: string) => {
  let extension = fileName.split('.').pop();
  return IMAGE_EXTENSIONS.includes(extension ?? '');
};

export const isPDF = (fileName: string) => {
  let extension = fileName.split('.').pop();
  return extension === 'pdf';
};
