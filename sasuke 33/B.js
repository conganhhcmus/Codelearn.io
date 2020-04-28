function ticTacToe(select) {
    var boardX = [];
    var boardO = [];

    for (var i = 0; i < select.length; i++) {
        //check thang thua
        if (i % 2 == 0) {
            boardX.push(select[i]);
            if (
                boardX.filter((x) => {
                    if (x == 1 || x == 4 || x == 7) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 2 || x == 5 || x == 8) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 3 || x == 6 || x == 9) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 1 || x == 2 || x == 3) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 4 || x == 5 || x == 6) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 7 || x == 8 || x == 9) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 1 || x == 5 || x == 9) return true;
                }).length === 3
            )
                return 1;
            if (
                boardX.filter((x) => {
                    if (x == 3 || x == 5 || x == 7) return true;
                }).length === 3
            )
                return 1;
        } else {
            boardO.push(select[i]);
            if (
                boardO.filter((x) => {
                    if (x == 1 || x == 2 || x == 3) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 4 || x == 5 || x == 6) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 7 || x == 8 || x == 9) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 1 || x == 5 || x == 9) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 3 || x == 5 || x == 7) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 1 || x == 4 || x == 7) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 2 || x == 5 || x == 8) return true;
                }).length === 3
            )
                return 2;
            if (
                boardO.filter((x) => {
                    if (x == 3 || x == 6 || x == 9) return true;
                }).length === 3
            )
                return 2;
        }
        console.log(boardX, boardO);
    }
    if (select.length < 9) return -1;
    else return 0;
}

//console.log(ticTacToe([5, 3, 2, 6, 7, 9]));
