import { publish } from 'gh-pages';

publish(
 'public', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/academicgit/wordle.git', // Update to point to your repository
  user: {
   name: 'Parv Ashwani', // update to use your name
   email: 'hackyourworldwithparv@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
