export const getImgPath = (id: string, format: string = "original") =>
  `https://image.tmdb.org/t/p/${format}/${id}`;
