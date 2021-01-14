export const isMobile = (userAgent: string) => {
  return userAgent.includes("Mobile");
};

export const containes = (comment: string, criteria: string) => {
  return comment.includes(criteria);
};
