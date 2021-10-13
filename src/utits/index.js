const generateRandomKey = () => {
    return (Math.random() + 1).toString(36).substring(4)
}

const gatCurentDate = () => {
    const date = new Date();
    const month = date.getMonth()+1;
    return `${date.getFullYear()}-${month<10 ? "0"+month : month}-${date.getDate()<10 ? "0"+date.getDate() : date.getDate()}`;
}

const convertToSummaryData = (valueList) => {
    return [...new Set(valueList.map(row => row.category))]
    .map(unique => {
        const uniqueData = {
            key: generateRandomKey(),
            name: unique,
            act: valueList.reduce((acc, val) => {return val.category === unique && val.status === 1 ? ++acc : acc},0),
            arc: valueList.reduce((acc, val) => {return val.category === unique && val.status === 0 ? ++acc : acc},0),
        }
        return uniqueData;
    })
}
    
const findDateText = (str) => {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/gm;
    const findedData = str.split(" ").reduce((acc, word) => {
        if(word.match(regex) !== null){
            acc.push(word.match(regex));
        }
        return acc;
        
    }, []).join(", ")
    return findedData;
}

export {
    generateRandomKey,
    gatCurentDate,
    convertToSummaryData,
    findDateText,
}