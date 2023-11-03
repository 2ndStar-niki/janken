// 選択肢（じゃんけんの手）の配列
const choices = ["rock", "paper", "scissors"];

// 各選択肢に対応する画像のファイルパスを保持するオブジェクト
const choiceImages = {
    rock: "imgs/グー.jpg",
    paper: "imgs/パー.jpg",
    scissors: "imgs/チョキ.jpg"
};

// コンピュータ1が選択する関数
function computerChoice() {
    const random = Math.floor(Math.random() * 3);
    const computerSelection = choices[random];
    const imagePath = choiceImages[computerSelection]; // 対応する画像ファイルのパスを取得

    // 画像を更新
    changeEnemyHandImage(imagePath);
    return computerSelection;

}

// JavaScript内で敵の手の画像を変更する関数
function changeEnemyHandImage(imagePath) {
    const enemyHandImage = document.getElementById("enemy_hand");
    enemyHandImage.src = imagePath;
}

function computerChoice2() {
    const random2 = Math.floor(Math.random() * 3);
    const computerSelection2 = choices[random2];
    const imagePath2 = choiceImages[computerSelection2];

    changeEnemyHandImage2(imagePath2);
    return computerSelection2;
}
// JavaScript内で敵の手の画像を変更する関数
function changeEnemyHandImage2(imagePath2) {
    const enemyHandImage2 = document.getElementById("enemy_hand2");
    enemyHandImage2.src = imagePath2;
}

// グー、チョキ、パーのボタンに対してクリックイベントリスナーを追加
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// プレイヤーの手を変更するためのコード（各ボタンに対してクリックイベントリスナーを追加）
const playerHandImage = document.getElementById("player_hand");
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");

rockButton.addEventListener("click", () => {
    playerHandImage.src = "imgs/グー.jpg";
});

scissorsButton.addEventListener("click", () => {
    playerHandImage.src = "imgs/チョキ.jpg";
});

paperButton.addEventListener("click", () => {
    playerHandImage.src = "imgs/パー.jpg";
});

// プレイヤーとコンピュータのスコアを保持する変数
let playerScore = 0;
let computer1Score = 0;
let computer2Score = 0;

// ゲームをプレイする関数
function playGame(playerChoice) {
    const computer = computerChoice();
    const computer2 = computerChoice2();
    const result = decideWinner(playerChoice, computer, computer2);

    // // 勝敗に応じてプレイヤーとコンピュータのスコアを更新
    // if (result === "アンパンマンの勝ち") {
    //     playerScore++;
    // } else if (result === "しょくぱんまんの勝ち") {
    //     computer2Score++;
    // } else if (result === "カレーパンマンの勝ち") {
    //     computerScore++;
    // } else if (result === "アンパンマンの負け") {
    //     computer2Score++;
    //     computerScore++;
    // } else if (result === "しょくぱんまんの負け") {
    //     playerScore++;
    //     computerScore++;
    // } else if (result === "カレーパンマンの負け") {
    //     playerScore++;
    //     computer2Score++;
    // }

    // if (playerScore === 1) {
    //     // IDが "computerlife1" の画像要素を取得
    //     const computerLife1 = document.getElementById("computerlife1");
    //     // 画像を非表示にする
    //     computerLife1.style.display = "none";
    //     const computer2Life1 = document.getElementById("computer2life1");
    //     computer2Life1.style.display = "none";
    // }

    // if (playerScore === 2) {
    //     const computerLife2 = document.getElementById("computerlife2");
    //     computerLife2.style.display = "none";
    //     const computer2Life2 = document.getElementById("computer2life2");
    //     computer2Life2.style.display = "none";
    // }

    // if (computerScore === 1) {
    //     const playerLife1 = document.getElementById("playerlife1");
    //     playerLife1.style.display = "none";
    //     const computer2Life1 = document.getElementById("computer2life1");
    //     computer2Life1.style.display = "none";
    // }
    
    // if (computerScore === 2) {
    //     const playerLife2 = document.getElementById("playerlife2");
    //     playerLife2.style.display = "none";
    //     const computer2Life2 = document.getElementById("computer2life2");
    //     computer2Life2.style.display = "none";
    // }

    // if (computer2Score === 1) {
    //     const playerLife1 = document.getElementById("playerlife1");
    //     playerLife1.style.display = "none";
    //     const computerLife1 = document.getElementById("computerlife1");
    //     computerLife1.style.display = "none";
    // }
    
    // if (computer2Score === 2) {
    //     const playerLife2 = document.getElementById("playerlife2");
    //     playerLife2.style.display = "none";
    //     const computerLife2 = document.getElementById("computerlife2");
    //     computerLife2.style.display = "none";
    // }

    // // 3回勝つと全体の勝負に勝利
    // if (playerScore === 3) {
    //     const computerLife3 = document.getElementById("computerlife3");
    //     computerLife3.style.display = "none";
    //     setTimeout(function() {
    //         alert("アンパンマンに勝ちました！おめでとうございます！");
    //         window.location.reload();
    //     }, 1); // (1ミリ秒) の遅延
    // } else if (computerScore === 3) {
    //     const playerLife3 = document.getElementById("playerlife3");
    //     playerLife3.style.display = "none";
    //     setTimeout(function() {
    //         alert("アンパンマンに敗れました。もう一度挑戦しましょう！");
    //         window.location.reload();
    //     }, 1); 
    // }
    
}

