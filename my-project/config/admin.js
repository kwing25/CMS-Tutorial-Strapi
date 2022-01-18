module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c097fad74983615f982187ceeaecb527'),
  },
});
