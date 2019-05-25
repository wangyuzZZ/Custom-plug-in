class wangyuMagnifyingGlass {
    constructor(options){
        this.config = {
            url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=27&gp=0.jpg",
            width:"500px",
            height:"600px"
        }
        Object.assign(this.config, options);
        this.loadingMagnifyingGlass()
    }
    loadingMagnifyingGlass(){
        let img = document.querySelector('.img')
        let oldbox = document.querySelector('.old-img')
        let mirror = document.querySelector('.mirror')
        let enlargement = document.querySelector('.enlargement')
        oldbox.style.width = 500 +'px'
        oldbox.style.height = 500 +'px'
        img.src = this.config.url;
        enlargement.style.background = `url(${this.config.url})no-repeat`
        enlargement.style.width = 500 + 'px';
        enlargement.style.height = 500 + 'px';
        oldbox.onmousemove = function(e){
            enlargement.style.display = 'block';
            mirror.style.display = 'block';
            let x = e.clientX,
                y = e.clientY,
                boxTop = oldbox.getBoundingClientRect().top,
                boxLeft = oldbox.getBoundingClientRect().left,
                mirrorTop = (y - boxTop) - 100,
                mirrorLeft = (x - boxLeft) - 100,
                maxtop = oldbox.getBoundingClientRect().height - 200,
                maxleft = oldbox.getBoundingClientRect().width - 200;
                if(mirrorTop < 0){
                    mirrorTop = 0;
                }
                if(mirrorLeft < 0){
                    mirrorLeft = 0;
                }
                if(mirrorTop > maxtop){
                    mirrorTop = maxtop
                }
                if(mirrorLeft > maxleft){
                    mirrorLeft = maxleft
                }
                mirror.style.top = mirrorTop + 'px';
                mirror.style.left = mirrorLeft + 'px';
                enlargement.style.backgroundSize = (oldbox.getBoundingClientRect().width / 200) * 100 + '%'
                enlargement.style.backgroundPosition = mirrorLeft / maxleft * 100 +'% '+mirrorTop / maxtop * 100 + '%'
        }
    oldbox.onmouseout = function(){
        enlargement.style.display = 'none';
        mirror.style.display = 'none';
    }
}
}