export const getBase64 = (img: any, callback: (param: any) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
