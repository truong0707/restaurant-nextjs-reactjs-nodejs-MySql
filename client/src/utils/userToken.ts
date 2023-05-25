const getUserToken = (): string | null => {
    // const token = localStorage.getItem("token");
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJyb2xlX2lkIjoxLCJlbWFpbCI6Im50dHJ1b25nLml0MjAwMUBnbWFpbC5jb20iLCJuYW1lIjoiVHLGsOG7nW5nIE5ndXnhu4VuIiwidXNlcl9pZCI6MSwiaWF0IjoxNjg0OTAyMzc0LCJleHAiOjE2ODc0OTQzNzR9.ukSFXfSSvB9tt1-fgR1yrDgO1VvpiIHER5tsFWtDB8I";
  
    if (token) {
      console.log(token, "token")
      return token;
    }
    return null;
  };
  
  const removeUserToken = () => {
    localStorage.removeItem("token");
  };
  
  export { getUserToken, removeUserToken };
  