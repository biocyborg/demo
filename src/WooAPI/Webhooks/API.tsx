export const Webhook = {
  RequestBodyWebhook: 'webhooks',
  BatchUpdateWebhook: 'webhooks/batch',
};

export async function URLWebhook(id: number) {
  return `orders/${id}`;
}
