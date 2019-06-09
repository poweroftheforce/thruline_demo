import React from 'react';
import LinkBoxRow from './LinkBoxRow';
import './styles/App.css';

function App() {
    let pods = {
        row1: {
            pod1: {
                title:      'Determine Your Career',
                subTitle:   'Goals',
                headline:   'H3 Headline 1',
                text:       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                lineColor:  '#a3c642',
                linkHref:   'http://www.google.com'
            },
            pod2: {
                title:      'Research Education',
                subTitle:   'Degrees',
                headline:   'H3 Headline 2',
                text:       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                lineColor:  'red',
                linkHref:   'https://www.google.com/maps'
            }
        },
        row2: {
            pod1: {
                title:      'Locate Schools in your',
                subTitle:   'State',
                headline:   'H3 Headline 3',
                text:       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                lineColor:  'magenta',
                linkHref:   'https://docs.google.com'
            },
            pod2: {
                title:      'Explore Teacher',
                subTitle:   'Resources',
                headline:   'H3 Headline 4',
                text:       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                lineColor:  'blue',
                linkHref:   'https://mail.google.com'
            }
        }
    };

    return (
        <div className="app">
          <a className="logo" href="https://www.thru-line.com/" target="_blank"><img src="data:image/png;base64,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" alt="logo"/></a>
          <header className="header">
            <h1>What Our Site Offers</h1>
            <p>Your educational path will be specific to you, but many times the questions and links below offer a great place to start.</p>
          </header>
          <div className="container-fluid">
            <div className="bd">
                <LinkBoxRow {...pods.row1}/>
                <LinkBoxRow {...pods.row2}/>
            </div>
          </div>
        </div>
    );
}

export default App;
