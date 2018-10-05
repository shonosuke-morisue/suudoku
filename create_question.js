////////////////////////////////////////////////////////////// 
// 
// Answer クラス 
// 
////////////////////////////////////////////////////////////// 


class Answer{
    constructor(){
        this.answer = [
            [1,2,3,4,5,6,7,8,9],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        this.checkBlock = [
            [0,0,0,3,3,3,6,6,6], // row 0 column 0-9 
            [0,0,0,3,3,3,6,6,6], // row 1 column 0-9 
            [0,0,0,3,3,3,6,6,6], // row 2 column 0-9 
            [1,1,1,4,4,4,7,7,7], // row 3 column 0-9 
            [1,1,1,4,4,4,7,7,7], // row 4 column 0-9 
            [1,1,1,4,4,4,7,7,7], // row 5 column 0-9 
            [2,2,2,5,5,5,8,8,8], // row 6 column 0-9 
            [2,2,2,5,5,5,8,8,8], // row 7 column 0-9 
            [2,2,2,5,5,5,8,8,8] // row 8 column 0-9 
        ];
        
        this.createAnswer();
    }

    createAnswer(){
        console.log("前: " + this.answer[0]);
        shuffle(this.answer[0]);
        console.log("後: " + this.answer[0]);

        for (let row = 1; row < this.answer.length; row++) { // 行
            this.createBlock();
            this.createColumn();
            let temp = shuffle(this.answer[0]);

            for (let boxColumn = 0; boxColumn < this.answer[row].length; boxColumn++) { // 列 入れる箱
                    
                console.log("-------------箱入れスタート---------------");
                for (let column = 0; column < this.answer[row].length; column++) { // 列 入れる数値


                    const checkBlock = this.checkBlock[row][boxColumn];
                    const columnCheck = this.column[boxColumn].indexOf(temp[column]);
                    const blockCheck = this.block[checkBlock].indexOf(temp[column]);

                    console.log("block : " + this.block[checkBlock]);
                    console.log("column : " + this.column[column]);
                    console.log("temp[column] : " + temp[column]);
                    if (columnCheck < 0 && blockCheck < 0) {
                        this.answer[row][boxColumn] = temp[column];
                        
                        console.log("answer[row]: " + column + " :" + this.answer[row]);
                        console.log("入れた！" + temp[column]);
                        temp[column] = 0;
                        break;
                    }else if(column === this.answer[row].length - 1){
                        //boxColumn -= 1;
                        //this.answer[row] = [0,0,0,0,0,0,0,0,0];
                        temp = shuffle(this.answer[0]);
                        console.log("見つけられなかった！");
                        break;
                    }
                    console.log("answer[row]: " + column + " :" + this.answer[row]);
                }
            }
        }
        // this.createBlock();
        console.log(this.block);
        console.log(this.column);
        console.log(this.answer);
    }


    createBlock(){
        this.block =[
            [this.answer[0][0],this.answer[0][1],this.answer[0][2],this.answer[1][0],this.answer[1][1],this.answer[1][2],this.answer[2][0],this.answer[2][1],this.answer[2][2]],
            [this.answer[0][3],this.answer[0][4],this.answer[0][5],this.answer[1][3],this.answer[1][4],this.answer[1][5],this.answer[2][3],this.answer[2][4],this.answer[2][5]],
            [this.answer[0][6],this.answer[0][7],this.answer[0][8],this.answer[1][6],this.answer[1][7],this.answer[1][8],this.answer[2][6],this.answer[2][7],this.answer[2][8]],
            [this.answer[3][0],this.answer[3][1],this.answer[3][2],this.answer[4][0],this.answer[4][1],this.answer[4][2],this.answer[5][0],this.answer[5][1],this.answer[5][2]],
            [this.answer[3][3],this.answer[3][4],this.answer[3][5],this.answer[4][3],this.answer[4][4],this.answer[4][5],this.answer[5][3],this.answer[5][4],this.answer[5][5]],
            [this.answer[3][6],this.answer[3][7],this.answer[3][8],this.answer[4][6],this.answer[4][7],this.answer[4][8],this.answer[5][6],this.answer[5][7],this.answer[5][8]],
            [this.answer[6][0],this.answer[6][1],this.answer[6][2],this.answer[7][0],this.answer[7][1],this.answer[7][2],this.answer[8][0],this.answer[8][1],this.answer[8][2]],
            [this.answer[6][3],this.answer[6][4],this.answer[6][5],this.answer[7][3],this.answer[7][4],this.answer[7][5],this.answer[8][3],this.answer[8][4],this.answer[8][5]],
            [this.answer[6][6],this.answer[6][7],this.answer[6][8],this.answer[7][6],this.answer[7][7],this.answer[7][8],this.answer[8][6],this.answer[8][7],this.answer[8][8]]
        ]
    }

    createColumn(){
        this.column = [
            [this.answer[0][0],this.answer[1][0],this.answer[2][0],this.answer[3][0],this.answer[4][0],this.answer[5][0],this.answer[6][0],this.answer[7][0],this.answer[8][0]],
            [this.answer[0][1],this.answer[1][1],this.answer[2][1],this.answer[3][1],this.answer[4][1],this.answer[5][1],this.answer[6][1],this.answer[7][1],this.answer[8][1]],
            [this.answer[0][2],this.answer[1][2],this.answer[2][2],this.answer[3][2],this.answer[4][2],this.answer[5][2],this.answer[6][2],this.answer[7][2],this.answer[8][2]],
            [this.answer[0][3],this.answer[1][3],this.answer[2][3],this.answer[3][3],this.answer[4][3],this.answer[5][3],this.answer[6][3],this.answer[7][3],this.answer[8][3]],
            [this.answer[0][4],this.answer[1][4],this.answer[2][4],this.answer[3][4],this.answer[4][4],this.answer[5][4],this.answer[6][4],this.answer[7][4],this.answer[8][4]],
            [this.answer[0][5],this.answer[1][5],this.answer[2][5],this.answer[3][5],this.answer[4][5],this.answer[5][5],this.answer[6][5],this.answer[7][5],this.answer[8][5]],
            [this.answer[0][6],this.answer[1][6],this.answer[2][6],this.answer[3][6],this.answer[4][6],this.answer[5][6],this.answer[6][6],this.answer[7][6],this.answer[8][6]],
            [this.answer[0][7],this.answer[1][7],this.answer[2][7],this.answer[3][7],this.answer[4][7],this.answer[5][7],this.answer[6][7],this.answer[7][7],this.answer[8][7]],
            [this.answer[0][8],this.answer[1][8],this.answer[2][8],this.answer[3][8],this.answer[4][8],this.answer[5][8],this.answer[6][8],this.answer[7][8],this.answer[8][8]]
        ]
    }

}

function shuffle(array){
    for(var i = array.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array
}


const answer = new Answer;

let tableData = "";
for (let i = 0; i < answer.answer.length; i++) {    
    tableData += "<tr>";
    for (let ii = 0; ii < answer.answer[i].length; ii++) {
        tableData += "<td align='center' style='border:1px solid #000; border-collapse: collapse;'>" + answer.answer[i][ii] +"</td>";
    }
    tableData += "</tr>";
}

document.getElementById("container").innerHTML = "<table width='200' style='border:1px solid #000; border-collapse: collapse;'>"+ tableData + "</table>";

// answer.answer[1] = shuffle(answer.answer[1]);
