module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/member/login', controller.member.login);

  router.resources('member', '/api/v1/member', controller.member);
};