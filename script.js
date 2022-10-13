const navbar = document.querySelector('nav');
const map = document.querySelector('.map-frame');
const mapText = document.querySelector('.open-map');
//const btn = document.querySelectorAll('.carousel-indicators [data-bs-target]');


   window.onscroll = function () {
            if(this.pageYOffset>=450){
                navbar.style.cssText ='z-index:1; position:fixed; background-image: linear-gradient( to bottom, rgba(243,129,129,0.9), rgba(243, 129, 129, 0.9));';
            }
            else  navbar.style.cssText ='position:relative; background:transparent,z-index:13;'
};

map.style.display = 'none';
let check = false;
function showMap(){
    if(!check){
        check = !check;
        mapText.style.display = 'none';
        map.style.display = 'block';
        console.log('from first' ,check)
    }
    else{
        check = !check;
		mapText.style.display = 'flex';
		map.style.display = 'none';
        console.log('from last' ,check)
    }
}