import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
 
// import react-custom-share components
import { ShareButtonIconOnly, ShareBlockStandard } from 'react-custom-share';
 
const ShareComponent = props => {
  const ratio = ((+localStorage.getItem("wins")/+localStorage.getItem("attempts"))*100).toFixed(2);
  const shareBlockProps = {
    url: 'https://bensondavis.github.io/hangman/',
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    //   { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' },
    ],
    text: `Can you beat my high score in Hangman? \nWin Ratio: ${ratio}%!😎`,
    longtext: `Take a look at this old school word game, Hangman - https://bensondavis.github.io/hangman/`,
  };
 
  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;