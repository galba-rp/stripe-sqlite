module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f5c481f0d0585b8d1019f22bfd4e068'),
  },
});
