// 研修スケジュール作成機能
document.getElementById('trainingScheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const training = document.getElementById('training').value;
    const scheduledDate = document.getElementById('scheduled_date').value;
    const startTime = document.getElementById('start_time').value;
    const endTime = document.getElementById('end_time').value;

    // ここでスケジュールを保存する処理を実装
    console.log(`研修: ${training}, 予定日: ${scheduledDate}, 開始時間: ${startTime}, 終了時間: ${endTime}`);
});

// 研修スケジュール編集機能
document.getElementById('editTrainingScheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const training = document.getElementById('training').value;
    const scheduledDate = document.getElementById('scheduled_date').value;
    const startTime = document.getElementById('start_time').value;
    const endTime = document.getElementById('end_time').value;

    // ここでスケジュールを更新する処理を実装
    console.log(`研修: ${training}, 更新予定日: ${scheduledDate}, 開始時間: ${startTime}, 終了時間: ${endTime}`);
});

// 研修スケジュール削除機能
document.getElementById('deleteTrainingScheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const training = document.getElementById('training').value;

    // ここでスケジュールを削除する処理を実装
    console.log(`研修: ${training} を削除しました。`);
});
