import cc from 'npm-ccjs-ay';
function index() {
    index.env();
    index.root();
    index.header();
    index.content();
    index.footer();
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
    for(let i=0;i<10;i++) {
        content.addElement(index.card({
            title: 'Test',
            description: 'A Sample description.'
        }));
    }
};

index.footer = function () {
    let footer = cc.select('#main').add('div', 'footer');
};

index.card = function(params = {}){
    let {title, description} = params;
    let container = cc.createElement('div').addClass('card');
    container.add('div').addClass('card-img');

    let content = container.add('div').addClass('card-content');
    content.add('strong').content(title);
    content.add('p').content(description);

    return container;
};

index();