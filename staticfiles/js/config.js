const config = {
  baseURL: 'https://dsc-eventsreg.herokuapp.com/api/v1',
  URLBuilder: (packageName) => `${config.baseURL}/${packageName}/`,
};
