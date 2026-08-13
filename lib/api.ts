export interface OrderItemPayload {
  slug: string;
  qty: number;
}

export interface OrderPayload {
  customer_name: string;
  customer_phone: string;
  items: OrderItemPayload[];
  upsell_item?: string | null;
  upsell_accepted: boolean;
  utm_source?: string;
  utm_campaign?: string;
  event_id: string;
  fbp?: string;
  fbc?: string;
  ttclid?: string;
  sc_click_id?: string;
}

export interface OrderResponse {
  success: boolean;
  order_id: string;
  cart_total: number;
  order_total: number;
  event_id: string;
}

export interface OrderDetail {
  order_id: string;
  customer_name: string;
  customer_phone: string;
  items: { slug: string; name_ar: string; qty: number; line_total: number }[];
  cart_total: number;
  upsell_item?: string;
  upsell_price?: number;
  upsell_accepted: boolean;
  order_total: number;
  payment_method: string;
  status: string;
  created_at: string;
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://nurdakhil-backend.acr7ld.easypanel.host"
    : "http://localhost:8000");

export async function submitOrder(payload: OrderPayload): Promise<OrderResponse> {
  const res = await fetch(`${API_BASE}/api/v1/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    try {
      const parsed = JSON.parse(text) as { detail?: string | { message?: string } };
      const detail = parsed.detail;
      if (typeof detail === "string" && detail.trim()) {
        throw new Error(detail);
      }
      if (detail && typeof detail === "object" && detail.message) {
        throw new Error(detail.message);
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        /* not JSON */
      } else if (err instanceof Error) {
        throw err;
      }
    }
    throw new Error(text || "فشل إرسال الطلب");
  }
  return res.json();
}

export async function getOrder(orderId: string): Promise<OrderDetail> {
  const res = await fetch(`${API_BASE}/api/v1/orders/${orderId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("الطلب غير موجود");
  return res.json();
}
