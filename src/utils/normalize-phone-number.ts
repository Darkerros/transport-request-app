export const normalizePhoneNumber = (value: string) => {
  const string = value.replace('+7', '').replace(/[^\d]/g, '').slice(0, 10)
  if (string.length <= 3) return string.replace(/(\d{1,3})/, '+7 ($1');
  if (string.length > 3 && string.length <= 6) return string.replace(/(\d{3})(\d{0,3})/, '+7 ($1) $2');
  if (string.length > 6 && string.length <= 8) return string.replace(/(\d{3})(\d{3})(\d{0,2})/, '+7 ($1) $2  - $3');
  return string.replace(/(\d{3})(\d{3})(\d{2})(\d{0,2})/, '+7 ($1) $2  - $3 - $4');
}
