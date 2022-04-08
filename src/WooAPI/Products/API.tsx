export const Products = {
  RequestBodyProduct: 'products',
  BatchUpdateProduct: 'products/batch',
  RequestBodyProductAttribute: 'products/attributes',
  BatchUpdateProductAttribute: 'products/attributes/batch',
  RequestBodyProductCategory: 'products/categories',
  BatchUpdateProductCategory: 'products/categories/batch',
  RequestBodyShippingClass: 'products/shipping_classes',
  BatchUpdateShippingClass: 'products/shipping_classes/batch',
  RequestBodyProductTag: 'products/tags',
  BatchUpdateProductTag: 'products/tags/batch',
  RequestBodyProductReview: 'products/reviews',
  BatchUpdateProductReview: 'products/reviews/batch',
};

export async function URLProduct(id: number) {
  return `products/${id}`;
}

export async function URLProductVariation(product_id: number, id?: number) {
  if (id) {
    return `products/${product_id}/variations/${id}`;
  } else {
    return `products/${product_id}/variations`;
  }
}

export async function BatchURLProductVariation(product_id: number) {
  return `products/${product_id}/variations/batch`;
}

export async function URLProductAttribute(id: number) {
  return `products/attributes/${id}`;
}

export async function URLProductAttributeTerm(attribute_id: number, id?: number) {
  if (id) {
    return `products/attributes/${attribute_id}/terms/${id}`;
  } else {
    return `products/attributes/${attribute_id}/terms`;
  }
}

export async function BatchURLProductAttributeTerm(attribute_id: number) {
  return `products/attributes/${attribute_id}/terms/batch`;
}

export async function BatchURLProductCategory(id: number) {
  return `products/categories/${id}`;
}

export async function BatchURLShippingClass(id: number) {
  return `products/shipping_classes/${id}`;
}

export async function BatchURLProductTag(id: number) {
  return `products/tags/${id}`;
}

export async function BatchURLProductReview(id: number) {
  return `products/reviews/${id}`;
}
