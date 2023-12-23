module.exports.landing = (req, res, next) => {
  res.render(
    'pages/landing.pug',
    { 
      path: '/',
      mainTitle: 'Registra tus lecturas y realiza anotaciones'
    }
  );
}

module.exports.profile = (req, res, next) => {
  res.render(
    'pages/profile.pug',
    {
      path: '/perfil',
      mainTitle: 'Tu perfil'
    }
  )
}