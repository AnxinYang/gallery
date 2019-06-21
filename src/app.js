import cc from 'npm-ccjs-ay';
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
    let footer = cc.select('#main').add('div', 'footer')
        .content('Winter is Coming..');
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