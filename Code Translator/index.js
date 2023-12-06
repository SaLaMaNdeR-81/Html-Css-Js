const element = document.getElementById("Text-Box")
const Element_Hiden = document.getElementById("Hiden")

const text = "**Hello** **%Color='green,World'%** ";

// ==========================================

const ModifiedText = text
    /* %Color='<Color,Text>'% to Change Object Color */
    .replace(/%Color='(.*?),(.*?)'%/, (MainObject, Object1, Object2) => `<span style="color: ${Object1} ;" > ${Object2} </span>`)

    /* **<Text>** to Bold Object */
    .replace(/\*\*(.*?)\*\*/g, (MainObject, Object) => `<span style="font-weight: 600;">${Object}</span>`);

// ==========================================

element.innerHTML += ModifiedText
