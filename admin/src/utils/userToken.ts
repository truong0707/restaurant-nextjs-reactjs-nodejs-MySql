const getUserToken = (): string | null => {
  // const token = localStorage.getItem("token");
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjoxLCJlbWFpbCI6Im50dHJ1b25nLml0MjAwMUBnbWFpbC5jb20iLCJuYW1lIjoiVHLGsOG7nW5nIE5ndXnhu4VuIiwidXNlcl9pZCI6MSwiaWF0IjoxNjgxOTUzNjUxLCJleHAiOjE2ODQ1NDU2NTF9.MQ-TPHw9cIBamJ161_zhK6R2vA-MH_sTkxjuBai7YbU";
  console.log(token, "token")
  if (token) {
    return token;
  }
  return null;
};

const removeUserToken = () => {
  localStorage.removeItem("token");
};

export { getUserToken, removeUserToken };
