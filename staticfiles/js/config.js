const config = {
  baseURL: 'https://dsc-eventsreg.herokuapp.com',
  URLBuilder: (packageName) => `${config.baseURL}/${packageName}/`,
};
