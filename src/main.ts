export function checkTwPhone(phone: string): boolean {
  const regex: RegExp = /(^09[0-9]{8}$|^9[0-9]{8}$)/; // allowed (0)9
  return regex.test(phone);;
}

export const checkEmail = (email: string): boolean => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}