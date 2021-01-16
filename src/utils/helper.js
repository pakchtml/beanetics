export const featuredProds = (data) => {
   return data.filter(itm => itm.featured === true);
};

// export const flattenProds = data => {
//    return data.map(itm => {
//       let image = itm.fields.image.fields.file.url;
//       // let image = itm.image.url;
//       // let image = itm.image[0].formats.medium.url;
//       return {...itm, image};
//    });
// };