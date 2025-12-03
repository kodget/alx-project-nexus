import sanityClient from './sanityClient';

export async function getProducts() {
  const query = `*[_type == "product"]{
     _id,
    name,
    "slug": slug.current,
    description,
    price,
    availablequantity,
    category->{title, slug},
    variations[]{
      color 
    },
    images[]{
      asset->{
        url
      }
    },
    ratings,
    inStock
  }`;

  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductsByCategory(category) {
  const query = `*[_type == "product" && category->title == $category]{
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    variations[]{
      _key,
      quantity,
      color
    },
    inStock,
    ratings,
    availablequantity,
    "categories": category->{
      _id,
      title,
      description
    },
    images
  }`;
  
  try {
    return await sanityClient.fetch(query, { category });
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    title,
    slug,
    description
  }`;

  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}