// 勝敗を判定する関数
function decideWinner(player, computer, computer2) {
    if (player === computer && computer === computer2) {
        setTimeout(function() {
        alert("引き分け");
        }, 100);
        return "引き分け";
    } else if (
        (player === "rock" && computer === "scissors" && computer2 === "scissors") ||
        (player === "paper" && computer === "rock" && computer2 === "rock") ||
        (player === "scissors" && computer === "paper" && computer2 === "paper")
    ) {
        setTimeout(function() {
            alert("アンパンマンが勝ちました！おめでとうございます！");
        }, 100);
        return "アンパンマンの勝ち";
    } else if(
        (computer2 === "rock" && computer === "scissors" && player === "scissors") ||
        (computer2 === "paper" && computer === "rock" && player === "rock") ||
        (computer2 === "scissors" && computer === "paper" && player === "paper")
    ) {
        setTimeout(function() {
            alert("しょくぱんまんの勝ち");
        }, 100);
        return "しょくぱんまんの勝ち";
    } else if(
        (computer === "rock" && computer2 === "scissors" && player === "scissors") ||
        (computer === "paper" && computer2 === "rock" && player === "rock") ||
        (computer === "scissors" && computer2 === "paper" && player === "paper")
    ) {
        setTimeout(function() {
            alert("カレーパンマンの勝ち");
        }, 100);
        return "カレーパンマンの勝ち";
    } else if (
        (player === "rock" && computer === "paper" && computer2 === "paper") ||
        (player === "paper" && computer === "scissors" && computer2 === "scissors") ||
        (player === "scissors" && computer === "rock" && computer2 === "rock")
    ) {
        setTimeout(function() {
            alert("アンパンマンの負け");
        }, 100);
        return "アンパンマンの負け";
    } else if(
        (computer2 === "rock" && computer === "paper" && player === "paper") ||
        (computer2 === "paper" && computer === "scissors" && player === "scissors") ||
        (computer2 === "scissors" && computer === "rock" && player === "rock")
    ) {
        setTimeout(function() {
            alert("しょくぱんまんの負け");
        }, 100);
        return "しょくぱんまんの負け";
    } else if(
        (computer === "rock" && computer2 === "paper" && player === "paper") ||
        (computer === "paper" && computer2 === "scissors" && player === "scissors") ||
        (computer === "scissors" && computer2 === "rock" && player === "rock")
    ) {
        setTimeout(function() {
            alert("カレーパンマンの負け");
        }, 100);
        return "カレーパンマンの負け";
    } else {
        setTimeout(function() {
        alert("引き分け");
    }, 100);
    return "引き分け";
    }
}
