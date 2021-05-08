export const BASE_IMG = 'https://res.cloudinary.com/jdm01263d/image/upload';
export const BASE_IMG_S3 = 'https://letsbeelife.s3.ap-east-1.amazonaws.com';
// Only Home Page
export const getImgComponent = (width, name, mode) =>
  `${BASE_IMG}w_${width}/v1611426110/upload_minimal/components/${name}_${mode}.jpg`;

export const getImgCover = (width, index) =>
  `${BASE_IMG}w_${width}/v1611411356/upload_minimal/covers/cover_${index}.jpg`;

export const getImgFeed = (width, index) =>
  `${BASE_IMG_S3}/v1614672779/feeds/feed_${index}.png`;

export const getImgProduct = (width, index) =>
  `${BASE_IMG}w_${width}/v1611420989/upload_minimal/products/shose_${index}.jpg`;

export const getImgAvatar = index =>
  `/static/images/avatars/avatar_${index}.jpg`;
