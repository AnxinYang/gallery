import cc from 'npm-ccjs-ay';
import * as d3 from "d3";
import demos from './demos';

function index() {
    index.env();
    index.root();
    index.header();
    index.content();
    index.footer();
    //index.iFrame();
}


index.env = function (){
    cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
    window.addEventListener('resize', function () {
        cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
    });

};

index.root = function () {
    let root = cc.select('#body');
    let mainContainer = cc.createElement('div', 'main')
        .addClass('main-container');
    root.appendChild(mainContainer);
};

index.header = function () {
    let header = cc.select('#main').add('div', 'header');
    let logo = header.add('div', 'header-logo').addClass('header-logo').content(`Gallery`);
};

index.content = function () {
    let content = cc.select('#main').add('div', 'content');
    demos.forEach(function (demo) {
        content.addElement(index.card(demo));
    });
};

index.footer = function () {
    let footer = cc.select('#main').add('div', 'footer');
    footer.addNS('svg', 'svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
        });

    let svg = d3.select('#svg');
    let lineGenerator = d3.area()
        .curve(d3.curveCardinal);
    let counter = 0;
    let repeat = function (path) {
        path
            .transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .attr('d', pathData)
            .on("end", function () {
                counter++;
                if(counter===100)counter=0;
                repeat(path)
            });
    };

    function pathData() {
        let numberOfPoints = 5;
        let pointPadding = window.innerWidth / numberOfPoints;
        let points = [];
        for (let i = -1; i < numberOfPoints + 1; i++) {
            //points.push([pointPadding*i, (height/2)+ Math.random()*100])
            points.push([pointPadding * i, Math.abs(Math.sin(i - counter)) * 20 + Math.random() * 15])
        }
        return lineGenerator(points);
    }

    let path = svg.append('path')
        .attr('d', pathData)
        .attr('fill', 'white')
        .attr('stroke', 'white');
    repeat(path);
};

index.card = function(params = {}){
    let {title, description, url, img, color, fontColor} = params;
    let container = cc.createElement('div').addClass('card')
        .on('click', function () {
            window.open(url);
        });


    let image = container.add('div').addClass('card-img')
        .css({
            backgroundImage: `url(${img})`,
        });
    if(!img){
        image.add('i').addClass('fas').addClass('fa-exclamation-triangle');
    }

    let content = container.add('div').addClass('card-content');
    content.add('strong').content(title);

    let p = content.add('p').content(description);

    if(color){
        content .css({
            backgroundColor: color,
            color: fontColor || 'white'
        });
        p.css({
            color: fontColor || 'white'
        })
    }

    return container;
};

index.iFrame = function () {
    let root = cc.select('#body');
    let mainContainer = cc.createElement('div', 'iFrame')
        .addClass('iFrame');
    root.appendChild(mainContainer);
};

index();