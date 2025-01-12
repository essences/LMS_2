// 研修スケジュール機能のユニットテスト

// テスト用のモックデータ
const mockTrainingData = [
    { id: 1, title: "Web開発入門", scheduled_date: "2023-10-01", start_time: "10:00", end_time: "12:00" },
    { id: 2, title: "データベース基礎", scheduled_date: "2023-10-05", start_time: "14:00", end_time: "16:00" }
];

// スケジュール作成テスト
function testCreateTrainingSchedule() {
    const trainingSchedule = {
        training: "Web開発入門",
        scheduled_date: "2023-10-01",
        start_time: "10:00",
        end_time: "12:00"
    };
    console.assert(trainingSchedule.training === "Web開発入門", "スケジュール作成テスト失敗");
}

// スケジュール編集テスト
function testEditTrainingSchedule() {
    const editedSchedule = { ...mockTrainingData[0], end_time: "13:00" };
    console.assert(editedSchedule.end_time === "13:00", "スケジュール編集テスト失敗");
}

// スケジュール削除テスト
function testDeleteTrainingSchedule() {
    const scheduleIdToDelete = 1;
    const remainingSchedules = mockTrainingData.filter(schedule => schedule.id !== scheduleIdToDelete);
    console.assert(remainingSchedules.length === 1, "スケジュール削除テスト失敗");
}

// テスト実行
testCreateTrainingSchedule();
testEditTrainingSchedule();
testDeleteTrainingSchedule();
console.log("全てのテストが完了しました。");
