export const isMobile = (userAgent: string) => {
  return userAgent.includes("Mobile");
};

export const getDeviceType = (userAgent: string): "MOBILE" | "DESKTOP" => {
  return isMobile(userAgent) ? "MOBILE" : "DESKTOP";
};
