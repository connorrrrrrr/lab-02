function HornsPicture (desc, horns, url, keyword, title){
    this.description = desc;
    this.horns = horns;
    this.url = url;
    this.keyword = keyword;
    this.title = title;
    HornsPicture.allHornsPics.push(this);
}
HornsPicture.allHornsPics = [];

console.log(HornsPicture.allHornsPics);

HornsPicture.prototype.renderImages = function (){

    const $divCopy = $('div:first-child').clone();

    $divCopy.find('h2').text(this.title);
    $divCopy.find('img').attr('src', this.url);
    $divCopy.find('p').text(this.description);
    $divCopy.attr('id', this.title);
    $divCopy.attr('class', this.keyword);

    $('main').append($divCopy);

};



$.ajax('../data/page-1.json').then(callbackFunction);

function callbackFunction(jsonArray) {

    console.log(jsonArray);

    jsonArray.forEach(function(hornsObject){
        new HornsPicture(hornsObject.description, hornsObject.horns, hornsObject.image_url,hornsObject.keyword,hornsObject.title);
    });

    HornsPicture.allHornsPics.forEach(value => value.renderImages());
}

console.log($('h1').text());

console.log($.ajax('../data/page-1.json'));
