const KSA_PHONE_RE = /^05\d{8}$/;

export function validateKsaPhone(phone: string): boolean {
  return KSA_PHONE_RE.test(phone.trim());
}

export function maskPhone(phone: string): string {
  const p = phone.trim();
  if (p.length < 10) return p;
  return `${p.slice(0, 2)}******${p.slice(-2)}`;
}
