export const Order = {
  RequestBodyOrder: 'orders',
  BatchUpdateOrder: 'orders/batch',
};

export async function URLOrder(id: number) {
  return `orders/${id}`;
}

export async function URLOrderNote(id: number, note_id?: number) {
  if (note_id) {
    return `orders/${id}/notes/${note_id}`;
  } else {
    return `orders/${id}/notes`;
  }
}

export async function URLRefund(id: number, refund_id?: number) {
  if (refund_id) {
    return `orders/${id}/refunds/${refund_id}`;
  } else {
    return `orders/${id}/refunds`;
  }
}
