const config = {
  baseURLs: 'https://dsc-eventsreg.herokuapp.com/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
  URLBuilder: (packageName) => `${config.baseURL}/${packageName}/`,
};
