function Get(ids) {
    const values = [];
    
    ids.forEach(element => {
        const el = document.getElementById(element);
        const val = parseFloat(el.value);
        values.unshift(val);
    });

    return values;
}

function Set(elements) {

    elements.forEach( el => {
        const parent = document.getElementById(el.id);

        if (parent) {
            parent.innerText = el.txt;
        }
    });
    
}