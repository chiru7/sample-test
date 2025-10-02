function test1() {
    const obj = {
        aaa : {
            ad :  "aaa_ad",
            z1 :  "aaa_z1",
            z2 :  "aaa_z2",
            z1h : "aaa_z1h",
            z2h : "aaa_z2h",
        },
        bbb : {
            ad :  "bbb_ad",
            z1 :  "bbb_z1",
            z2 :  "bbb_z2",
            z1h : "bbb_z1h",
            z2h : "bbb_z2h",
        },
        ccc : {
            ad :  "ccc_ad",
            z1 :  "ccc_z1",
            z2 :  "ccc_z2",
            z1h : "ccc_z1h",
            z2h : "ccc_z2h",
        },
        ddd : {
            ad :  "ddd_ad",
            z1 :  "ddd_z1",
            z2 :  "ddd_z2",
            z1h : "ddd_z1h",
            z2h : "ddd_z2h",
        },
    }

    for (const key of Object.keys(obj)) {
        console.log("loop start.");

        const target = obj[key];
        console.log(key);
        console.log(target);

        if (!target.hasOwnProperty("ad")
            || !target.hasOwnProperty("z1")
            || !target.hasOwnProperty("z2")
            || !target.hasOwnProperty("z1h")
            || !target.hasOwnProperty("z2h")) {
            continue;
        }

        const adElem = document.getElementById(target["ad"]);
        if (adElem == undefined || adElem.tagName.toUpperCase() != "INPUT") {
            continue;
        }
        let z1Elem = document.forms[0].elements[target["z1"]];
        let z2Elem = document.forms[0].elements[target["z2"]];
        if (z1Elem == undefined || z2Elem == undefined) {
            continue;
        }
        if ((z1Elem.value == undefined || z1Elem.value == "")
            || (z2Elem.value == undefined || z2Elem.value == "")) {
            z1Elem = document.forms[0].elements[target["z1h"]];
            z2Elem = document.forms[0].elements[target["z2h"]];
        }

        console.log("z1Elem: %o", z1Elem);
        console.log("z2Elem: %o", z2Elem);

        const isZ1Empty = z1Elem.value == undefined || z1Elem.value == "";
        const isZ2Empty = z2Elem.value == undefined || z2Elem.value == "";
        if (isZ1Empty || isZ2Empty) {
            adElem.value = "";
        }
        else if (!isZ1Empty && !isZ2Empty) {
            adElem.value = z1Elem.value + ":" + z2Elem.value;
        }
        
        console.log("adElem: %o", adElem);
        console.log("loop end.");
    }
}


function test2() {
    const obj = {
        aaa : {
            ad :  "aaa_ad",
            z1 :  "aaa_z1",
            z2 :  "aaa_z2",
            z1h : "aaa_z1h",
            z2h : "aaa_z2h",
        },
        bbb : {
            ad :  "bbb_ad",
            z1 :  "bbb_z1",
            z2 :  "bbb_z2",
            z1h : "bbb_z1h",
            z2h : "bbb_z2h",
        },
        ccc : {
            ad :  "ccc_ad",
            z1 :  "ccc_z1",
            z2 :  "ccc_z2",
            z1h : "ccc_z1h",
            z2h : "ccc_z2h",
        },
        ddd : {
            ad :  "ddd_ad",
            z1 :  "ddd_z1",
            z2 :  "ddd_z2",
            z1h : "ddd_z1h",
            z2h : "ddd_z2h",
        },
    }

    let adElem;
    let z1Elem;
    let z2Elem;
    let z1Value;
    let z2Value;
    for (const key of Object.keys(obj)) {
        console.log("loop start.");

        const target = obj[key];
        console.log(key);
        console.log(target);

        if (!target.hasOwnProperty("ad")
            || !target.hasOwnProperty("z1")
            || !target.hasOwnProperty("z2")
            || !target.hasOwnProperty("z1h")
            || !target.hasOwnProperty("z2h")) {
            continue;
        }

        adElem = document.getElementById(target["ad"]);
        if (adElem == undefined || adElem.tagName.toUpperCase() != "INPUT") {
            continue;
        }
        z1Elem = document.forms[0].elements[target["z1"]];
        z2Elem = document.forms[0].elements[target["z2"]];
        if (z1Elem == undefined || z2Elem == undefined) {
            continue;
        }
        z1Value = z1Elem.value;
        z2Value = z2Elem.value;
        if ((z1Elem.value == undefined || z1Elem.value == "")
            || (z2Elem.value == undefined || z2Elem.value == "")) {
            z1Value = document.forms[0].elements[target["z1h"]].value;
            z2Value = document.forms[0].elements[target["z2h"]].value;
        }
        break;
    }

    if (adElem == undefined
        || z1Elem == undefined
        || z2Elem == undefined) {
        return;
    }

    console.log("adElem: %o", adElem);
    console.log("z1Elem: %o", z1Elem);
    console.log("z2Elem: %o", z2Elem);
    console.log("z1Value: %o", z1Value);
    console.log("z2Value: %o", z2Value);

    const isZ1ValueEmpty = z1Value == undefined || z1Value == "";
    const isZ2ValueEmpty = z2Value == undefined || z2Value == "";
    if (adElem.value == undefined || adElem.value == "") {
        if (!isZ1ValueEmpty && !isZ2ValueEmpty) {
            adElem.value = z1Value + ":" + z2Value;
        }
    }

    z1Elem.value = "";
    z2Elem.value = "";
    
    console.log("adElem: %o", adElem);
    console.log("loop end.");
}