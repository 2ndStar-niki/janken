// 選択肢（じゃんけんの手）の配列
const choices = ["rock", "paper", "scissors"];

// 各選択肢に対応する画像のファイルパスを保持するオブジェクト
const choiceImages = {
    rock: "imgs/グー.jpg",
    paper: "imgs/パー.jpg",
    scissors: "imgs/チョキ.jpg"
};

// プレイヤーとコンピュータのスコアを保持する変数
let playerScore = 0;
let computerScore = 0;

// コンピュータが選択する関数
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

// ゲームをプレイする関数
function playGame(playerChoice) {
    const computer = computerChoice();
    const result = decideWinner(playerChoice, computer);

    // 勝敗に応じてプレイヤーとコンピュータのスコアを更新
    if (result === "勝ち") {
        playerScore++;
    } else if (result === "負け") {
        computerScore++;
    }

    if (playerScore === 1) {
        // IDが "computerlife1" の画像要素を取得
        const computerLife1 = document.getElementById("computerlife1");
        // 画像を非表示にする
        computerLife1.style.display = "none";
    }

    if (playerScore === 2) {
        const computerLife2 = document.getElementById("computerlife2");
        computerLife2.style.display = "none";
    }

    if (computerScore === 1) {
        const playerLife1 = document.getElementById("playerlife1");
        playerLife1.style.display = "none";
    }
    
    if (computerScore === 2) {
        const playerLife2 = document.getElementById("playerlife2");
        playerLife2.style.display = "none";
    }

    // 3回勝つと全体の勝負に勝利
    if (playerScore === 3) {
        const computerLife3 = document.getElementById("computerlife3");
        computerLife3.style.display = "none";
        alert("アンパンマンに勝ちました！おめでとうございます！");
        window.location.reload();
    } else if (computerScore === 3) {
        const playerLife3 = document.getElementById("playerlife3");
        playerLife3.style.display = "none";
        alert("アンパンマンに敗れました。もう一度挑戦しましょう！");
        window.location.reload();
    }
}

// 勝敗を判定する関数
function decideWinner(player, computer) {
    if (player === computer) {
        return "引き分け";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "勝ち";
    } else {
        return "負け";
    }
}
