export const filterTokenUser = (dataLocal: any) => {
  if (dataLocal) {
    const parserData = JSON.parse(dataLocal);

    return parserData.data.token;
  }

  return null;
};
