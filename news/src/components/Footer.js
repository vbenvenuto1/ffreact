
import React, { Component } from 'react';

import "./css/s_footer.css";


class Footer extends Component {
  render() {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">OneSource News</h5>
      
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Join the Cause</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://twitter.com/OneSourceNews1?ref_src=twsrc%5Etfw&ref_url=http%3A%2F%2Flocalhost%3A3000%2Ftechnology">Follow Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jobs</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;
