export function twPhone(phone: string): boolean {
  const regex: RegExp = /(^09[0-9]{8}$|^9[0-9]{8}$)/; // allowed (0)9
  return regex.test(phone);;
}