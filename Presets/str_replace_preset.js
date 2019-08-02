module.exports = {
  test: /api_config\.js$/,
  loader: 'string-replace-loader',
  options: {
    multiple: [
      {
        search: '__SERVER_URL_HOLDER__',
        replace: process.env.SERVER_URL ? JSON.stringify(process.env.SERVER_URL) : '__SERVER_URL_HOLDER__'
      },
      {
        search: '__BACK_URL_HOLDER__',
        replace: process.env.BACK_URL ? JSON.stringify(process.env.BACK_URL) : '__BACK_URL_HOLDER__'
      }
    ]
  }
};