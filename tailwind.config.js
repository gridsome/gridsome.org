module.exports = {
  theme: {
  	// Color system: https://medium.com/nodesdigital/dark-mode-working-with-color-systems-e73aeab8dbae
    colors: {
      'light': 'var(--bg)',
      'light-transparent': 'var(--bg-transparent)',
    	'light-teritary': 'var(--bg-teritary)',
      'dark': 'var(--body-color)',
      'dark-secondary': 'var(--body-color-dark)',
      'dark-teritary': 'var(--body-color)',
      'tint': 'var(--primary-color)',
      'tint-secondary': 'var(--primary-color-dark)',
      'tint-teritary': 'var(--primary-color-tint)',
      'placeholder': 'var(--placeholder)',
      'seperator': 'var(--border-color)',
      'seperator-dark': 'var(--border-color-darker)'
    },
    extend: {
      spacing: {
        'header': '65px',
        'header-mobile' : '50px',
        'sidebar' : '240px'
      },
      maxWidth: {
        'container-outer' : '1500px'
      },
      boxShadow: {
        'strong' : '1px 1px 1px rgba(0,0,0,1)'
      }
    }
  },
}