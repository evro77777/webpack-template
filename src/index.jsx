import Post from '@models/Post';
import * as $ from 'jquery';
import json from './assets/json';
import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel';



const post = new Post('Webpack Post Title',WebpackLogo);

const App = () => (
    <div className="container">
    <h1>WebPack course</h1>
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
        <h2>less</h2>
    </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
</div>);
$('pre').html(post.toString());
render(<App />,document.getElementById('app'));

// console.log('JSON',json);
// console.log('xml',xml);
// console.log('csv',csv);