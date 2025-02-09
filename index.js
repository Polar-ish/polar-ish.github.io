
function clamp(start, num, end){
    if(num < start) return start;
    if(num > end) return end;
    return num;
}

var scrollable_texts = {
    index_texts : [],


    scrollElement(direction, elem, index){
        let texts_element = this.index_texts[index];
        var new_index = 
            clamp(0,
                  texts_element.current_index+direction,
                  texts_element.string.length
        );
        texts_element.current_index = new_index;
        elem.textContent = texts_element.string.slice(0, texts_element.current_index);
    },

    addElement(elem){
        this.index_texts.push({
            current_index : 0,
            string : elem.innerText
        })
        elem.innerText = "";
    }



};



document.querySelectorAll(".scrollable-text").forEach((elem, index) => {

    scrollable_texts.addElement(elem);
    elem.addEventListener("wheel", (e) => {
        scrollable_texts.scrollElement((e.deltaY/Math.abs(e.deltaY)), elem, index);
    
    });
});
    