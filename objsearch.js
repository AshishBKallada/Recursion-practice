var nestedObj = {
    name: {
        stuff: {
            huhu: {
                value: 800
            }
        },
        homies: {
            test: {
                vibecheck: {
                    text: 'hey homie !',
                    number: 44
                }
            }
        }
    }
}
function search(obj, value) {
    for (var key in obj) {
        if (typeof (obj[key]) === 'object') {
            if (search(obj[key], value)) return true;
        }
        if (obj[key] === value) return true;
    }
    return false;
}
console.log(search(nestedObj,'hey homie !'));