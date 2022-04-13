module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cfac9daeaebc8c98ba18bc23bdf6b88a'),
  },
});
