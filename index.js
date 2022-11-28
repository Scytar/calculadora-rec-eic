// const tr1 = document.getElementById("tr1");
// const tr2 = document.getElementById("tr2");
// const av1 = document.getElementById("av1");
// const av2 = document.getElementById("av2");
// const av3 = document.getElementById("av3");
// const av4 = document.getElementById("av4");
const maInput = document.getElementById("ma");
const button = document.getElementById('button');
const result = document.getElementById('result');

// function miaucular(tr1,tr2,av1,av2,av3,av4) {
function miaucular(ma) {
    try {
        // const media = tr1 + tr2 + ((3*av1 + 3*av2 + 3*av3 + av4)/10)
        const media = (7*ma).toFixed(2)
        console.log('media anual: ',media)

        if (ma>=7){
            return "Parabéns! Você não precisa da REC"
        } else {
            let mediaRec = (50-media)/3
            console.log('media Rec: ',mediaRec)
            mediaRec = Math.ceil(mediaRec*100)/100
            console.log('new media Rec: ',mediaRec)
            // let mediaRec
            // console.log('av1: ',av1)
            // console.log('av2: ',av2)
            // if (av1<av2){
            //     mediaRec = (21 - tr1 - tr2 - (((3*av1 + 3*av2 + 3*av3 + av4)/10))*(10/3))+av1;
            //     console.log('(av1) mediaRec: ',mediaRec)
            // } else {
            //     mediaRec = (21 - tr1 - tr2 - (((3*av1 + 3*av2 + 3*av3 + av4)/10))*(10/3))+av2;
            //     // mediaRec = 21-(tr1 + tr2 + ((3*av1 + 3*av2 + 3*av3 + av4)/10)*(10/3))+av2;
            //     console.log('(av2) mediaRec: ',mediaRec)
            // }

            return "Você precisa de "+(mediaRec.toFixed(2))
        }
    } catch (error) {
        return error
    }
}
//  =IF((21-A3-B3-((3*C3+3*D3+3*E3+F3)/10))>0;

//  (21-A3-B3-((3*C3+3*D3+3*E3+F3)/10))*(10/3)+MIN(C3:D3);"Não Precisa")

// (21 - tr1 - tr2 - ((3*av1 + 3*av2 + 3*av3 + av4)/10))*(10/3)+MIN( av1 : av2)

maInput.addEventListener('input',(e)=>{
    // e.preventDefault;
    // e.stopPropagation;
    e.stopImmediatePropagation;
    //result.textContent = miaucular(parseFloat(tr1.value),parseFloat(tr2.value),parseFloat(av1.value),parseFloat(av2.value),parseFloat(av3.value),parseFloat(av4.value));
    result.textContent = miaucular(maInput.value)
})