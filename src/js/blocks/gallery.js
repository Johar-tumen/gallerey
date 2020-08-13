import {galleryBlock} from "./blocks";
import "../../css/gallery.scss";

    const galleryImageBlock = galleryBlock.find(".gallery-img");
    const btnLeft = galleryBlock.find("#f-arrow");
    const btnRight = galleryBlock.find("#r-arrow");
    const galleryControls = galleryBlock.find("#gallery-controls");
    
    let classPointActive = "";

    let currentId = 0;
const galleryData = [
    {id:0, img:"img/gallery/gal1.jpg"},
    {id:1, img:"img/gallery/gal2.jpg"},
    {id:2, img:"img/gallery/gal3.jpg"}
]

const controlPoint = (galleryDataPoint) =>(`
    <div class="point ${classPointActive}" id="${galleryDataPoint.id}"></div>
    `);

export default function Gallery(){
    btnLeft.bind('click', () =>{
        if((currentId - 1) >= 0){
            currentId -=1;
            renderGallery(currentId);
        }
    })
    btnRight.bind('click', () =>{
        if((currentId = 1) <= galleryData.length){
            currentId +=1;
            renderGallery(currentId);
        }
    })

    renderGallery(currentId);
}

function renderGallery(id){
    galleryImageBlock.html = (`<img src="${galleryData[id].img}" alt=""></img>`);
    galleryControls.html('');
    galleryData.map(
        (galleryDataPoint) => {
            classPointActive = (galleryDataPoint.id*1 == currentId) ? "point-active" : ""; //
            const prepareHtml = galleryControls.html() + controlPoint(galleryDataPoint.id);
            galleryControls.html(prepareHtml);
        }
    )
}
