import React from 'react';
import './Footer.css';
const Footer = () => {


    return (
        <div class="container">
            <footer>
        <div class="row" align="center">
            <h2>Flat Social Button Small</h2>
            <ul>
                <li><button class="btn facebook-flat"><i class="fa fa-facebook fa-2x"></i></button>
                </li>
                <li><button class="btn twitter-flat"><i class="fa fa-twitter fa-2x"></i></button>
                </li>
                <li><button class="btn google-flat"><i class="fa fa-google-plus fa-2x"></i></button>
                </li>
                <li><button class="btn linkedin-flat"><i class="fa fa-linkedin fa-2x"></i></button>
                </li>
                <li><button class="btn github-flat"><i class="fa fa-github-alt  fa-2x"></i></button>
                </li>
                <li><button class="btn pinterest-flat"><i class="fa fa-pinterest fa-2x"></i></button>
                </li>
                <li><button class="btn dropbox-flat"><i class="fa fa-dropbox  fa-2x"></i></button>
                </li>
                <li><button class="btn flickr-flat"><i class="fa fa-flickr fa-2x"></i></button>
                </li>
                <li><button class="btn youtube-flat"><i class="fa fa-youtube fa-2x"></i></button>
                </li>
            </ul>
        </div>
        </footer>
        </div>
    )
}

export default Footer;