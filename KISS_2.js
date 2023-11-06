// 두가지 이상의 기능을 담당하고 있는 함수도 KISS 원칙에 어긋난다.

// 함수 안에서 데이터베이스에 업데이트를 한 다음, 프린트하는 기능을 가진 함수.
function updateAndPrint(rawData) {

    //prep data ....
    //more code ....
    db.update(rawData);

    //get printer ....
    //more code ....
    printer.print(data);

}


// 한가지의 기능만 책임지게 기능들을 분리
// 이제는 원할 때마다 업데이트를 하고, 프린트를 개별적으로 할 수도 있다. 
function update(rawData) {
    //prep data...
    db.update(rawData);
    //more code...
    return data;
}

function print(data) {
    //get printer....
    //more code....
    printer.print(data);
}